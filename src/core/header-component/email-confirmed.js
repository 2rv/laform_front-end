import styled, { css } from 'styled-components';
import { WarningAlert } from '../../lib/element/alert';
import { LinkPrimary } from 'src/lib/element/link';
import { AUTH_VERIFICATE_EMAIL_ROUTE_PATH } from '../auth-verificate-email';
import { ReactComponent as AlertIcon } from '../../asset/svg/alert-info.svg';
import { THEME_COLOR } from 'src/lib/theme';
import { IconButton } from 'src/lib/element/button';

export function EmailConfirmed({ isHide = true }) {
  return (
    <LinkPrimary path={AUTH_VERIFICATE_EMAIL_ROUTE_PATH}>
      {isHide && (
        <Button>
          <Icon />
        </Button>
      )}
      <AlertWarnign hide={isHide} tid="OTHER.EMAIL_NOT_CONFIRMED" />
    </LinkPrimary>
  );
}

const Icon = styled(AlertIcon)`
  fill: ${THEME_COLOR.TEXT.WARNING};
`;
const Button = styled(IconButton)`
  padding: 0;
  background-color: ${THEME_COLOR.WHITE};
  display: none;
  @media screen and (max-width: 720px) {
    display: flex;
  }
`;
const AlertWarnign = styled(WarningAlert)`
  display: flex;
  ${({ hide }) =>
    hide &&
    css`
      @media screen and (max-width: 720px) {
        display: none;
      }
    `}
`;
