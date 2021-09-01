import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { ABOUT_ACCOUNT_ACTION_TYPE } from './about-account.type';

const initialState = {
  user: initRequestState(),
  userDeliveryInfo: initRequestState(),
  likes: initRequestState(),
  comments: initRequestState(),
};

export function aboutAccountStore(state = initialState, action) {
  switch (action.type) {
    case ABOUT_ACCOUNT_ACTION_TYPE.USER_LOAD_DATA_PENDING:
      return {
        ...state,
        user: setRequestPending(state.user),
      };
    case ABOUT_ACCOUNT_ACTION_TYPE.USER_LOAD_DATA_SUCCESS:
      return {
        ...state,
        user: setRequestSuccess(state.user, action.user),
      };
    case ABOUT_ACCOUNT_ACTION_TYPE.USER_LOAD_DATA_ERROR:
      return {
        ...state,
        user: setRequestError(state.user, action.errorMessage),
      };
    case ABOUT_ACCOUNT_ACTION_TYPE.USER_DELIVERY_INFO_PENDING:
      return {
        ...state,
        userDeliveryInfo: setRequestPending(state.userDeliveryInfo),
      };
    case ABOUT_ACCOUNT_ACTION_TYPE.USER_DELIVERY_INFO_SUCCESS:
      return {
        ...state,
        userDeliveryInfo: setRequestSuccess(state.userDeliveryInfo, action.userDeliveryInfo),
      };
    case ABOUT_ACCOUNT_ACTION_TYPE.USER_DELIVERY_INFO_ERROR:
      return {
        ...state,
        userDeliveryInfo: setRequestError(state.userDeliveryInfo, action.errorMessage),
      };
    case ABOUT_ACCOUNT_ACTION_TYPE.LIKES_PENDING:
      return {
        ...state,
        likes: setRequestPending(state.likes),
      };
    case ABOUT_ACCOUNT_ACTION_TYPE.LIKES_SUCCESS:
      return {
        ...state,
        likes: setRequestSuccess(state.likes, action.likes),
      };
    case ABOUT_ACCOUNT_ACTION_TYPE.LIKES_ERROR:
      return {
        ...state,
        likes: setRequestError(state.likes, action.errorMessage),
      };
    case ABOUT_ACCOUNT_ACTION_TYPE.COMMENTS_PENDING:
      return {
        ...state,
        comments: setRequestPending(state.comments),
      };
    case ABOUT_ACCOUNT_ACTION_TYPE.COMMENTS_SUCCESS:
      return {
        ...state,
        comments: setRequestSuccess(state.comments, action.comments),
      };
    case ABOUT_ACCOUNT_ACTION_TYPE.COMMENTS_ERROR:
      return {
        ...state,
        comments: setRequestError(state.comments, action.errorMessage),
      };
    default:
      return state;
  }
}
