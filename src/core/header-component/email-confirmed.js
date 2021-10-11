import styled from 'styled-components';
import { InfoAlert } from '../../lib/element/alert';
import { LinkPrimary } from 'src/lib/element/link';
import { AUTH_VERIFICATE_EMAIL_ROUTE_PATH } from '../auth-verificate-email';
import { ReactComponent as AlertIcon } from '../../asset/svg/info-alert.svg';
import { THEME_COLOR } from 'src/lib/theme';
import { IconButton } from 'src/lib/element/button';

export function EmailConfirmed(props) {
  return (
    <LinkPrimary path={AUTH_VERIFICATE_EMAIL_ROUTE_PATH}>
      <Button>
        <Icon />
      </Button>
      <AlertInfo tid="OTHER.EMAIL_NOT_CONFIRMED" />
    </LinkPrimary>
  );
}

const Icon = styled(AlertIcon)`
  fill: ${THEME_COLOR.TEXT.INFO};
`;
const Button = styled(IconButton)`
  padding: 0;
  background-color: ${THEME_COLOR.WHITE};
  display: none;
  @media screen and (max-width: 720px) {
    display: flex;
  }
`;
const AlertInfo = styled(InfoAlert)`
  display: flex;
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
