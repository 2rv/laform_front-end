import { Divider } from '../../lib/element/divider';
import { TextPrimary, TextSecondary } from '../../lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import { LinkSecondary } from 'src/lib/element/link';

export function SidebarMenuItemSecondary(props) {
  const { title, pathname } = props.data;
  return (
    <Container>
      <Light tid={title} path={pathname} />
      <Divider />
    </Container>
  );
}
const Light = styled(LinkSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${spacing(2)};
  margin-left: ${spacing(3)};
`;
