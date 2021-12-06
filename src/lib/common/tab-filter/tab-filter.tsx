import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { TabFilterPropsType } from './tab-filter.type';
import { TextButton } from '../../element/button';

export function TabFilter(props: TabFilterPropsType) {
  const { activeTab = null, handleFilter, tabItems, isPending } = props;
  const setActiveTab = (index: number) => {
    handleFilter(tabItems[index].type);
  };
  console.log(activeTab);

  return (
    <Container>
      {tabItems?.map((x, i) => (
        <Tab
          disabled={isPending}
          onClick={() => setActiveTab(i)}
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
