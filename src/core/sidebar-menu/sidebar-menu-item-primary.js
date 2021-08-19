import { Divider } from '../../lib/element/divider';
import { TextPrimary, TextSecondary } from '../../lib/element/text';
import { spacing, THEME_SIZE } from '../../lib/theme';
import styled, { css } from 'styled-components';
import { ReactComponent as ArrowDown } from '../../asset/svg/arrow-down-solid.svg';
import { useState } from 'react';
import { SidebarMenuItemSecondary } from './sidebar-menu-item-secondary';
import { ButtonBasic } from 'src/lib/element/button';
import { setLinkRedirect } from 'src/main/navigation';

export function SidebarMenuItemPrimary(props) {
  const { title, items, pathname } = props.data;
  const [isOpen, setOpen] = useState(false);
  const click = (e) => {
    if (items) {
      setOpen(!isOpen);
    } else {
      e.preventDefault();
      redirect(pathname);
    }
  };
  return (
    <Container>
      <Button onClick={click}>
        <Secondary tid={title} />
        {items && <Arrow isOpen={isOpen} />}
      </Button>
      <div>
        {items && (
          <Content isOpen={isOpen}>
            {items.map((data, index) => (
              <SidebarMenuItemSecondary key={index} data={data} />
            ))}
          </Content>
        )}
        {!isOpen && <Divider />}
      </div>
    </Container>
  );
}
const Secondary = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Button = styled(ButtonBasic)`
  padding: 0;
  height: fit-content;
  padding-right: ${spacing(2)};
  background-color: transparent;
  justify-content: space-between;
`;
const Arrow = styled(ArrowDown)`
  transition: 0.8s;
  ${(p) =>
    p.isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${spacing(3)};
  transition: 0.5s ease;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  gap: ${spacing(2)};
  /* transition: max-height 0.5s; */
  max-height: 0;
  ${(p) =>
    p.isOpen &&
    css`
      max-height: 100%;
    `}
`;
