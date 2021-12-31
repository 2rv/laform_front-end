import styled from 'styled-components';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { TextPrimary } from 'src/lib/element/text';
import { LinkPrimary } from 'src/lib/element/link';
import { ButtonBasic } from 'src/lib/element/button';
import { SliderItemComponentProps } from './slider.type';

export function SliderItemComponent(props: SliderItemComponentProps) {
  const { data, lang } = props;
  const {
    titleTextRu,
    titleTextEn,
    titleTextColor,
    buttonTextRu,
    buttonTextEn,
    buttonTextColor,
    buttonColor,
    isButton,
    buttonPath,
    image,
  } = data;
  return (
    <Container>
      <Content>
        <Title color={titleTextColor}>
          {lang === 'en' ? titleTextEn : titleTextRu}
        </Title>
        {isButton && (
          <LinkPrimary path={buttonPath}>
            <Button bgcolor={buttonColor} color={buttonTextColor}>
              {lang === 'en' ? buttonTextEn : buttonTextRu}
            </Button>
          </LinkPrimary>
        )}
      </Content>
      <Image src={image} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  height: 350px;
  > * {
    grid-area: 1/-1;
  }
`;
const Content = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  filter: drop-shadow(0px 15px 75px rgba(0, 0, 0, 0.1));
  gap: ${spacing(3)};
  @media screen and (max-width: 500px) {
    gap: ${spacing(2)};
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  min-height: 0;
  object-fit: cover;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  user-select: none;
  pointer-events: none;
`;
const Title = styled(TextPrimary)<{ color: string }>`
  text-align: center;
  color: ${(p) => p.color};
  font-size: ${THEME_SIZE.FONT.EXTRA_LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  line-height: 1.25em;
  @media screen and (max-width: 500px) {
    font-size: ${THEME_SIZE.FONT.LARGE};
  }
`;
const Button = styled(ButtonBasic)<{ color?: string; bgcolor?: string }>`
  min-width: 200px;
  @media screen and (max-width: 500px) {
    min-width: 160px;
    padding: ${spacing(1)};
    height: 30px;
    font-size: ${THEME_SIZE.FONT.TINY};
  }

  color: ${(p) => p.color};
  background-color: ${(p) => p.bgcolor};
`;
