import { FAQ_ARTICLE_ACTION_TYPE } from './faq-article.type';
const initialState = {
  data: undefined,

  loadPending: false,
  loadSuccess: false,
  loadError: false,

  savePending: false,
  saveSuccess: false,
  saveError: false,
};

export function faqArticleStore(state = initialState, action: any) {
  switch (action.type) {
    case FAQ_ARTICLE_ACTION_TYPE.DATA_LOAD_PENDING:
      return {
        ...state,
        loadPending: true,
        loadError: false,
      };
    case FAQ_ARTICLE_ACTION_TYPE.DATA_LOAD_SUCCESS:
      return {
        ...state,
        loadPending: false,
        loadSuccess: true,
        data: action.data,
      };
    case FAQ_ARTICLE_ACTION_TYPE.DATA_LOAD_ERROR:
      return {
        ...state,
        loadPending: false,
        loadError: action.error,
      };

    case FAQ_ARTICLE_ACTION_TYPE.DATA_SAVE_PENDING:
      return {
        ...state,
        savePending: true,
        saveError: false,
      };
    case FAQ_ARTICLE_ACTION_TYPE.DATA_SAVE_SUCCESS:
      return {
        ...state,
        savePending: false,
        saveSuccess: true,
      };
    case FAQ_ARTICLE_ACTION_TYPE.DATA_SAVE_ERROR:
      return {
        ...state,
        savePending: false,
        saveError: action.error,
      };

    default:
      return state;
  }
}
