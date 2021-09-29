import styled from 'styled-components';
import { InfoAlert } from '../../lib/element/alert';
import { LinkPrimary } from 'src/lib/element/link';
import { AUTH_VERIFICATE_EMAIL_ROUTE_PATH } from '../auth-verificate-email';
import { ReactComponent as AlertIcon } from '../../asset/svg/info-alert.svg';
import { THEME_COLOR } from 'src/lib/theme';
import { IconButton } from 'src/lib/element/button';

export function EmailConfirmed(props) {
  const { isMobile } = props;
  return (
    <LinkPrimary path={AUTH_VERIFICATE_EMAIL_ROUTE_PATH}>
      {isMobile ? (
        <Button>
          <Icon />
        </Button>
      ) : (
        <InfoAlert isMobile={isMobile} tid="Почта не подтверждена" />
      )}
    </LinkPrimary>
  );
}

const Icon = styled(AlertIcon)`
  fill: ${THEME_COLOR.TEXT.INFO};
`;
const Button = styled(IconButton)`
  padding: 0;
  background-color: ${THEME_COLOR.WHITE};
`;
