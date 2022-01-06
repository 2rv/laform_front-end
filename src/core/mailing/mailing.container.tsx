import { useReducer } from 'react';
import { BasicReactEditorType } from 'src/lib/basic-types';
import { createMailing } from './mailing.action';
import { MailingComponent } from './mailing.component';
import {
  MAILING_ACTION_TYPE,
  MailingStateType,
  MailingActionType,
} from './mailing.type';

const initialState = {
  createPending: false,
  createSuccess: false,
  createError: undefined,
};
function MailingReducer(state: MailingStateType, action: MailingActionType) {
  switch (action.type) {
    case MAILING_ACTION_TYPE.PENDING:
      return {
        ...state,
        createPending: true,
        createSuccess: false,
        createError: undefined,
      };
    case MAILING_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        createPending: false,
        createSuccess: true,
      };
    case MAILING_ACTION_TYPE.ERROR:
      return {
        ...state,
        createPending: false,
        createError: action.error,
      };

    default:
      return state;
  }
}

export function MailingContainer() {
  const [state, setState] = useReducer(MailingReducer, initialState);

  const onSubmit = (values: {
    subject: string;
    content: BasicReactEditorType;
  }) => {
    createMailing(values.subject, values.content)(setState);
  };

  return <MailingComponent state={state} onSubmit={onSubmit} />;
}
