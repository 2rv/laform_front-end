import { redirect } from 'src/main/navigation';
import { httpRequest } from 'src/main/http';
import {
  convertForChange,
  convertForSave,
} from './sewing-goods-create.convert';
import {
  SewingGoodsCreateActionType,
  SewingGoodsValues,
  SEWING_GOODS_CREATE_ACTION_TYPE,
  SEWING_GOODS_CREATE_FIELD_NAME,
} from './sewing-goods-create.type';
import {
  PRODUCTS_LIST_ROUTE_PATH,
  PRODUCTS_LIST_TAB_TYPES,
} from '../products-list';
import { Dispatch } from 'react';
import {
  BasicFileType,
  BasicSewingGoodType,
  FileType,
} from 'src/lib/basic-types';
import { AxiosResponse } from 'axios';

async function uploadFilesAction(files: FileType[]): Promise<BasicFileType[]> {
  type accumulator = {
    newFiles: FileType[];
    oldFiles: BasicFileType[];
  };

  const { newFiles, oldFiles } = files.reduce<accumulator>(
    (acc, file) => {
      if (!!file.file) acc.newFiles.push(file);
      if (!file.file && file.id) {
        acc.oldFiles.push({
          id: file.id,
          fileUrl: file?.fileUrl,
        });
      }
      return acc;
    },
    { newFiles: [], oldFiles: [] },
  );

  if (!newFiles.length) {
    return oldFiles.map((file) => {
      return {
        id: file.id || '',
        fileUrl: file?.fileUrl,
      };
    });
  }

  const formData = new FormData();

  newFiles.forEach((file) => {
    if (file.file) formData.append('files', file.file);
  });

  const resultImages: AxiosResponse<BasicFileType[]> = await httpRequest({
    method: 'POST',
    url: '/file/create-many',
    data: formData,
  });
  const res = oldFiles.concat(resultImages.data);

  return res;
}

export function sewingGoodsGetByIdAction(id: string) {
  return async (dispatch: Dispatch<SewingGoodsCreateActionType>) => {
    dispatch({
      type: SEWING_GOODS_CREATE_ACTION_TYPE.GET_PENDING,
    });

    try {
      const response: AxiosResponse<BasicSewingGoodType> = await httpRequest({
        method: 'GET',
        url: '/sewing-product/get/for-update/' + id,
      });
      dispatch({
        type: SEWING_GOODS_CREATE_ACTION_TYPE.GET_SUCCESS,
        data: convertForChange(response.data),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SEWING_GOODS_CREATE_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function sewingGoodsRemoveByIdAction(id: string) {
  return async (dispatch: Dispatch<SewingGoodsCreateActionType>) => {
    dispatch({
      type: SEWING_GOODS_CREATE_ACTION_TYPE.REMOVE_PENDING,
    });
    try {
      await httpRequest({
        method: 'DELETE',
        url: '/sewing-product/delete/' + id,
      });
      dispatch({
        type: SEWING_GOODS_CREATE_ACTION_TYPE.REMOVE_SUCCESS,
      });
      redirect(PRODUCTS_LIST_ROUTE_PATH, {
        params: { type: PRODUCTS_LIST_TAB_TYPES[3] },
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SEWING_GOODS_CREATE_ACTION_TYPE.REMOVE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function sewingGoodsCreateAction(values: SewingGoodsValues) {
  return async (dispatch: Dispatch<SewingGoodsCreateActionType>) => {
    dispatch({
      type: SEWING_GOODS_CREATE_ACTION_TYPE.CREATE_PENDING,
    });
    try {
      const images = await uploadFilesAction(
        values[SEWING_GOODS_CREATE_FIELD_NAME.IMAGES],
      );

      const sewingGoodsData = convertForSave(images, values);
      await httpRequest({
        method: 'POST',
        url: '/sewing-product/create',
        data: sewingGoodsData,
      });
      dispatch({
        type: SEWING_GOODS_CREATE_ACTION_TYPE.CREATE_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SEWING_GOODS_CREATE_ACTION_TYPE.CREATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function sewingGoodsUpdateAction(id: string, values: SewingGoodsValues) {
  return async (dispatch: Dispatch<SewingGoodsCreateActionType>) => {
    dispatch({
      type: SEWING_GOODS_CREATE_ACTION_TYPE.UPDATE_PENDING,
    });
    try {
      const images = await uploadFilesAction(
        values[SEWING_GOODS_CREATE_FIELD_NAME.IMAGES],
      );
      const sewingGoodsData = convertForSave(images, values);

      await httpRequest({
        method: 'PUT',
        url: '/sewing-product/update/' + id,
        data: sewingGoodsData,
      });
      dispatch({
        type: SEWING_GOODS_CREATE_ACTION_TYPE.UPDATE_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SEWING_GOODS_CREATE_ACTION_TYPE.UPDATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
