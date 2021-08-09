import { StorageTool } from '../helpers';

import { httpRequest } from './http.core';
import { API_CONSTANTS } from './http.constant';

export const refreshToken = async (token) => {
    const { data } = await httpRequest.post(`${API_CONSTANTS.AUTH}/refresh`, {
        refreshToken: token,
    });

    StorageTool.set('accessToken', data.accessToken);
    StorageTool.set('refreshToken', data.refreshToken);

    return data.accessToken;
};

export const logout = () => {
    StorageTool.clear();
};