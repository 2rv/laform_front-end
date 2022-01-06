import { BasicReactEditorType } from 'src/lib/basic-types';

export enum MAILING_ACTION_TYPE {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type MailingStateType = {
  createPending: boolean;
  createSuccess: boolean;
  createError?: string;
};
export type MailingActionType = {
  type: MAILING_ACTION_TYPE;
  error?: string;
};
export type MailingComponentProps = {
  state: MailingStateType;
  onSubmit: (values: {
    subject: string;
    content: BasicReactEditorType;
  }) => void;
};
