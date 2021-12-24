import { useEffect, useReducer } from 'react';
import { getQuery } from 'src/main/navigation';
import { patternValidate } from './pattern-create.validation';
import { PatternCreateComponent } from './pattern-create.component';
import {
  PATTERN_CREATE_ACTION_TYPE,
  PATTERN_CREATE_FIELD_NAME,
  PatternCreateStateType,
  PatternCreateActionType,
  PatternValues,
} from './pattern-create.type';
import {
  patternCreateAction,
  patternUpdateAction,
  patternGetByIdAction,
  patternRemoveByIdAction,
} from './pattern-create.action';

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
function PatternCreateReducer(
  state: PatternCreateStateType,
  action: PatternCreateActionType,
) {
  switch (action.type) {
    case PATTERN_CREATE_ACTION_TYPE.CREATE_PENDING:
      return {
        ...state,
        createPending: true,
        createSuccess: false,
        createError: '',
      };
    case PATTERN_CREATE_ACTION_TYPE.CREATE_SUCCESS:
      return {
        ...state,
        createPending: false,
        createSuccess: true,
      };
    case PATTERN_CREATE_ACTION_TYPE.CREATE_ERROR:
      return {
        ...state,
        createPending: false,
        createError: action.error,
      };

    case PATTERN_CREATE_ACTION_TYPE.REMOVE_PENDING:
      return {
        ...state,
        removePending: true,
        removeSuccess: false,
        removeError: '',
      };
    case PATTERN_CREATE_ACTION_TYPE.REMOVE_SUCCESS:
      return {
        ...state,
        removePending: false,
        removeSuccess: true,
      };
    case PATTERN_CREATE_ACTION_TYPE.REMOVE_ERROR:
      return {
        ...state,
        removePending: false,
        removeError: action.error,
      };

    case PATTERN_CREATE_ACTION_TYPE.UPDATE_PENDING:
      return {
        ...state,
        updatePending: true,
        updateSuccess: false,
        updateError: '',
      };
    case PATTERN_CREATE_ACTION_TYPE.UPDATE_SUCCESS:
      return {
        ...state,
        updatePending: false,
        updateSuccess: true,
      };
    case PATTERN_CREATE_ACTION_TYPE.UPDATE_ERROR:
      return {
        ...state,
        updatePending: false,
        updateError: action.error,
      };

    case PATTERN_CREATE_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
        getSuccess: false,
        getError: '',
      };
    case PATTERN_CREATE_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        initialValues: action.data,
      };
    case PATTERN_CREATE_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    default:
      return state;
  }
}

export function PatternCreateContainer() {
  const patternId: any = getQuery('id');
  const [state, setState] = useReducer(PatternCreateReducer, initialState);

  useEffect(() => {
    if (patternId) {
      patternGetByIdAction(patternId)(setState);
    }
  }, [patternId]);

  const onSubmit = (values: PatternValues) => {
    if (patternId) {
      patternUpdateAction(patternId, values)(setState);
    } else {
      patternCreateAction(values)(setState);
    }
  };

  const onRemove = () => {
    patternRemoveByIdAction(patternId)(setState);
  };

  const initialValues = () => {
    return (
      state.initialValues || {
        [PATTERN_CREATE_FIELD_NAME.VENDOR_CODE]: '',

        [PATTERN_CREATE_FIELD_NAME.NAME]: '',
        [PATTERN_CREATE_FIELD_NAME.MODIFIER]: '',

        [PATTERN_CREATE_FIELD_NAME.MATERIAL]: undefined,
        [PATTERN_CREATE_FIELD_NAME.MATERIAL_OLD]: '',

        [PATTERN_CREATE_FIELD_NAME.DESCRIPTION]: '',
        [PATTERN_CREATE_FIELD_NAME.DESCRIPTION_OLD]: '',

        [PATTERN_CREATE_FIELD_NAME.COMPLEXITY]: 0,

        [PATTERN_CREATE_FIELD_NAME.FILES]: [],
        [PATTERN_CREATE_FIELD_NAME.IMAGES]: [],
        [PATTERN_CREATE_FIELD_NAME.CATEGORIES]: [],
        [PATTERN_CREATE_FIELD_NAME.RECOMMENDATIONS]: {
          recommendationProducts: [],
        },

        [PATTERN_CREATE_FIELD_NAME.PRICE]: 0,
        [PATTERN_CREATE_FIELD_NAME.DISCOUNT]: 0,
        [PATTERN_CREATE_FIELD_NAME.COUNT]: 0,

        [PATTERN_CREATE_FIELD_NAME.OPTION_TYPE]: false, // true === 2 / false === 0
        [PATTERN_CREATE_FIELD_NAME.IS_COUNT]: false,
        [PATTERN_CREATE_FIELD_NAME.IS_PUBLIC]: true,
        [PATTERN_CREATE_FIELD_NAME.IN_ENGLISH]: false,
        [PATTERN_CREATE_FIELD_NAME.TYPE]: false, // true === 2 / false === 1
        [PATTERN_CREATE_FIELD_NAME.OPTIONS]: [],
      }
    );
  };
  return (
    <PatternCreateComponent
      state={state}
      initialValues={initialValues()}
      onSubmit={onSubmit}
      validate={patternValidate}
      onRemove={onRemove}
      isEdit={Boolean(patternId)}
    />
  );
}
