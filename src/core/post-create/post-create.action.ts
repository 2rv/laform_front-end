import { httpRequest } from 'src/main/http';
import {
  PostCreateActionType,
  PostValues,
  POST_CREATE_ACTION_TYPE,
  POST_FIELD_NAME,
} from './post-create.type';
import { convertForSave, convertForChange } from './post-create.convert';
import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { BasicFileType, BasicPostType, FileType } from 'src/lib/basic-types';
import { redirect } from 'src/main/navigation';
import {
  PRODUCTS_LIST_ROUTE_PATH,
  PRODUCTS_LIST_TAB_TYPES,
} from '../products-list';

async function uploadFileAction(
  image: FileType[],
): Promise<AxiosResponse<BasicFileType> | { data: BasicFileType }> {
  if (!image[0].file) {
    return {
      data: {
        id: image[0].id || '',
        fileUrl: image[0]?.fileUrl,
      },
    };
  }

  const formData = new FormData();
  formData.append('file', image[0].file);

  return await httpRequest({
    method: 'POST',
    url: '/file/create',
    data: formData,
  });
}

export function postCreateAction(values: PostValues) {
  return async (dispatch: Dispatch<PostCreateActionType>) => {
    try {
      dispatch({
        type: POST_CREATE_ACTION_TYPE.CREATE_PENDING,
      });

      const imagesRes = await uploadFileAction(values[POST_FIELD_NAME.IMAGES]);
      const postData = convertForSave(imagesRes.data, values);

      await httpRequest({
        method: 'POST',
        url: '/post/create',
        data: postData,
      });

      dispatch({
        type: POST_CREATE_ACTION_TYPE.CREATE_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: POST_CREATE_ACTION_TYPE.CREATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}

export function postGetByIdAction(id: string) {
  return async (dispatch: Dispatch<PostCreateActionType>) => {
    dispatch({
      type: POST_CREATE_ACTION_TYPE.GET_PENDING,
    });

    try {
      const response: AxiosResponse<BasicPostType> = await httpRequest({
        method: 'GET',
        url: '/post/get/for-update/' + id,
      });
      dispatch({
        type: POST_CREATE_ACTION_TYPE.GET_SUCCESS,
        data: convertForChange(response.data),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: POST_CREATE_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}

export function postUpdateAction(id: string, values: PostValues) {
  return async (dispatch: Dispatch<PostCreateActionType>) => {
    dispatch({
      type: POST_CREATE_ACTION_TYPE.UPDATE_PENDING,
    });

    try {
      const imagesRes = await uploadFileAction(values[POST_FIELD_NAME.IMAGES]);

      const postData = convertForSave(imagesRes.data, values);

      await httpRequest({
        method: 'PUT',
        url: '/post/update/' + id,
        data: postData,
        params: {
          lang: 'ru',
        },
      });

      dispatch({
        type: POST_CREATE_ACTION_TYPE.UPDATE_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: POST_CREATE_ACTION_TYPE.UPDATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}

export function postRemoveByIdAction(id: string) {
  return async (dispatch: Dispatch<PostCreateActionType>) => {
    dispatch({
      type: POST_CREATE_ACTION_TYPE.REMOVE_PENDING,
    });
    try {
      await httpRequest({
        method: 'DELETE',
        url: '/post/delete/' + id,
      });
      dispatch({
        type: POST_CREATE_ACTION_TYPE.REMOVE_SUCCESS,
      });
      redirect(PRODUCTS_LIST_ROUTE_PATH, {
        params: { type: PRODUCTS_LIST_TAB_TYPES[4] },
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: POST_CREATE_ACTION_TYPE.REMOVE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
