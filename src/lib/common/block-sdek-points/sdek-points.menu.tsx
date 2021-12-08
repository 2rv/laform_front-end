import React from 'react';
import styled from 'styled-components';
import {
  components,
  OptionProps,
  MenuProps,
  MenuListProps,
} from 'react-select';
import { Divider } from 'src/lib/element/divider';

const { Menu, MenuList } = components;

export function SdekMenu(props: MenuProps<OptionProps>) {
  return (
    <Menu {...props}>
      <MenuContainer>{props.children}</MenuContainer>
    </Menu>
  );
}

export function SdekMenuList(props: MenuListProps<OptionProps>) {
  return (
    <MenuList {...props}>
      <MenuListContainer>
        {props.children}
        <Divider />
      </MenuListContainer>
    </MenuList>
  );
}
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  background-color: sandybrown;
`;
const MenuListContainer = styled.div`
  height: 800px;
  background-color: sandybrown;
`;
