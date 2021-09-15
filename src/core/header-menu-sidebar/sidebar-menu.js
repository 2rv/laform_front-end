import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { SidebarMenuListItem } from './sidebar-menu-list-item';
import { NAVIGATION_MENU } from './sidebar-menu.constant';

export function SidebarMenu(props) {
  const { items, setOpen, isOpen } = props;
  return (
    <Container open={isOpen}>
      <Content>
        {NAVIGATION_MENU.map((data, index) => (
          <SidebarMenuListItem key={index} data={data} />
        ))}
      </Content>
    </Container>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  overflow: auto;
  padding: ${spacing(3)};
  max-height: 100%;
`;
const Container = styled.div`
  position: absolute;
  width: 350px;
  bottom: 0;
  top: 0;
  left: 0;
  max-width: ${(p) => (p.open ? `350px` : 0)};
  overflow: hidden;
  background-color: ${THEME_COLOR.WHITE};
  z-index: 10;
  transition: 0.4s;
  /* height: calc(100vh - 180px + ${(p) => p.scroll + 'px'}); */
  @media screen and (max-width: 720px) {
    width: 100vw;
    max-width: ${(p) => (p.open ? `100vw` : 0)};
    /* height: calc(100vh - 120px + ${(p) => p.scroll + 'px'}); */
  }
`;
