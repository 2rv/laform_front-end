import { useState } from 'react';
import styled, { css } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { ReactComponent as ArrowRightIcon } from '../../../../asset/svg/arrow-right.svg';
import { text } from '../../../../lib/common/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { TextPrimary, TextSecondary } from '../../../../lib/element/text';

export function FaqItemComponent(props) {
  const { titleTid, contentTid } = props;
  const [isOpen, setOpen] = useState(false);

  const onTitleClick = () => setOpen(!isOpen);
  {
    /* <TitleContainer onClick={onTitleClick}>
        <Icon active={isOpen} />
      </TitleContainer> */
  }
  return (
    <Container>
      <Title tid={titleTid} />
      <Text>{text(contentTid)}</Text>
    </Container>
  );
}
const Text = styled(TextSecondary)`
  line-height: 1.5;
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  color: ${THEME_COLOR.TEXT.LIGHT};
  transition: ${THEME_VALUE.TRANSITION.FAST};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;

const TitleContainer = styled.div`
  display: flex;
  gap: ${spacing(3)};
  cursor: pointer;
  align-items: center;
`;

const Icon = styled(ArrowRightIcon)`
  transition: transform 0.25s linear;
  width: min-content;
  max-width: min-content;
  ${(p) =>
    p.active &&
    css`
      transform: rotate(90deg);
    `}
`;

const Title = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
`;
