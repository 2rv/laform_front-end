import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { FilterTabsPropsType } from './filter-tabs.type';
import { TextButton } from '../button';

export function FilterTabs(props: FilterTabsPropsType) {
  const { activeTab, setActiveTab, tabItems, disabled } = props;
  return (
    <Container>
      {tabItems?.map((x, i) => (
        <Tab
          disabled={disabled}
          onClick={() => setActiveTab(x.type)}
          key={i}
          tid={x.name}
          actived={x.type === activeTab}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  overflow: auto;
  width: 100%;
  gap: ${spacing(5)};
`;
const Tab = styled(TextButton)`
  padding: ${spacing(2)} 0;
  min-width: max-content;
  width: fit-content;
  border-bottom: 2px solid transparent;
  ${(p: { actived: any }) =>
    p.actived &&
    css`
      font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
      border-color: ${THEME_COLOR.SECONDARY_DARK};
    `}
`;
