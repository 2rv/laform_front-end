import { useEffect, useReducer } from 'react';
import { getQuery } from 'src/main/navigation';
import { masterClassValidate } from './master-class-create.validation';
import { MasterClassCreateComponent } from './master-class-create.component';
import {
  MASTER_CLASS_FIELD_NAME,
  MASTER_CLASS_CREATE_ACTION_TYPE,
  MasterClassValues,
  MasterClassCreateStateType,
  MasterClassCreateActionType,
} from './master-class-create.type';
import {
  masterClassCreateAction,
  masterClassUpdateAction,
  masterClassGetByIdAction,
  masterClassRemoveByIdAction,
} from './master-class-create.action';

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
function MasterClasssCreateReducer(
  state: MasterClassCreateStateType,
  action: MasterClassCreateActionType,
) {
  switch (action.type) {
    case MASTER_CLASS_CREATE_ACTION_TYPE.CREATE_PENDING:
      return {
        ...state,
        createPending: true,
        createSuccess: false,
        createError: '',
      };
    case MASTER_CLASS_CREATE_ACTION_TYPE.CREATE_SUCCESS:
      return {
        ...state,
        createPending: false,
        createSuccess: true,
      };
    case MASTER_CLASS_CREATE_ACTION_TYPE.CREATE_ERROR:
      return {
        ...state,
        createPending: false,
        createError: action.error,
      };

    case MASTER_CLASS_CREATE_ACTION_TYPE.REMOVE_PENDING:
      return {
        ...state,
        removePending: true,
        removeSuccess: false,
        removeError: '',
      };
    case MASTER_CLASS_CREATE_ACTION_TYPE.REMOVE_SUCCESS:
      return {
        ...state,
        removePending: false,
        removeSuccess: true,
      };
    case MASTER_CLASS_CREATE_ACTION_TYPE.REMOVE_ERROR:
      return {
        ...state,
        removePending: false,
        removeError: action.error,
      };

    case MASTER_CLASS_CREATE_ACTION_TYPE.UPDATE_PENDING:
      return {
        ...state,
        updatePending: true,
        updateSuccess: false,
        updateError: '',
      };
    case MASTER_CLASS_CREATE_ACTION_TYPE.UPDATE_SUCCESS:
      return {
        ...state,
        updatePending: false,
        updateSuccess: true,
      };
    case MASTER_CLASS_CREATE_ACTION_TYPE.UPDATE_ERROR:
      return {
        ...state,
        updatePending: false,
        updateError: action.error,
      };

    case MASTER_CLASS_CREATE_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
        getSuccess: false,
        getError: '',
      };
    case MASTER_CLASS_CREATE_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        initialValues: action.data,
      };
    case MASTER_CLASS_CREATE_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    default:
      return state;
  }
}

export function MasterClassCreateContainer() {
  const masterClassId: any = getQuery('id');
  const [state, setState] = useReducer(MasterClasssCreateReducer, initialState);

  useEffect(() => {
    if (masterClassId) {
      masterClassGetByIdAction(masterClassId)(setState);
    }
  }, [masterClassId]);

  const onSubmit = (values: MasterClassValues) => {
    if (masterClassId) {
      masterClassUpdateAction(masterClassId, values)(setState);
    } else {
      masterClassCreateAction(values)(setState);
    }
  };

  const onRemove = () => {
    masterClassRemoveByIdAction(masterClassId)(setState);
  };

  const initialValues = () => {
    return (
      state.initialValues || {
        [MASTER_CLASS_FIELD_NAME.NAME]: '',
        [MASTER_CLASS_FIELD_NAME.MODIFIER]: '',
        [MASTER_CLASS_FIELD_NAME.VENDOR_CODE]: '',
        [MASTER_CLASS_FIELD_NAME.IMAGES]: [],
        [MASTER_CLASS_FIELD_NAME.DESCRIPTION]: '',
        [MASTER_CLASS_FIELD_NAME.CATEGORIES]: [],
        [MASTER_CLASS_FIELD_NAME.DISCOUNT]: 0,
        [MASTER_CLASS_FIELD_NAME.PRICE]: 0,
        [MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS]: {
          recommendationProducts: [],
        },
        [MASTER_CLASS_FIELD_NAME.ARTICLE]: undefined,
        [MASTER_CLASS_FIELD_NAME.MATERIAL]: undefined,
        [MASTER_CLASS_FIELD_NAME.IS_PUBLIC]: true,
        [MASTER_CLASS_FIELD_NAME.IN_ENGLISH]: false,
      }
    );
  };

  return (
    <MasterClassCreateComponent
      state={state}
      initialValues={initialValues()}
      onSubmit={onSubmit}
      validate={masterClassValidate}
      onRemove={onRemove}
      isEdit={Boolean(masterClassId)}
    />
  );
}
