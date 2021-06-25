import styled from 'styled-components';
import { LinkPrimary } from '../../../../lib/element/link';
import { TextPrimary, TextSecondary } from '../../../../lib/element/text';
import { LOGIN_ROUTE_PATH } from '../../../login';
import { SIGNUP_ROUTE_PATH } from '../../../signup';
import { spacing, THEME_SIZE } from '../../../../lib/theme';

export function HeaderActionSignComponent() {
  return (
    <Container>
      <BolderLink tid="HEADER.MENU_ACTION.LOGIN" path={LOGIN_ROUTE_PATH} />
      <TextSecondary tid="HEADER.MENU_ACTION.OR" />
      <BolderLink tid="HEADER.MENU_ACTION.SIGNUP" path={SIGNUP_ROUTE_PATH} />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 90%;
  align-items: center;
`;
const BolderLink = styled(LinkPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
