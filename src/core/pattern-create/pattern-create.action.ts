import { redirect } from 'src/main/navigation';
import { httpRequest } from 'src/main/http';
import { convertForChange, convertForSave } from './pattern-create.convert';
import {
  PatternCreateActionType,
  PatternValues,
  PATTERN_CREATE_ACTION_TYPE,
  PATTERN_CREATE_FIELD_NAME,
} from './pattern-create.type';
import {
  PRODUCTS_LIST_ROUTE_PATH,
  PRODUCTS_LIST_TAB_TYPES,
} from '../products-list';
import { Dispatch } from 'react';
import { BasicFileType, BasicPatternType, FileType } from 'src/lib/basic-types';
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

export function patternGetByIdAction(id: string) {
  return async (dispatch: Dispatch<PatternCreateActionType>) => {
    dispatch({
      type: PATTERN_CREATE_ACTION_TYPE.GET_PENDING,
    });

    try {
      const response: AxiosResponse<BasicPatternType> = await httpRequest({
        method: 'GET',
        url: '/pattern-product/get/for-update/' + id,
      });
      dispatch({
        type: PATTERN_CREATE_ACTION_TYPE.GET_SUCCESS,
        data: convertForChange(response.data),
      });
    } catch (err: any) {
      console.log(err);

      if (err.response) {
        dispatch({
          type: PATTERN_CREATE_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function patternRemoveByIdAction(id: string, type: 1 | 2 = 1) {
  return async (dispatch: Dispatch<PatternCreateActionType>) => {
    dispatch({
      type: PATTERN_CREATE_ACTION_TYPE.REMOVE_PENDING,
    });
    try {
      await httpRequest({
        method: 'DELETE',
        url: '/pattern-product/delete/' + id,
      });
      dispatch({
        type: PATTERN_CREATE_ACTION_TYPE.REMOVE_SUCCESS,
      });
      redirect(PRODUCTS_LIST_ROUTE_PATH, {
        params: { type: PRODUCTS_LIST_TAB_TYPES[type] },
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PATTERN_CREATE_ACTION_TYPE.REMOVE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}

export function patternCreateAction(values: PatternValues) {
  return async (dispatch: Dispatch<PatternCreateActionType>) => {
    dispatch({
      type: PATTERN_CREATE_ACTION_TYPE.CREATE_PENDING,
    });
    try {
      const images = await uploadFilesAction(
        values[PATTERN_CREATE_FIELD_NAME.IMAGES],
      );

      const files = values.optionType
        ? await Promise.all(
            values.options.map(async (option) => {
              return await uploadFilesAction(option.filesPdf || []);
            }),
          )
        : [await uploadFilesAction(values[PATTERN_CREATE_FIELD_NAME.FILES])];

      const patternData = convertForSave(images, files, values);

      await httpRequest({
        url: '/pattern-product/create',
        method: 'POST',
        data: patternData,
      });

      dispatch({
        type: PATTERN_CREATE_ACTION_TYPE.CREATE_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PATTERN_CREATE_ACTION_TYPE.CREATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function patternUpdateAction(id: string, values: PatternValues) {
  return async (dispatch: Dispatch<PatternCreateActionType>) => {
    dispatch({
      type: PATTERN_CREATE_ACTION_TYPE.UPDATE_PENDING,
    });
    try {
      const images = await uploadFilesAction(
        values[PATTERN_CREATE_FIELD_NAME.IMAGES],
      );

      const files = values.optionType
        ? await Promise.all(
            values.options.map(async (option) => {
              return await uploadFilesAction(option.filesPdf || []);
            }),
          )
        : [await uploadFilesAction(values[PATTERN_CREATE_FIELD_NAME.FILES])];

      const patternData = convertForSave(images, files, values);

      await httpRequest({
        url: '/pattern-product/update/' + id,
        method: 'PUT',
        data: patternData,
      });

      dispatch({
        type: PATTERN_CREATE_ACTION_TYPE.UPDATE_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PATTERN_CREATE_ACTION_TYPE.UPDATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
