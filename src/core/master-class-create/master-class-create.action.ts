import { httpRequest } from 'src/main/http';
import { redirect } from 'src/main/navigation';
import {
  MasterClassCreateActionType,
  MasterClassValues,
  MASTER_CLASS_CREATE_ACTION_TYPE,
  MASTER_CLASS_FIELD_NAME,
} from './master-class-create.type';
import {
  convertForSave,
  convertForChange,
} from './master-class-create.convert';
import {
  PRODUCTS_LIST_ROUTE_PATH,
  PRODUCTS_LIST_TAB_TYPES,
} from '../products-list';
import { Dispatch } from 'react';
import {
  BasicFileType,
  BasicMasterClassType,
  FileType,
} from 'src/lib/basic-types';
import { AxiosResponse } from 'axios';

async function uploadFilesAction(images: FileType[]): Promise<BasicFileType[]> {
  type accumulator = {
    newImages: FileType[];
    oldImages: BasicFileType[];
  };
  const { newImages, oldImages } = images.reduce<accumulator>(
    (acc, image) => {
      if (!!image.file) acc.newImages.push(image);
      if (!image.file && image.id) {
        acc.oldImages.push({
          id: image.id,
          fileUrl: image?.fileUrl,
        });
      }
      return acc;
    },
    { newImages: [], oldImages: [] },
  );

  if (!newImages.length) {
    return oldImages.map((image) => {
      return {
        id: image.id || '',
        fileUrl: image?.fileUrl,
      };
    });
  }

  const formData = new FormData();

  newImages.forEach((image) => {
    if (image.file) formData.append('files', image.file);
  });

  const resultImages: AxiosResponse<BasicFileType[]> = await httpRequest({
    method: 'POST',
    url: '/file/create-many',
    data: formData,
  });
  const res = oldImages.concat(resultImages.data);

  return res;
}

export function masterClassCreateAction(values: MasterClassValues) {
  return async (dispatch: Dispatch<MasterClassCreateActionType>) => {
    dispatch({
      type: MASTER_CLASS_CREATE_ACTION_TYPE.CREATE_PENDING,
    });
    try {
      const images = await uploadFilesAction(
        values[MASTER_CLASS_FIELD_NAME.IMAGES],
      );
      const masterClassData = convertForSave(images, values);

      await httpRequest({
        url: '/master-class/create',
        method: 'POST',
        data: masterClassData,
      });

      dispatch({
        type: MASTER_CLASS_CREATE_ACTION_TYPE.CREATE_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: MASTER_CLASS_CREATE_ACTION_TYPE.CREATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function masterClassUpdateAction(id: string, values: MasterClassValues) {
  return async (dispatch: Dispatch<MasterClassCreateActionType>) => {
    dispatch({
      type: MASTER_CLASS_CREATE_ACTION_TYPE.UPDATE_PENDING,
    });
    try {
      const images = await uploadFilesAction(
        values[MASTER_CLASS_FIELD_NAME.IMAGES],
      );
      const masterClassData = convertForSave(images, values);

      await httpRequest({
        url: '/master-class/update/' + id,
        method: 'PUT',
        data: masterClassData,
      });
      dispatch({
        type: MASTER_CLASS_CREATE_ACTION_TYPE.UPDATE_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: MASTER_CLASS_CREATE_ACTION_TYPE.UPDATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function masterClassGetByIdAction(id: string) {
  return async (dispatch: Dispatch<MasterClassCreateActionType>) => {
    dispatch({
      type: MASTER_CLASS_CREATE_ACTION_TYPE.GET_PENDING,
    });

    try {
      const response: AxiosResponse<BasicMasterClassType> = await httpRequest({
        method: 'GET',
        url: '/master-class/get/for-update/' + id,
      });
      dispatch({
        type: MASTER_CLASS_CREATE_ACTION_TYPE.GET_SUCCESS,
        data: convertForChange(response.data),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: MASTER_CLASS_CREATE_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function masterClassRemoveByIdAction(id: string) {
  return async (dispatch: Dispatch<MasterClassCreateActionType>) => {
    dispatch({
      type: MASTER_CLASS_CREATE_ACTION_TYPE.REMOVE_PENDING,
    });
    try {
      await httpRequest({
        method: 'DELETE',
        url: '/master-class/delete/' + id,
      });
      dispatch({
        type: MASTER_CLASS_CREATE_ACTION_TYPE.REMOVE_SUCCESS,
      });

      redirect(PRODUCTS_LIST_ROUTE_PATH, {
        params: { type: PRODUCTS_LIST_TAB_TYPES[0] },
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: MASTER_CLASS_CREATE_ACTION_TYPE.REMOVE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
