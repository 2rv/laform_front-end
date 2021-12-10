import styled from 'styled-components';
import { ReactComponent as AppleIcon } from 'src/asset/svg/apple-icon.svg';
import { ReactComponent as AppleText } from 'src/asset/svg/apple-text.svg';
import { ReactComponent as GoogleIcon } from 'src/asset/svg/google-icon.svg';
import { ReactComponent as GoogleText } from 'src/asset/svg/google-text.svg';
import { ReactComponent as FbIcon } from 'src/asset/svg/fb-icon.svg';
import { ReactComponent as FbText } from 'src/asset/svg/fb-text.svg';
import { spacing } from 'src/lib/theme';
import { SectionLayout } from 'src/lib/element/layout';
import { TextPrimary } from 'src/lib/element/text';
import { IconButton } from 'src/lib/element/button';
import { setLinkRedirect } from 'src/main/navigation';
import { BASE_URL } from 'src/main/http';

const BASE_URL_SLASH_END = BASE_URL?.includes('localhost')
  ? BASE_URL
  : `${BASE_URL}/`;

export function SocialAuthComponent() {
  console.log(BASE_URL);

  return (
    <SectionLayout type="TEXT">
      <TextPrimary tid="SIGNUP.SOCIAL.HELPER_TEXT" />
      <Container>
        <Button onClick={setLinkRedirect(`${BASE_URL_SLASH_END}auth/apple`)}>
          <AppleIcon />
          <Case>
            <AppleText />
          </Case>
        </Button>
        <Button onClick={setLinkRedirect(`${BASE_URL_SLASH_END}auth/google`)}>
          <GoogleIcon />
          <Case>
            <GoogleText />
          </Case>
        </Button>
        <Button onClick={setLinkRedirect(`${BASE_URL_SLASH_END}auth/facebook`)}>
          <FbIcon />
          <Case>
            <FbText />
          </Case>
        </Button>
      </Container>
    </SectionLayout>
  );
}
const Button = styled(IconButton)`
  width: auto;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing(2)};
`;
const Case = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
