import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_SIZE } from '../../../lib/theme';
import { TextPrimary } from '../../../lib/element/text';
import { LinkSecondary } from '../../../lib/element/link';

export function FooterLinkList(props) {
  const { title, items } = props.data;
  return (
    <Container>
      <Title tid={title} />
      {items.map(({ tid, tvalue, path }, index) => (
        <LinkSecondary key={index} tid={tid} path={path} />
      ))}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
  line-height: 1.5;
`;

const Title = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
