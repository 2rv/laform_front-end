import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import { MAILING_ACTION_TYPE, MailingActionType } from './mailing.type';
import edjsHTML from 'editorjs-html';
import { BasicReactEditorType } from 'src/lib/basic-types';

export function createMailing(subject: string, data: BasicReactEditorType) {
  return async (dispatch: Dispatch<MailingActionType>) => {
    dispatch({
      type: MAILING_ACTION_TYPE.PENDING,
    });
    try {
      const edjsParser = edjsHTML();

      await httpRequest({
        method: 'POST',
        url: '/mail/notification',
        data: {
          subject: subject,
          html: edjsParser.parse(data),
        },
      });
      dispatch({
        type: MAILING_ACTION_TYPE.SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: MAILING_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
