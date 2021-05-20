import styled from 'styled-components';

import { spacing } from '../../lib/theme';

import {
  SignupHeaderComponent,
  SignupFormContainer,
  SignupFormSocialComponent,
  SignupFooterComponent,
} from './frames';

export function SignupComponent(props) {
  return (
    <Container>
      <SignupHeaderComponent />
      <InnerContainer>
        <SignupFormContainer {...props} />
        <SignupFormSocialComponent />
        <SignupFooterComponent />
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: ${spacing(3)};
`;

const InnerContainer = styled.div`
  display: grid;
  gap: ${spacing(6)};
`;
