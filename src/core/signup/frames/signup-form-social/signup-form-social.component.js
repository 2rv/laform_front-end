import styled from 'styled-components';

import { spacing } from '../../../../lib/theme';
import { TextPrimary } from '../../../../lib/element/text';
import { ButtonBasic } from '../../../../lib/element/button';

export function SignupFormSocialComponent() {
  function getIcon(iconName) {
    return `/static/svg/${iconName}.svg`;
  }

  return (
    <Container>
      <TextPrimary tid="SIGNUP.SOCIAL.HELPER_TEXT" />
      <ButtonContainer>
        <ButtonBasic iconSrc={getIcon('apple-icon')}>
          <img src={getIcon('apple-text')} />
        </ButtonBasic>
        <ButtonBasic iconSrc={getIcon('google-icon')}>
          <img src={getIcon('google-text')} />
        </ButtonBasic>
        <ButtonBasic iconSrc={getIcon('fb-icon')}>
          <img src={getIcon('fb-text')} />
        </ButtonBasic>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${spacing(2)};
`;
