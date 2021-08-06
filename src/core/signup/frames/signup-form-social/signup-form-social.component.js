import styled from 'styled-components';

import { ReactComponent as AppleIcon } from '../../../../asset/svg/apple-icon.svg';
import { ReactComponent as AppleText } from '../../../../asset/svg/apple-text.svg';
import { ReactComponent as GoogleIcon } from '../../../../asset/svg/google-icon.svg';
import { ReactComponent as GoogleText } from '../../../../asset/svg/google-text.svg';
import { ReactComponent as FbIcon } from '../../../../asset/svg/fb-icon.svg';
import { ReactComponent as FbText } from '../../../../asset/svg/fb-text.svg';
import { spacing, THEME_COLOR } from '../../../../lib/theme';
import { IndentLayout } from '../../../../lib/element/layout';
import { TextPrimary } from '../../../../lib/element/text';
import { ButtonBasic } from '../../../../lib/element/button';

export function SignupFormSocialComponent() {
  return (
    <IndentLayout type="text">
      <TextPrimary tid="SIGNUP.SOCIAL.HELPER_TEXT" />
      <ButtonContainer>
        <SocialsButton icon={AppleIcon}>
          <AppleText />
        </SocialsButton>
        <SocialsButton icon={GoogleIcon}>
          <GoogleText />
        </SocialsButton>
        <SocialsButton icon={FbIcon}>
          <FbText />
        </SocialsButton>
      </ButtonContainer>
    </IndentLayout>
  );
}

const SocialsButton = styled(ButtonBasic)`
  grid-column-gap: ${spacing(2)};
  span {
    width: auto;
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${spacing(2)};
`;
