import { useState } from 'react';
import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { TextButton } from '../button';
import { SectionLayout } from '../layout';
import { TabBlocksComponentProps } from './tab-blocks.type';

export function TabBlocksComponent(props: TabBlocksComponentProps) {
  const { children, tabItems } = props;
  const [activeTab, setTab] = useState(0);
  return (
    <SectionLayout>
      <Container>
        {tabItems.map((name, key) => (
          <Tab
            key={key}
            disabled={activeTab === key}
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
const Tab = styled(TextButton)<{ isActive: boolean }>`
  padding: ${spacing(2)} 0;
  min-width: max-content;
  width: fit-content;
  border-bottom: 2px solid transparent;
  ${(p) =>
    p.isActive &&
    css`
      font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
      border-color: ${THEME_COLOR.SECONDARY_DARK};
    `}
`;