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
import { setLinkRedirect } from '../../../../main/navigation';
import { BASE_URL } from '../../../../main/http';

const BASE_URL_SLASH_END = BASE_URL.includes('localhost')
  ? BASE_URL
  : `${BASE_URL}/`;

export function SignupFormSocialComponent() {
  return (
    <SectionLayout type="TEXT">
      <TextPrimary tid="SIGNUP.SOCIAL.HELPER_TEXT" />
      <ButtonContainer>
        <Button onClick={setLinkRedirect(`${BASE_URL_SLASH_END}auth/apple`)}>
          <AppleIcon />
          <SecondaryIconContainer>
            <AppleText />
          </SecondaryIconContainer>
        </Button>
        <Button onClick={setLinkRedirect(`${BASE_URL_SLASH_END}auth/google`)}>
          <GoogleIcon />
          <SecondaryIconContainer>
            <GoogleText />
          </SecondaryIconContainer>
        </Button>
        <Button onClick={setLinkRedirect(`${BASE_URL_SLASH_END}auth/facebook`)}>
          <FaceBookIcon />
          <SecondaryIconContainer>
            <FbText />
          </SecondaryIconContainer>
        </Button>
      </ButtonContainer>
    </SectionLayout>
  );
}
const Button = styled(IconButton)`
  width: auto;
`;
const FaceBookIcon = styled(FbIcon)`
  min-width: max-content;
`;
const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing(2)};
`;
const SecondaryIconContainer = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;