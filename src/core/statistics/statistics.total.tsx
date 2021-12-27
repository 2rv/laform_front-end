import { TextCurrency, TextSecondary } from 'src/lib/element/text';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import styled from 'styled-components';
import { StatsCardProps, TotalStatsProps } from './statistics.type';

function StatsCard(props: StatsCardProps) {
  const { title, value = 0, valutTid } = props;
  return (
    <Case>
      <TextTitle tid={title} />
      <LineCase>
        <Price price={value} />
        &nbsp;
        <LigthText tid={valutTid} />
      </LineCase>
    </Case>
  );
}

export function TotalStats(props: TotalStatsProps) {
  const { general, activePath } = props;
  return (
    <Content>
      {activePath ? (
        <StatsCard
          title="STATISTICS.PARAMETERS.TOTAL_ITEM_SOLD"
          value={general?.totalCount || 0}
          valutTid="OTHER.AMOUNT"
        />
      ) : (
        <>
          <StatsCard
            title="STATISTICS.PARAMETERS.TOTAL_ITEM_SOLD"
            value={general?.totalCount || 0}
            valutTid="OTHER.AMOUNT"
          />
          <StatsCard
            title="STATISTICS.PARAMETERS.TOTAL_ORDERS"
            value={general?.totalOrders || 0}
            valutTid="OTHER.AMOUNT"
          />
          <StatsCard
            title="STATISTICS.PARAMETERS.TOTAL_SOLD_MATERIAL_GOODS"
            value={general?.printCount || 0}
            valutTid="OTHER.AMOUNT"
          />
          <StatsCard
            title="STATISTICS.PARAMETERS.TOTAL_ELECTRONIC_GOODS_SOLD"
            value={general?.electronicCount || 0}
            valutTid="OTHER.AMOUNT"
          />
          <StatsCard
            title="STATISTICS.PARAMETERS.TOTAL_PROFIT"
            value={general?.totalPrice || 0}
            valutTid="OTHER.VALUTE"
          />
          <StatsCard
            title="STATISTICS.PARAMETERS.AVERAGE_COST_PER_ORDER"
            value={general?.averagePrice || 0}
            valutTid="OTHER.VALUTE"
          />
        </>
      )}
    </Content>
  );
}

const Content = styled.div`
  display: grid;
  gap: ${spacing(3)};
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    gap: ${spacing(1)};
  }
`;
const Case = styled.div`
  padding: ${spacing(6)};
  gap: ${spacing(1)};
  display: flex;
  flex-direction: column;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.GRAY};
  line-height: 1.5;
`;
const LineCase = styled.div`
  display: flex;
  align-items: center;
`;
const TextTitle = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const Price = styled(TextCurrency)`
  color: ${THEME_COLOR.SECONDARY_DARK};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const LigthText = styled(TextSecondary)`
  color: ${THEME_COLOR.LIGHT_GRAY};
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
