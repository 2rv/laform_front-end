import { httpRequest } from '../../main/http';
import { SEWING_GOODS_API } from './sewing-goods.constant';
import { SEWING_GOODS_ACTION_TYPE } from './sewing-goods.type';
import { BASKET_STORE_NAME } from '../basket';
import { convertSewingGoodProducts } from 'src/lib/common/product-converters';

export function sewingGoodsUploadData(currentLang, isAuth, where, sort, by) {
  return async (dispatch, getState) => {
    dispatch({
      type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_PENDING,
    });

    try {
      const response = isAuth
        ? await httpRequest({
            method: SEWING_GOODS_API.SEWING_GOODS_UPLOAD_AUTH.TYPE,
            url: SEWING_GOODS_API.SEWING_GOODS_UPLOAD_AUTH.ENDPOINT(
              currentLang,
              1,
              where,
              sort,
              by,
            ),
          })
        : await httpRequest({
            method: SEWING_GOODS_API.SEWING_GOODS_UPLOAD.TYPE,
            url: SEWING_GOODS_API.SEWING_GOODS_UPLOAD.ENDPOINT(currentLang),
          });
      dispatch({
        type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_SUCCESS,
        data: convertSewingGoodProducts(
          response.data[0],
          getState()[BASKET_STORE_NAME].basket,
        ),
        count: {
          totalCount: response.data[1],
          currentCount: response.data[0].length,
        },
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function sewingGoodsPaginationData(
  currentLang,
  isAuth,
  page,
  where,
  sort,
  by,
) {
  return async (dispatch, getState) => {
    dispatch({
      type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_PENDING,
    });

    try {
      const response = isAuth
        ? await httpRequest({
            method: SEWING_GOODS_API.SEWING_GOODS_UPLOAD_AUTH.TYPE,
            url: SEWING_GOODS_API.SEWING_GOODS_UPLOAD_AUTH.ENDPOINT(
              currentLang,
              page,
              where,
              sort,
              by,
            ),
          })
        : await httpRequest({
            method: SEWING_GOODS_API.SEWING_GOODS_UPLOAD.TYPE,
            url: SEWING_GOODS_API.SEWING_GOODS_UPLOAD.ENDPOINT(
              currentLang,
              page,
              where,
              sort,
              by,
            ),
          });
      dispatch({
        type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_SUCCESS,
        data: convertSewingGoodProducts(
          response.data[0],
          getState()[BASKET_STORE_NAME].basket,
        ),
        count: {
          totalCount: response.data[1],
          currentCount: response.data[0].length,
        },
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function sewingGoodsUpdateData(currentLang, id, body) {
  return async (dispatch) => {
    dispatch({
      type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPDATE_PENDING,
    });

    try {
      const response = await httpRequest({
        method: SEWING_GOODS_API.SEWING_GOODS_UPDATE.TYPE,
        url: SEWING_GOODS_API.SEWING_GOODS_UPDATE.ENDPOINT(id),
        data: { sewingProduct: body },
      });

      dispatch({
        type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPDATE_SUCCESS,
      });
      dispatch(sewingGoodsUploadData(currentLang));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPDATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
