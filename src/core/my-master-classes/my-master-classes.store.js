import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { MY_MASTER_CLASSES_ACTION_TYPE } from './my-master-classes.type';

const initialState = {
  myMasterClasses: initRequestState(),
};

export function myMasterClassesStore(state = initialState, action) {
  switch (action.type) {
    case MY_MASTER_CLASSES_ACTION_TYPE.MY_MASTER_CLASSES_UPLOAD_PENDING:
      return {
        ...state,
        myMasterClasses: setRequestPending(state.myMasterClasses),
      };
    case MY_MASTER_CLASSES_ACTION_TYPE.MY_MASTER_CLASSES_UPLOAD_SUCCESS:
      return {
        ...state,
        myMasterClasses: setRequestSuccess(state.myMasterClasses),
      };
    case MY_MASTER_CLASSES_ACTION_TYPE.MY_MASTER_CLASSES_UPLOAD_ERROR:
      return {
        ...state,
        myMasterClasses: setRequestError(state.myMasterClasses, action.errorMessage),
      };
    default:
      return state;
  }
}
