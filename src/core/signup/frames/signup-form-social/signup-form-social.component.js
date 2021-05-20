import styled from 'styled-components';

import { ReactComponent as AppleIcon } from '../../../../asset/svg/apple-icon.svg';
import { ReactComponent as AppleText } from '../../../../asset/svg/apple-text.svg';
import { ReactComponent as GoogleIcon } from '../../../../asset/svg/google-icon.svg';
import { ReactComponent as GoogleText } from '../../../../asset/svg/google-text.svg';
import { ReactComponent as FbIcon } from '../../../../asset/svg/fb-icon.svg';
import { ReactComponent as FbText } from '../../../../asset/svg/fb-text.svg';
import { spacing } from '../../../../lib/theme';
import { TextPrimary } from '../../../../lib/element/text';
import { ButtonBasic } from '../../../../lib/element/button';

export function SignupFormSocialComponent() {
  return (
    <Container>
      <TextPrimary tid="SIGNUP.SOCIAL.HELPER_TEXT" />
      <ButtonContainer>
        <ButtonBasic icon={AppleIcon}>
          <AppleText />
        </ButtonBasic>
        <ButtonBasic icon={GoogleIcon}>
          <GoogleText />
        </ButtonBasic>
        <ButtonBasic icon={FbIcon}>
          <FbText />
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
