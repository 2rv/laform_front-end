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
  min-height: 0;
  flex-direction: column;
  padding: ${spacing(3)};
  gap: ${spacing(2)};
  height: 100%;
  flex: 1;
  overflow: auto;
  min-height: max-content;
  box-sizing: border-box;
  padding-bottom: 200px;
`;
const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 350px;
  min-width: 0;
  min-height: max-content;
  overflow: hidden;
  max-width: ${(p) => (p.open ? `350px` : 0)};
  background-color: ${THEME_COLOR.WHITE};
  z-index: 4;
  transition: 0.4s;
  @media screen and (max-width: 720px) {
    width: 100vw;
    max-width: ${(p) => (p.open ? `100vw` : 0)};
  }
`;
