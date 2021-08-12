import styled from 'styled-components';
import { ReactComponent as AppleIcon } from '../../../../asset/svg/apple-icon.svg';
import { ReactComponent as AppleText } from '../../../../asset/svg/apple-text.svg';
import { ReactComponent as GoogleIcon } from '../../../../asset/svg/google-icon.svg';
import { ReactComponent as GoogleText } from '../../../../asset/svg/google-text.svg';
import { ReactComponent as FbIcon } from '../../../../asset/svg/fb-icon.svg';
import { ReactComponent as FbText } from '../../../../asset/svg/fb-text.svg';
import { spacing, THEME_COLOR } from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/element/layout';
import { TextPrimary } from '../../../../lib/element/text';
import { IconButton } from '../../../../lib/element/button';

export function SignupFormSocialComponent() {
  return (
    <SectionLayout type="TEXT">
      <TextPrimary tid="SIGNUP.SOCIAL.HELPER_TEXT" />
      <ButtonContainer>
        <IconButton auto>
          <AppleIcon /> <AppleText />
        </IconButton>
        <IconButton auto>
          <GoogleIcon />
          <GoogleText />
        </IconButton>
        <IconButton auto>
          <FbIcon /> <FbText />
        </IconButton>
      </ButtonContainer>
    </SectionLayout>
  );
}

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing(2)};
`;
