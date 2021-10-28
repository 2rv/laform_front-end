import styled from 'styled-components';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonSecondary } from 'src/lib/element/button';
import { SectionLayout } from 'src/lib/element/layout';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { setLinkRedirect } from 'src/main/navigation';
import { LOGIN_ROUTE_PATH } from 'src/core/login';

export function NotificationComponent(props) {
  const {
    updateNotificationEmailStatusHandler,
    isNotificationChangePending,
    isNotificationStatusPending,
    pageLoading,
    notificationEmailStatus,
    isAuth,
  } = props;

  return (
    <Container type="SMALL">
      <div>
        <Title tid="NOTIFICATION.PRE_CTA" />{' '}
        <BoldTitle tid="NOTIFICATION.CTA" />
      </div>
      <ButtonSecondary
        tid={
          !isAuth
            ? 'NOTIFICATION.BUTTON_TEXT_SUBSCRIBE'
            : Boolean(notificationEmailStatus === true)
            ? 'NOTIFICATION.BUTTON_TEXT_UNSUBSCRIBE'
            : 'NOTIFICATION.BUTTON_TEXT_SUBSCRIBE'
        }
        onClick={
          isAuth
            ? updateNotificationEmailStatusHandler
            : setLinkRedirect(LOGIN_ROUTE_PATH)
        }
        disabled={
          pageLoading ||
          isNotificationChangePending ||
          isNotificationStatusPending
        }
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${spacing(3)};
  @media screen and (max-width: 720px) {
    order: 1;
  }
`;

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;

const BoldTitle = styled(Title)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  line-height: 1.5;
`;
