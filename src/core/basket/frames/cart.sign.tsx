import styled from 'styled-components';
import { TextSecondary } from 'src/lib/element/text';
import { ButtonSecondary, ButtonBasic } from 'src/lib/element/button';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { LinkPrimary } from 'src/lib/element/link';
import { LOGIN_ROUTE_PATH } from 'src/core/login';
import { SIGNUP_ROUTE_PATH } from 'src/core/signup';

export function CartSign() {
  return (
    <SectionLayout type="SMALL">
      <Text tid="OTHER.GET_PURCHASES_HISTORY" />
      <FieldLayout type="double" adaptive>
        <LinkPrimary path={SIGNUP_ROUTE_PATH}>
          <ButtonSecondary tid="OTHER.SIGN_UP" />
        </LinkPrimary>
        <LinkPrimary path={LOGIN_ROUTE_PATH}>
          <ButtonBasic tid="OTHER.SIGN_IN" />
        </LinkPrimary>
      </FieldLayout>
    </SectionLayout>
  );
}
const Text = styled(TextSecondary)`
  line-height: 1.5;
`;
