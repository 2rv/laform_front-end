import styled from 'styled-components';

import { LoginContainer } from './login.container';

export function LoginPage() {
  return (
    <Container>
      <LoginContainer />
    </Container>
  );
}

const Container = styled.div`
  width: 360px;
  margin: 0 auto;
`;
