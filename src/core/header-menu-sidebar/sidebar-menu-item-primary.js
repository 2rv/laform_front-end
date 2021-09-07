import { Divider } from '../../lib/element/divider';
import { TextPrimary, TextSecondary } from '../../lib/element/text';
import { spacing, THEME_SIZE } from '../../lib/theme';
import styled, { css } from 'styled-components';
import { ReactComponent as ArrowDown } from '../../asset/svg/arrow-down-solid.svg';
import { useState } from 'react';
import { SidebarMenuItemSecondary } from './sidebar-menu-item-secondary';
import { ButtonBasic } from 'src/lib/element/button';
import { redirect } from 'src/main/navigation';

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
        <Text tid={title} />
        {items && <Arrow open={isOpen} />}
      </Button>
      <div>
        {items && (
          <Content open={isOpen}>
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
const Text = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  text-align: start;
  line-height: 1.5;
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
    p.open &&
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
  max-height: 0;
  ${(p) =>
    p.open &&
    css`
      max-height: 100%;
    `}
`;
