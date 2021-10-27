import {
  convertArticleProducts,
  convertMasterClassProducts,
  convertPatternProducts,
  convertSewingGoodProducts,
} from 'src/lib/common/product-converters';
import { httpRequest } from '../../../main/http';
import { RECOMENDATION_API } from './recomendation.constant';
import { RECOMENDATION_ACTION_TYPE } from './recomendation.type';

export function productsUploadData(currentLang: string) {
  return async (dispatch: Function) => {
    dispatch({
      type: RECOMENDATION_ACTION_TYPE.PRODUCTS_UPLOAD_PENDING,
    });

    try {
      //@ts-ignore
      const patternRes = await httpRequest({
        method: RECOMENDATION_API.PATTERNS_UPLOAD.TYPE,
        url: RECOMENDATION_API.PATTERNS_UPLOAD.ENDPOINT(currentLang),
      });
      //@ts-ignore
      const articleRes = await httpRequest({
        method: RECOMENDATION_API.ARTICLE_UPLOAD_DATA.TYPE,
        url: RECOMENDATION_API.ARTICLE_UPLOAD_DATA.ENDPOINT(currentLang),
      });
      //@ts-ignore
      const sewingRes = await httpRequest({
        method: RECOMENDATION_API.SEWING_GOODS_UPLOAD_DATA.TYPE,
        url: RECOMENDATION_API.SEWING_GOODS_UPLOAD_DATA.ENDPOINT(currentLang),
      });
      //@ts-ignore
      const masterRes = await httpRequest({
        method: RECOMENDATION_API.MASTER_CLASS_UPLOAD_DATA.TYPE,
        url: RECOMENDATION_API.MASTER_CLASS_UPLOAD_DATA.ENDPOINT(currentLang),
      });

      const patternData: any = convertPatternProducts(patternRes.data[0]);
      const articleData: any = convertArticleProducts(articleRes.data);
      const sewingData: any = convertSewingGoodProducts(sewingRes.data);
      const masterData: any = convertMasterClassProducts(masterRes.data);

      const data = [].concat(patternData, sewingData, masterData, articleData);

      dispatch({
        type: RECOMENDATION_ACTION_TYPE.PRODUCTS_UPLOAD_SUCCESS,
        data: data,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: RECOMENDATION_ACTION_TYPE.PRODUCTS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
