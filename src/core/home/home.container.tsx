import { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { HomeComponent } from './home.component';
import { getCompilationAction } from './home.action';
import { HOME_ACTION_TYPE, HomeStateType, HomeActionType } from './home.type';

const initialState = {
  getPending: false,
  compilations: [],
  getError: '',
};
function HomeReducer(state: HomeStateType, action: HomeActionType) {
  switch (action.type) {
    case HOME_ACTION_TYPE.GET_COMPILATION_PENDING:
      return {
        ...state,
        getPending: true,
        getError: '',
      };
    case HOME_ACTION_TYPE.GET_COMPILATION_SUCCESS:
      return {
        ...state,
        getPending: false,
        compilations: action.data || [],
      };
    case HOME_ACTION_TYPE.GET_COMPILATION_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };
    default:
      return state;
  }
}
export function HomeContainer() {
  const [state, setState] = useReducer(HomeReducer, initialState);
  const { lang, isAuth } = useSelector((state: any) => ({
    isAuth: state[AUTH_STORE_NAME].logged,
    lang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  useEffect(() => {
    getCompilationAction(lang, isAuth)(setState);
  }, [lang]);

  return <HomeComponent state={state} />;
}
