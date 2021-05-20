import styled from 'styled-components';

import { SignupContainer } from './signup.container';

export function SignupPage() {
  return (
    <Container>
      <SignupContainer />
    </Container>
  );
}

const Container = styled.div`
  width: 360px;
  margin: 0 auto;
`;
