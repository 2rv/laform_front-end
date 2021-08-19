import { Divider } from '../../lib/element/divider';
import { TextPrimary } from '../../lib/element/text';
import { spacing, THEME_SIZE } from '../../lib/theme';
import styled from 'styled-components';
import { ReactComponent as ArrowDown } from '../../asset/svg/arrow-down-solid.svg';
import { SidebarMenuListItem } from './sidebar-menu-list-item';

export function SidebarMenu(props) {
  const { items, setOpen, isOpen } = props;
  return (
    <Container toggle={isOpen}>
      <Content>
        {navMenu.map((data, index) => (
          <SidebarMenuListItem key={index} data={data} />
        ))}
      </Content>
    </Container>
  );
}
const navMenu = [
  {
    title: 'Выкройки',
    items: [
      { title: 'Все выкройки', pathname: '/' },
      {
        title: 'Для мужчин',
        items: [
          { tid: 'штаны', pathname: '/' },
          { tid: 'штаны', pathname: '/' },
        ],
      },
      { title: 'Для детей' },
      { title: 'Платья' },
      { title: 'Юбки' },
    ],
  },
  {
    title: 'Мастер-классы',
    items: [
      { title: 'Все выкройки', pathname: '/patterns' },
      {
        title: 'Для мужчин',
        items: [
          { tid: 'штаны', pathname: '/' },
          { tid: 'штаны', pathname: '/' },
        ],
      },
      { title: 'Для детей' },
      { title: 'Платья' },
      { title: 'Юбки' },
    ],
  },
  { title: 'Товары для шитья', pathname: '/error' },
];
const Text = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const Case = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing(3)};
  gap: ${spacing(2)};
  height: 100%;
  flex: 1;
`;

const Container = styled.div`
  position: fixed;
  top: 172px;
  left: 0;
  height: 100%;
  width: 350px;
  min-width: 0;
  overflow: hidden;
  max-width: ${(p) => (p.toggle ? `350px` : 0)};
  background-color: #fff;
  z-index: 4;
  transition: 0.4s;
  @media screen and (max-width: 700px) {
    width: 100vw;
    max-width: ${(p) => (p.toggle ? `100vw` : 0)};
  }
`;
