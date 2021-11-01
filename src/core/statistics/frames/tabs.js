import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../lib/theme';
import { TextButton } from 'src/lib/element/button';
import { STATISTICS_ROUTE_PATH } from '../statistics.constant';
import { redirect } from 'src/main/navigation';

export function StatisticsTabs(props) {
  const { activeTab = null, pageLoading } = props;
  if (pageLoading) return null;
  return (
    <Container>
      {tabItems.map((x, i) => {
        return (
          <Tab
            onClick={() =>
              redirect(STATISTICS_ROUTE_PATH, {
                query: x.type ? { type: x.type } : undefined,
              })
            }
            key={i}
            tid={x.name}
            actived={x.type === activeTab}
          />
        );
      })}
    </Container>
  );
}
const tabItems = [
  { name: 'Общая', type: null },
  { name: 'Мастер-классы', type: 'master-class' },
  { name: 'Выкройки печатные', type: 'pattern-print' },
  { name: 'Выкройки электронные', type: 'pattern-electronic' },
  { name: 'Товары для шитья', type: 'sewing-good' },
];
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
  ${(p) =>
    p.actived &&
    css`
      font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
      border-color: ${THEME_COLOR.SECONDARY_DARK};
    `}
`;
