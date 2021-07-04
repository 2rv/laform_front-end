import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { TextPrimary, TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary } from '../../../../lib/element/title';
import { text } from '../../../../lib/common/text';
import { ButtonPrimary } from '../../../../lib/element/button';

export function SliderItemComponent(props) {
  const { image, text, textColor, buttonText, buttonColor, buttonTextColor } =
    props;
  return (
    <Container>
      <Content>
        <TextContainer>
          <Text textColor={textColor} tid={text} />
        </TextContainer>
        <Button
          buttonColor={buttonColor}
          buttonTextColor={buttonTextColor}
          tid={buttonText}
        />
      </Content>
      <BackgroundImage src={image} />
    </Container>
  );
}
const Text = styled(TitlePrimary)`
  ${({ textColor }) => `color: ${textColor};`}
  font-size: ${THEME_SIZE.FONT.EXTRA_LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;
const Button = styled(ButtonPrimary)`
  ${({ buttonColor }) => `background-color: ${buttonColor};`}
  ${({ buttonTextColor }) => `color: ${buttonTextColor};`}
  padding: ${spacing(3)} ${spacing(11)};
`;
const Content = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${spacing(6)};
  margin: 0 ${spacing(20)};
`;
const BackgroundImage = styled.img`
  display: flex;
  object-fit: fill;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
