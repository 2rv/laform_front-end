import {
  CREATE_NOTIFICATION_FIELD_NAME,
  CREATE_NOTIFICATION_DATA_NAME,
} from './create-notification.type';

import edjsHTML from 'editorjs-html';

export const convertCreateNotificationFormData = (data) => {
  const edjsParser = edjsHTML();
  const HTML_ARRAY = edjsParser.parse(
    data[CREATE_NOTIFICATION_FIELD_NAME.NOTIFICATION],
  );
  const HTML = HTML_ARRAY.reduce((a, c) => a + c, '');

  return {
    [CREATE_NOTIFICATION_DATA_NAME.SUBJECT]:
      data[CREATE_NOTIFICATION_FIELD_NAME.SUBJECT],
    [CREATE_NOTIFICATION_DATA_NAME.HTML]: HTML,
  };
};
