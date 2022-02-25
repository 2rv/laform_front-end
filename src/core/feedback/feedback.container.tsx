import { createFeedbackAction } from './feedback.action';
import { feedbackValidate } from './feedback.validation';
import { FeedbackComponent } from './feedback.component';
import {
  FeedbackActionType,
  FeedbackStateType,
  FeedbackValues,
  FEEDBACK_ACTION_TYPE,
  FEEDBACK_FIELD_NAME,
} from './feedback.type';
import { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { LANG_STORE_NAME } from 'src/lib/common/lang';

const initialState = {
  pending: false,
  success: false,
  error: '',
};
function FeedbackReducer(state: FeedbackStateType, action: FeedbackActionType) {
  switch (action.type) {
    case FEEDBACK_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        error: '',
      };
    case FEEDBACK_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
      };
    case FEEDBACK_ACTION_TYPE.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function FeedbackContainer() {
  const [state, setState] = useReducer(FeedbackReducer, initialState);
  useSelector((s: any) => s[LANG_STORE_NAME]);
  const onSubmit = (values: FeedbackValues) => {
    createFeedbackAction(values)(setState);
  };

  const initialValues = {
    [FEEDBACK_FIELD_NAME.DESCRIPTION]: '',
    [FEEDBACK_FIELD_NAME.EMAIL]: '',
  };

  return (
    <FeedbackComponent
      state={state}
      initialValues={initialValues}
      validate={feedbackValidate}
      onSubmit={onSubmit}
    />
  );
}
