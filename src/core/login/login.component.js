import styled from 'styled-components';

import { spacing } from '../../lib/theme';

import {
  LoginHeaderComponent,
  LoginFormContainer,
  LoginFormSocialComponent,
  LoginFooterComponent,
} from './frames';

export function LoginComponent(props) {
  return (
    <Container>
      <LoginHeaderComponent />
      <InnerContainer>
        <LoginFormContainer {...props} />
        <LoginFormSocialComponent />
        <LoginFooterComponent />
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
