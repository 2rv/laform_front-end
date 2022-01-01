import { useEffect, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { USER_ROLE } from 'src/lib/common/auth';
import { getFaqAction, saveFaqAction } from './faq-article.action';
import { FaqArticleComponent } from './faq-article.component';
import {
  FAQ_ACTION_TYPE,
  FaqArticleContainerProps,
  FaqArticleStateType,
  FaqArticleActionType,
} from './faq-article.type';

const initialState = {
  data: undefined,

  getPending: false,
  getError: '',

  savePending: false,
  saveSuccess: false,
  saveError: '',
};
export function faqArticleStore(
  state: FaqArticleStateType,
  action: FaqArticleActionType,
) {
  switch (action.type) {
    case FAQ_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
        getError: '',
      };
    case FAQ_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        data: action.data,
      };
    case FAQ_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    case FAQ_ACTION_TYPE.SAVE_PENDING:
      return {
        ...state,
        savePending: true,
        saveError: '',
      };
    case FAQ_ACTION_TYPE.SAVE_SUCCESS:
      return {
        ...state,
        savePending: false,
        saveSuccess: true,
      };
    case FAQ_ACTION_TYPE.SAVE_ERROR:
      return {
        ...state,
        savePending: false,
        saveError: action.error,
      };

    case FAQ_ACTION_TYPE.RESET:
      return initialState;

    default:
      return state;
  }
}

export function FaqArticleContainer(props: FaqArticleContainerProps) {
  const { name, titleTid } = props;
  const [state, setState] = useReducer(faqArticleStore, initialState);

  const { user, isAuth } = useSelector((state: any) => ({
    user: state[AUTH_STORE_NAME].user,
    isAuth: state[AUTH_STORE_NAME].logged,
  }));

  const [editorData, handleChange] = useState<any>(false);

  useEffect(() => {
    getFaqAction(name)(setState);
  }, []);

  const handleSave = () => {
    saveFaqAction(editorData, name)(setState);
    handleChange(false);
  };

  return (
    <FaqArticleComponent
      isAdmin={isAuth && user.role === USER_ROLE.ADMIN}
      state={state}
      handleSave={handleSave}
      handleChange={handleChange}
      disabled={!editorData}
      titleTid={titleTid}
    />
  );
}
