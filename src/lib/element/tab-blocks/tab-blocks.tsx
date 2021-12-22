import { useState } from 'react';
import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { ButtonBasic } from '../button';
import { SectionLayout } from '../layout';
import { TabBlocksComponentProps } from './tab-blocks.type';

export function TabBlocksComponent(props: TabBlocksComponentProps) {
  const { children, tabItems, otherUseState, disabled } = props;
  const [activeTab, setTab] = otherUseState || useState(0);
  return (
    <SectionLayout>
      <Container>
        {tabItems.map((name, key) => (
          <Tab
            key={key}
            disabled={disabled || activeTab === key}
            onClick={() => setTab(key)}
            tid={name}
            isActive={key === activeTab}
          />
        ))}
      </Container>
      {children[activeTab]}
    </SectionLayout>
  );
}

const Container = styled.div`
  display: flex;
  overflow: auto;
  width: 100%;
  gap: ${spacing(5)};
`;
const Tab = styled(ButtonBasic)<{ isActive: boolean }>`
  padding: ${spacing(2)} 0;
  min-width: max-content;
  width: fit-content;
  border-bottom: 2px solid transparent;
  background-color: transparent;
  border-radius: 0px;
  height: fit-content;
  ${(p) =>
    p.isActive &&
    css`
      font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
      border-color: ${THEME_COLOR.SECONDARY_DARK};
    `}
`;
