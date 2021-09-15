import styled from 'styled-components';
import { ReactComponent as AppleIcon } from '../../../../asset/svg/apple-icon.svg';
import { ReactComponent as AppleText } from '../../../../asset/svg/apple-text.svg';
import { ReactComponent as GoogleIcon } from '../../../../asset/svg/google-icon.svg';
import { ReactComponent as GoogleText } from '../../../../asset/svg/google-text.svg';
import { ReactComponent as FbIcon } from '../../../../asset/svg/fb-icon.svg';
import { ReactComponent as FbText } from '../../../../asset/svg/fb-text.svg';
import { spacing } from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/element/layout';
import { TextPrimary } from '../../../../lib/element/text';
import { IconButton } from '../../../../lib/element/button';

export function LoginFormSocialComponent() {
  return (
    <SectionLayout type="TEXT">
      <TextPrimary tid="SIGNUP.SOCIAL.HELPER_TEXT" />
      <ButtonContainer>
        <Button>
          <AppleIcon />
          <SecondaryIconContainer>
            <AppleText />
          </SecondaryIconContainer>
        </Button>
        <Button>
          <GoogleIcon />
          <SecondaryIconContainer>
            <GoogleText />
          </SecondaryIconContainer>
        </Button>
        <Button>
          <FbIcon />
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
const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing(2)};
`;
const SecondaryIconContainer = styled.div`
  @media screen and (max-width: 360px) {
    display: none;
  }
`;
