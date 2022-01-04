import styled from 'styled-components';
import { PageWrapper } from 'src/lib/common/page-wrapper';
import { useEffect } from 'react';
import { getQuery } from 'src/main/navigation/navigation.core';
import { TextSecondary } from 'src/lib/element/text';
import { THEME_SIZE } from 'src/lib/theme';
import { httpRequest } from 'src/main/http';

export function UnsubscribeNotificationPage() {
  useEffect(() => {
    const code = getQuery('code');
    if (code) {
      (async () => {
        await httpRequest({
          method: 'PUT',
          url: '/user/unsubscribe',
          params: {
            code: code,
          },
        });
      })();
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
