import { useEffect, useReducer } from 'react';
import { getQuery } from 'src/main/navigation';
import { postValidate } from './post-create.validation';
import { PostCreateComponent } from './post-create.component';
import {
  POST_FIELD_NAME,
  POST_CREATE_ACTION_TYPE,
  PostCreateStateType,
  PostCreateActionType,
  PostValues,
} from './post-create.type';
import {
  postCreateAction,
  postGetByIdAction,
  postUpdateAction,
  postRemoveByIdAction,
} from './post-create.action';

const initialState = {
  createPending: false,
  createSuccess: false,
  createError: '',

  getPending: false,
  initialValues: undefined,
  getError: '',

  removePending: false,
  removeSuccess: false,
  removeError: '',

  updatePending: false,
  updateSuccess: false,
  updateError: '',
};
function PostCreateReducer(
  state: PostCreateStateType,
  action: PostCreateActionType,
) {
  switch (action.type) {
    case POST_CREATE_ACTION_TYPE.CREATE_PENDING:
      return {
        ...state,
        createPending: true,
        createSuccess: false,
        createError: '',
      };
    case POST_CREATE_ACTION_TYPE.CREATE_SUCCESS:
      return {
        ...state,
        createPending: false,
        createSuccess: true,
      };
    case POST_CREATE_ACTION_TYPE.CREATE_ERROR:
      return {
        ...state,
        createPending: false,
        createError: action.error,
      };

    case POST_CREATE_ACTION_TYPE.REMOVE_PENDING:
      return {
        ...state,
        removePending: true,
        removeSuccess: false,
        removeError: '',
      };
    case POST_CREATE_ACTION_TYPE.REMOVE_SUCCESS:
      return {
        ...state,
        removePending: false,
        removeSuccess: true,
      };
    case POST_CREATE_ACTION_TYPE.REMOVE_ERROR:
      return {
        ...state,
        removePending: false,
        removeError: action.error,
      };

    case POST_CREATE_ACTION_TYPE.UPDATE_PENDING:
      return {
        ...state,
        updatePending: true,
        updateSuccess: false,
        updateError: '',
      };
    case POST_CREATE_ACTION_TYPE.UPDATE_SUCCESS:
      return {
        ...state,
        updatePending: false,
        updateSuccess: true,
      };
    case POST_CREATE_ACTION_TYPE.UPDATE_ERROR:
      return {
        ...state,
        updatePending: false,
        updateError: action.error,
      };

    case POST_CREATE_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
        getSuccess: false,
        getError: '',
      };
    case POST_CREATE_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        initialValues: action.data,
      };
    case POST_CREATE_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    default:
      return state;
  }
}

export function PostCreateContainer() {
  const postId: any = getQuery('id');
  const [state, setState] = useReducer(PostCreateReducer, initialState);
  useEffect(() => {
    if (postId) {
      postGetByIdAction(postId)(setState);
    }
  }, [postId]);
  const onSubmit = (values: PostValues) => {
    if (postId) {
      postUpdateAction(postId, values)(setState);
    } else {
      postCreateAction(values)(setState);
    }
  };
  const onRemove = () => {
    postRemoveByIdAction(postId)(setState);
  };
  const initialValues = () => {
    return (
      state.initialValues || {
        [POST_FIELD_NAME.IMAGES]: [],
        [POST_FIELD_NAME.NAME]: '',
        [POST_FIELD_NAME.MODIFIER]: '',
        [POST_FIELD_NAME.VENDOR_CODE]: '',
        [POST_FIELD_NAME.CATEGORIES]: [],
        [POST_FIELD_NAME.POST]: undefined,
        [POST_FIELD_NAME.RECOMMENDATIONS]: {
          recommendationProducts: [],
        },
        [POST_FIELD_NAME.IS_PUBLIC]: true,
        [POST_FIELD_NAME.IN_ENGLISH]: false,
      }
    );
  };

  return (
    <PostCreateComponent
      state={state}
      initialValues={initialValues()}
      onSubmit={onSubmit}
      validate={postValidate}
      onRemove={onRemove}
      isEdit={Boolean(postId)}
    />
  );
}
