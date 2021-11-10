import {
  convertArticleProducts,
  convertMasterClassProducts,
  convertPatternProducts,
  convertSewingGoodProducts,
} from 'src/lib/common/product-converters';
import {
  CardMasterClassType,
  CardMultiType,
  CardArticleType,
  CardSewingGoodType,
  CardPatternType,
} from 'src/lib/element/card';
import { httpRequest } from '../../main/http';
import { PRODUCT_SELECTIONS_API } from './product-selections.constant';
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

      const patternData: CardPatternType[] = convertPatternProducts(
        patternRes.data[0],
      );
      const articleData: CardArticleType[] = convertArticleProducts(
        articleRes.data[0],
      );
      const sewingData: CardSewingGoodType[] = convertSewingGoodProducts(
        sewingRes.data[0],
      );
      const masterData: CardMasterClassType[] = convertMasterClassProducts(
        masterRes.data[0],
      );
      const baseArray: CardMultiType[] = [];
      const data: CardMultiType[] = baseArray.concat(
        patternData,
        sewingData,
        masterData,
        articleData,
      );

      dispatch({
        type: PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_LOAD_SUCCESS,
        data: data,
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
          title: block.title,
          items: block.items.map((item: any) => {
            if (item.type === 0) return { masterClassId: { id: item.id } };
            if (item.type === 1) return { patternProductId: { id: item.id } };
            if (item.type === 2) return { patternProductId: { id: item.id } };
            if (item.type === 3) return { sewingProductId: { id: item.id } };
            if (item.type === 4) return { postId: { id: item.id } };
          }),
        };
      });
      console.log(data);
      //@ts-ignore
      //   const result = await httpRequest({
      //     method: PRODUCT_SELECTIONS_API.COMPILATION_UPLOAD.TYPE,
      //     url: PRODUCT_SELECTIONS_API.COMPILATION_UPLOAD.ENDPOINT,
      // 	data: data
      //   });
      dispatch({
        type: PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_UPLOAD_SUCCESS,
        data: data,
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
