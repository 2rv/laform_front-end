import styled from 'styled-components';

import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function TabsComponent() {
  return (
    <Tabs>
      <Tab active={true}>
        <TextSecondary tid="HOME.CATALOG_LIST.SEEWING_GOODS.TITLE" />
      </Tab>
      <Tab>
        <TextSecondary tid="HOME.CATALOG_LIST.MASTER_CLASSES.TITLE" />
      </Tab>
      <Tab>
        <TextSecondary tid="PATTERNS.PATTERNS.TITLE" />
      </Tab>
    </Tabs>
  );
}

const Tabs = styled.div`
  margin: ${spacing(7)} 0;
  display: flex;
  align-items: center;
`;

const Tab = styled.div`
  ${(props) => props.active && `
    span {
      font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
      color: ${THEME_COLOR.SECONDARY_DARK};
    }

    border-bottom: 2px solid ${THEME_COLOR.SECONDARY_DARK};
  `};

  padding-bottom: ${spacing(2)};
  cursor: pointer;

  &:not(:last-child) {
    margin-right: ${spacing(8)};
  }
`;
