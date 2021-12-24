import { useEffect, useReducer } from 'react';
import { getQuery } from 'src/main/navigation';
import { sewingGoodsValidate } from './sewing-goods-create.validation';
import { SewingGoodsCreateComponent } from './sewing-goods-create.component';
import {
  SEWING_GOODS_CREATE_ACTION_TYPE,
  SEWING_GOODS_CREATE_FIELD_NAME,
  SewingGoodsCreateStateType,
  SewingGoodsCreateActionType,
  SewingGoodsValues,
} from './sewing-goods-create.type';
import {
  sewingGoodsCreateAction,
  sewingGoodsUpdateAction,
  sewingGoodsGetByIdAction,
  sewingGoodsRemoveByIdAction,
} from './sewing-goods-create.action';

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
function SewingGoodsCreateReducer(
  state: SewingGoodsCreateStateType,
  action: SewingGoodsCreateActionType,
) {
  switch (action.type) {
    case SEWING_GOODS_CREATE_ACTION_TYPE.CREATE_PENDING:
      return {
        ...state,
        createPending: true,
        createSuccess: false,
        createError: '',
      };
    case SEWING_GOODS_CREATE_ACTION_TYPE.CREATE_SUCCESS:
      return {
        ...state,
        createPending: false,
        createSuccess: true,
      };
    case SEWING_GOODS_CREATE_ACTION_TYPE.CREATE_ERROR:
      return {
        ...state,
        createPending: false,
        createError: action.error,
      };

    case SEWING_GOODS_CREATE_ACTION_TYPE.REMOVE_PENDING:
      return {
        ...state,
        removePending: true,
        removeSuccess: false,
        removeError: '',
      };
    case SEWING_GOODS_CREATE_ACTION_TYPE.REMOVE_SUCCESS:
      return {
        ...state,
        removePending: false,
        removeSuccess: true,
      };
    case SEWING_GOODS_CREATE_ACTION_TYPE.REMOVE_ERROR:
      return {
        ...state,
        removePending: false,
        removeError: action.error,
      };

    case SEWING_GOODS_CREATE_ACTION_TYPE.UPDATE_PENDING:
      return {
        ...state,
        updatePending: true,
        updateSuccess: false,
        updateError: '',
      };
    case SEWING_GOODS_CREATE_ACTION_TYPE.UPDATE_SUCCESS:
      return {
        ...state,
        updatePending: false,
        updateSuccess: true,
      };
    case SEWING_GOODS_CREATE_ACTION_TYPE.UPDATE_ERROR:
      return {
        ...state,
        updatePending: false,
        updateError: action.error,
      };

    case SEWING_GOODS_CREATE_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
        getSuccess: false,
        getError: '',
      };
    case SEWING_GOODS_CREATE_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        initialValues: action.data,
      };
    case SEWING_GOODS_CREATE_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    default:
      return state;
  }
}

export function SewingGoodsCreateContainer() {
  const sewingGoodsId: any = getQuery('id');
  const [state, setState] = useReducer(SewingGoodsCreateReducer, initialState);

  useEffect(() => {
    if (sewingGoodsId) {
      sewingGoodsGetByIdAction(sewingGoodsId)(setState);
    }
  }, [sewingGoodsId]);

  const onSubmit = (values: SewingGoodsValues) => {
    if (sewingGoodsId) {
      sewingGoodsUpdateAction(sewingGoodsId, values)(setState);
    } else {
      sewingGoodsCreateAction(values)(setState);
    }
  };

  const onRemove = () => {
    sewingGoodsRemoveByIdAction(sewingGoodsId)(setState);
  };

  const initialValues = () => {
    return (
      state.initialValues || {
        [SEWING_GOODS_CREATE_FIELD_NAME.VENDOR_CODE]: '',

        [SEWING_GOODS_CREATE_FIELD_NAME.NAME]: '',
        [SEWING_GOODS_CREATE_FIELD_NAME.MODIFIER]: '',

        [SEWING_GOODS_CREATE_FIELD_NAME.DESCRIPTION]: '',

        [SEWING_GOODS_CREATE_FIELD_NAME.IMAGES]: [],
        [SEWING_GOODS_CREATE_FIELD_NAME.CATEGORIES]: [],
        [SEWING_GOODS_CREATE_FIELD_NAME.RECOMMENDATIONS]: {
          recommendationProducts: [],
        },

        [SEWING_GOODS_CREATE_FIELD_NAME.PRICE]: 0,
        [SEWING_GOODS_CREATE_FIELD_NAME.DISCOUNT]: 0,
        [SEWING_GOODS_CREATE_FIELD_NAME.COUNT]: 0,
        [SEWING_GOODS_CREATE_FIELD_NAME.LENGTH]: 0,

        [SEWING_GOODS_CREATE_FIELD_NAME.OPTION_TYPE]: 0,

        [SEWING_GOODS_CREATE_FIELD_NAME.IS_COUNT]: false,
        [SEWING_GOODS_CREATE_FIELD_NAME.IS_LENGTH]: false,
        [SEWING_GOODS_CREATE_FIELD_NAME.IS_PUBLIC]: true,
        [SEWING_GOODS_CREATE_FIELD_NAME.IN_ENGLISH]: false,

        [SEWING_GOODS_CREATE_FIELD_NAME.OPTIONS]: [],
      }
    );
  };

  return (
    <SewingGoodsCreateComponent
      state={state}
      initialValues={initialValues()}
      onSubmit={onSubmit}
      validate={sewingGoodsValidate}
      onRemove={onRemove}
      isEdit={Boolean(sewingGoodsId)}
    />
  );
}
