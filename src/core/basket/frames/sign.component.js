import styled from 'styled-components';
import { TextSecondary } from '../../../lib/element/text';
import { ButtonSecondary, ButtonBasic } from '../../../lib/element/button';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { LinkPrimary } from 'src/lib/element/link';
import { LOGIN_ROUTE_PATH } from 'src/core/login';
import { SIGNUP_ROUTE_PATH } from 'src/core/signup';

export function SignComponent({ title }) {
  return (
    <SectionLayout type="SMALL">
      <Text tid={title} />
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
