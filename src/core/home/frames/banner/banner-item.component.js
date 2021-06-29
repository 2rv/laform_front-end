import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TextPrimary, TextSecondary } from 'src/lib/element/text';
import { LinkPrimary } from 'src/lib/element/link';
import { text } from 'src/lib/common/text';
import { ButtonPrimary } from 'src/lib/element/button';

export function BannerItemComponent(props) {
  const { title, backgroundImage, path, buttonText } = props;
  return (
    <Container>
      <ContentContainer>
        <TitleText>
          {text(title)}
          &nbsp;
          <BrandText tid="HEADER_LOGO.BRAND_TEXT" />
        </TitleText>
        <LinkPrimary>
          <Button tid={buttonText} />
        </LinkPrimary>
      </ContentContainer>
      <BackgroundImage src={backgroundImage} />
    </Container>
  );
}
const ContentContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing(6.3)};
`;
const Button = styled(ButtonPrimary)`
  padding: ${spacing(3)} ${spacing(11)};
`;
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  animation: 0.5s ease-in slidein;
  @keyframes slidein {
    from {
      opacity: 0.8;
    }
    to {
      opacity: 1;
    }
  }
`;
const TitleText = styled(TextPrimary)`
  text-align: center;
  width: 550px;
  color: ${THEME_COLOR.TEXT.WHITE};
  font-size: ${THEME_SIZE.FONT.EXTRA_LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  line-height: 1.25em;
  @media screen and (max-width: 720px) {
    width: 350px;
    font-size: ${THEME_SIZE.FONT.LARGE};
  }
`;
const BackgroundImage = styled.img`
  height: 100%;
`;
const BrandText = styled(TextPrimary)`
  color: ${THEME_COLOR.PRIMARY};
  font-size: ${THEME_SIZE.FONT.EXTRA_LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  @media screen and (max-width: 720px) {
    font-size: ${THEME_SIZE.FONT.LARGE};
  }
`;
