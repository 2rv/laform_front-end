import axios from 'axios';

import { redirect } from '../navigation/navigation.core';
import { StorageTool } from '../helpers';
import * as httpService from './http.service';

import { BASE_URL, API_CONSTANTS } from './http.constant';
import { HTTP_ERROR_ROUTER } from './index';

let subscribers = [];
let isRefreshing = false;

const httpRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
});


const onRequestSuccess = (config) => {
  const token = StorageTool.get('accessToken');

  const extendedConfig = { ...config };

  if (token) {
    extendedConfig.headers.Authorization = `Bearer ${token}`;
  }

  if (config.url?.includes(`${API_CONSTANTS.AUTH}/signin`)) {
    delete extendedConfig.headers.Authorization;
  }

  return extendedConfig;
}

const onRequestError = (error) => {
  return Promise.reject(error);
}

httpRequest.interceptors.request.use(onRequestSuccess, onRequestError);


const onResponseSuccess = (response) => {
  return response;
};

const onResponseError = async (error) => {
  const originalRequest = error.config;
  const status = error?.response?.status;
  const message = error?.response?.data?.message;
  const refreshToken = StorageTool.get('refreshToken');

  function retryRequest(accessToken) {
    const config = originalRequest;

    config.headers.Authorization = `Bearer ${accessToken}`;

    return axiosInstance(config);
  }

  if (
    !originalRequest.url?.includes(`${API_CONSTANTS.AUTH}/signin`) &&
    status === 401 &&
    !originalRequest.url?.includes(`${API_CONSTANTS.AUTH}/refresh`) &&
    refreshToken
  ) {
    if (!isRefreshing) {
      isRefreshing = true;

      try {
        const token = await httpService.refreshToken(refreshToken);

        isRefreshing = false;
        subscribers.map((cb) => cb(token));
        subscribers = [];

        return retryRequest(token);
      } catch {
        isRefreshing = false;
        subscribers = [];

        httpService.logout();
        return redirect(HTTP_ERROR_ROUTER.UNAUTHORIZED_ERROR);
      }
    }

    return new Promise((resolve) => {
      subscribers.push((token) => {
        originalRequest.headers.Authorization = `Bearer ${token}`;

        return resolve(axiosInstance(originalRequest));
      });
    });
  }

  if (!error.response) {
    return redirect(HTTP_ERROR_ROUTER.INTERNAL_SERVER_ERROR);
  }
  if (error.response) {
    if (error.response.status === 403) {
      return redirect(HTTP_ERROR_ROUTER.ACCESS_DENIED);
    }

    if (error.response.status === 500) {
      return redirect(HTTP_ERROR_ROUTER.SERVER_ERROR);
    }

    if (error.response.status === 404) {
      return redirect(HTTP_ERROR_ROUTER.NOT_FOUND);
    }

    return Promise.reject(error);
  }
};

httpRequest.interceptors.response.use(onResponseSuccess, onResponseError);

export { httpRequest };
