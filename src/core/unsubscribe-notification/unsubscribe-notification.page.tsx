import styled from 'styled-components';
import { PageWrapper } from 'src/lib/common/page-wrapper';
import { useCallback, useEffect } from 'react';
import { getQuery } from 'src/main/navigation/navigation.core';
import { TextSecondary } from 'src/lib/element/text';
import { THEME_SIZE } from 'src/lib/theme';
import { httpRequest } from 'src/main/http';

export function UnsubscribeNotificationPage() {
  const code = getQuery('code');

  const unsubscribeAction = useCallback(async () => {
    await httpRequest({
      method: 'PUT',
      url: '/user/unsubscribe',
      params: {
        code: code,
      },
    });
  }, [code]);

  useEffect(() => {
    if (code) {
      unsubscribeAction();
    }
  }, []);

  return (
    <PageWrapper>
      <UnsubscribeNotificationTitle tid="OTHER.UNSUBSCRIBE_NOTIFICATION_TEXT" />
    </PageWrapper>
  );
}
const UnsubscribeNotificationTitle = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.BIG};
`;
