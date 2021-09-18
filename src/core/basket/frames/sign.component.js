import styled from 'styled-components';
import { TextSecondary } from '../../../lib/element/text';
import { ButtonSecondary, ButtonBasic } from '../../../lib/element/button';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';

export function SignComponent() {
  return (
    <SectionLayout type="SMALL">
      <Text tid="BASKET.FORM.FOOTER.INFO" />
      <FieldLayout type="double" adaptive>
        <ButtonSecondary tid="BASKET.FORM.FOOTER.SIGN_UP" />
        <ButtonBasic tid="BASKET.FORM.FOOTER.SIGN_IN" />
      </FieldLayout>
    </SectionLayout>
  );
}
const Text = styled(TextSecondary)`
  line-height: 1.5;
`;
