import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getQuery } from '../../main/navigation/navigation.core';
import { unsubscribeNotification } from './unsubscribe-notification.action';
import { TextSecondary } from '../../lib/element/text';
import { THEME_SIZE } from '../../lib/theme';

export function UnsubscribeNotificationContainer() {
  const dispatch = useDispatch();
  const code = getQuery('code');

  useEffect(() => {
    dispatch(unsubscribeNotification(code));
  }, []);

  return (
    <UnsubscribeNotificationTitle tid="OTHER.UNSUBSCRIBE_NOTIFICATION_TEXT" />
  );
}

const UnsubscribeNotificationTitle = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.BIG};
`;
