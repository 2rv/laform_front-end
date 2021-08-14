import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { EDIT_COMPILATION_ACTION_TYPE } from './edit-compilation.type';

const initialState = {
  editCompilation: initRequestState(),
};

export function editCompilationStore(state = initialState, action) {
  switch (action.type) {
    case EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_PENDING:
      return {
        ...state,
        editCompilation: setRequestPending(state.editCompilation),
      };
    case EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_SUCCESS:
      return {
        ...state,
        editCompilation: setRequestSuccess(state.editCompilation),
      };
    case EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_ERROR:
      return {
        ...state,
        editCompilation: setRequestError(state.editCompilation, action.errorMessage),
      };
    default:
      return state;
  }
}
