import { httpRequest } from '../../main/http';
import { PRODUCT_SELECTIONS_API } from './product-selections.constant';
import { compilationsPerform } from './product-selections.convert';
import {
  productSelectionFormValues,
  PRODUCT_SELECTIONS_ACTION_TYPE,
} from './product-selections.type';

export function productsLoadData(currentLang: string) {
  return async (dispatch: Function) => {
    dispatch({
      type: PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_LOAD_PENDING,
    });

    try {
      //@ts-ignore
      const patternRes = await httpRequest({
        method: PRODUCT_SELECTIONS_API.PATTERNS_LOAD.TYPE,
        url: PRODUCT_SELECTIONS_API.PATTERNS_LOAD.ENDPOINT(currentLang),
      });
      //@ts-ignore
      const articleRes = await httpRequest({
        method: PRODUCT_SELECTIONS_API.ARTICLE_LOAD_DATA.TYPE,
        url: PRODUCT_SELECTIONS_API.ARTICLE_LOAD_DATA.ENDPOINT(currentLang),
      });
      //@ts-ignore
      const sewingRes = await httpRequest({
        method: PRODUCT_SELECTIONS_API.SEWING_GOODS_LOAD_DATA.TYPE,
        url: PRODUCT_SELECTIONS_API.SEWING_GOODS_LOAD_DATA.ENDPOINT(
          currentLang,
        ),
      });
      //@ts-ignore
      const masterRes = await httpRequest({
        method: PRODUCT_SELECTIONS_API.MASTER_CLASS_LOAD_DATA.TYPE,
        url: PRODUCT_SELECTIONS_API.MASTER_CLASS_LOAD_DATA.ENDPOINT(
          currentLang,
        ),
      });
      //@ts-ignore
      const compilationRes = await httpRequest({
        method: PRODUCT_SELECTIONS_API.COMPILATION_LOAD.TYPE,
        url: PRODUCT_SELECTIONS_API.COMPILATION_LOAD.ENDPOINT,
      });
      const result = compilationsPerform({
        compilationRes: compilationRes.data,
        patternRes: patternRes.data[0],
        articleRes: articleRes.data[0],
        sewingRes: sewingRes.data[0],
        masterRes: masterRes.data[0],
      });

      dispatch({
        type: PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_LOAD_SUCCESS,
        data: result,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_LOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function productsUploadData(values: productSelectionFormValues) {
  return async (dispatch: Function) => {
    dispatch({
      type: PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_UPLOAD_PENDING,
    });

    try {
      const data = values.products.map((block) => {
        return {
          id: block.id,
          title: block.title,
          path: block.path,
          compilationProducts: block.compilationProducts.map((item: any) => {
            if (item.type === 0) return { masterClassId: { id: item.id } };
            if (item.type === 1) return { patternProductId: { id: item.id } };
            if (item.type === 2) return { patternProductId: { id: item.id } };
            if (item.type === 3) return { sewingProductId: { id: item.id } };
            if (item.type === 4) return { postId: { id: item.id } };
          }),
        };
      });
      //@ts-ignore
      const response = await httpRequest({
        method: PRODUCT_SELECTIONS_API.COMPILATION_UPLOAD.TYPE,
        url: PRODUCT_SELECTIONS_API.COMPILATION_UPLOAD.ENDPOINT,
        data: data,
      });
      dispatch({
        type: PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_UPLOAD_SUCCESS,
        data: response.data,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function deleteOneBlock(id: string) {
  return async (dispatch: Function) => {
    dispatch({
      type: PRODUCT_SELECTIONS_ACTION_TYPE.DELETE_PENDING,
    });
    try {
      //@ts-ignore
      const response = await httpRequest({
        method: PRODUCT_SELECTIONS_API.COMPILATION_DELETE.TYPE,
        url: PRODUCT_SELECTIONS_API.COMPILATION_DELETE.ENDPOINT(id),
      });
      dispatch({
        type: PRODUCT_SELECTIONS_ACTION_TYPE.DELETE_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PRODUCT_SELECTIONS_ACTION_TYPE.DELETE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
