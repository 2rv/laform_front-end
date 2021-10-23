import { httpRequest } from '../../main/http';
import { CREATE_SEWING_GOODS_API } from './sewing-goods-create.constant';
import { convertForUpload } from './sewing-goods-create.ts.convert';
import {
  CREATE_SEWING_GOODS__ACTION_TYPE,
  SEWING_GOODS_FIELD_NAME,
} from './sewing-goods-create.type';

export function createSewingGoodsUploadData(imagesUrls, formValues) {
  return async (dispatch) => {
    try {
      const data = convertForUpload(imagesUrls, formValues);
      const response = await httpRequest({
        method: CREATE_SEWING_GOODS_API.SEWING_GOODS_UPLOAD.TYPE,
        url: CREATE_SEWING_GOODS_API.SEWING_GOODS_UPLOAD.ENDPOINT,
        data: data,
      });
      dispatch({
        type: CREATE_SEWING_GOODS__ACTION_TYPE.CREATE_SEWING_GOODS_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_SEWING_GOODS__ACTION_TYPE.CREATE_SEWING_GOODS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function createSewingGoodsPreUploadData(formValues) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_SEWING_GOODS__ACTION_TYPE.CREATE_SEWING_GOODS_UPLOAD_PENDING,
    });
    try {
      const formData = new FormData();
      for (const key in formValues[SEWING_GOODS_FIELD_NAME.IMAGES]) {
        formData.append(
          'files',
          formValues[SEWING_GOODS_FIELD_NAME.IMAGES][key][
            SEWING_GOODS_FIELD_NAME.IMAGE
          ],
        );
      }

      const response = await httpRequest({
        method: CREATE_SEWING_GOODS_API.SEWING_GOODS_IMAGE_UPLOAD.TYPE,
        url: CREATE_SEWING_GOODS_API.SEWING_GOODS_IMAGE_UPLOAD.ENDPOINT,
        data: formData,
      });

      dispatch(createSewingGoodsUploadData(response.data, formValues));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_SEWING_GOODS__ACTION_TYPE.CREATE_SEWING_GOODS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
