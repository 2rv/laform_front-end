import { useSelector } from 'react-redux';
import { AUTH_STORE_NAME, USER_ROLE } from 'src/lib/common/auth';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import styled, { css } from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { SidebarMenuListItem } from './sidebar-menu-list-item';
import { NAVIGATION_MENU } from './sidebar-menu.constant';

export function SidebarMenu(props) {
  const { setOpen, isOpen } = props;
  const { activePath, isAuth, isAdmin } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
    isAuth: state[AUTH_STORE_NAME]?.logged,
    isAdmin: state[AUTH_STORE_NAME].user?.role === USER_ROLE.ADMIN,
  }));

  const scrolled = () => {
    if (typeof window !== 'undefined') {
      return window.pageYOffset;
    }
    return 0;
  };
  return (
    <Container open={isOpen} scrolled={scrolled}>
      <Content>
        {NAVIGATION_MENU(isAuth && isAdmin).map((data, index) => (
          <SidebarMenuListItem key={index} data={data} />
        ))}
      </Content>
    </Container>
  );
}

const Content = styled.div`
  display: none;
  flex-direction: column;
  gap: ${spacing(2)};
  padding: ${spacing(3)};
  max-height: 100%;
  min-width: 350px;
  @media screen and (max-width: 1070px) {
    display: flex;
  }
  @media screen and (max-width: 720px) {
    min-width: 100vw;
  }
`;
const Container = styled.div`
  position: absolute;
  display: none;
  width: 350px;
  bottom: 0;
  top: 0;
  left: 0;
  max-width: ${(p) => (p.open ? `350px` : 0)};
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${THEME_COLOR.WHITE};
  z-index: 10;
  transition: 0.4s;
  height: calc(100vh - 180px + ${(p) => p.scrolled() + 'px'});
  @media screen and (max-width: 1070px) {
    display: flex;
  }
  @media screen and (max-width: 720px) {
    width: 100vw;
    max-width: ${(p) => (p.open ? `100vw` : 0)};
    height: calc(100vh - 120px + ${(p) => p.scrolled() + 'px'});
  }
`;
