import { useState } from 'react';
import styled, { css } from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { ReactComponent as ArrowRightIcon } from '../../../../asset/svg/arrow-right.svg';

import { text } from '../../../../lib/common/text';
import { spacing, THEME_SIZE } from '../../../../lib/theme';
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
      {isOpen && <ReactMarkdown>{text(contentTid)}</ReactMarkdown>}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
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

  ${(p) =>
    p.active &&
    css`
      transform: rotate(90deg);
    `}
`;

const Title = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
