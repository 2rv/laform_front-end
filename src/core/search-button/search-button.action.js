import { httpRequest } from '../../main/http';
import { SEARCH_BUTTON_API } from './search-button.constant';
import { SEARCH_BUTTON_ACTION_TYPE } from './search-button.type';
import {
  convertArticleProducts,
  convertMasterClassProducts,
  convertPatternProducts,
  convertSewingGoodProducts,
} from 'src/lib/common/product-converters';

export function fetchProducts(currentLang, filter, page) {
  return async (dispatch) => {
    dispatch({
      type: SEARCH_BUTTON_ACTION_TYPE.PRODUCTS_UPLOAD_PENDING,
    });
    try {
      const masterClasses = await httpRequest({
        method: SEARCH_BUTTON_API.MASTER_CLASS_UPLOAD_DATA.TYPE,
        url: SEARCH_BUTTON_API.MASTER_CLASS_UPLOAD_DATA.ENDPOINT(currentLang, filter, page),
      });
      const sewingGoods = await httpRequest({
        method: SEARCH_BUTTON_API.SEWING_GOODS_UPLOAD_DATA.TYPE,
        url: SEARCH_BUTTON_API.SEWING_GOODS_UPLOAD_DATA.ENDPOINT(currentLang, filter, page),
      });
      const patterns = await httpRequest({
        method: SEARCH_BUTTON_API.PATTERNS_UPLOAD.TYPE,
        url: SEARCH_BUTTON_API.PATTERNS_UPLOAD.ENDPOINT(currentLang, filter, page),
      });
      const articles = await httpRequest({
        method: SEARCH_BUTTON_API.ARTICLE_UPLOAD_DATA.TYPE,
        url: SEARCH_BUTTON_API.ARTICLE_UPLOAD_DATA.ENDPOINT(currentLang, filter, page),
      });

      const products = [
        ...convertMasterClassProducts(masterClasses.data[0]),
        ...convertSewingGoodProducts(sewingGoods.data[0]),
        ...convertPatternProducts(patterns.data[0]),
        ...convertArticleProducts(articles.data[0]),
      ];

      const totalRecords = masterClasses.data[1] + sewingGoods.data[1] + patterns.data[1] + articles.data[1]

      dispatch({
        type: SEARCH_BUTTON_ACTION_TYPE.PRODUCTS_UPLOAD_SUCCESS,
        data: {
          products, totalRecords,
        },
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SEARCH_BUTTON_ACTION_TYPE.PRODUCTS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
