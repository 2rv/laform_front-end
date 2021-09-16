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
import { TextPrimary } from '../../../../lib/element/text';

export function FaqItemComponent(props) {
  const { titleTid, contentTid } = props;
  const [isOpen, setOpen] = useState(false);

  const onTitleClick = () => setOpen(!isOpen);

  return (
    <Container>
      <TitleContainer onClick={onTitleClick}>
        <Icon active={isOpen} />
        <Title tid={titleTid} />
      </TitleContainer>
      {isOpen && <Markdown>{text(contentTid)}</Markdown>}
    </Container>
  );
}
const Markdown = styled(ReactMarkdown)`
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
  min-width: fit-content;
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
