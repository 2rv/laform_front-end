import { SectionLayout } from 'src/lib/element/layout';
import { TextCurrency, TextSecondary } from 'src/lib/element/text';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import styled from 'styled-components';

function StatsCard(props) {
  const { title, value, valutTid } = props;
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

export function TotalStats(props) {
  const { general, activeTab } = props;
  return (
    <Content>
      {activeTab ? (
        <StatsCard
          title="STATISTICS.PARAMETERS.TOTAL_ITEM_SOLD"
          value={general.totalCount}
          valutTid="OTHER.AMOUNT"
        />
      ) : (
        <>
          <StatsCard
            title="STATISTICS.PARAMETERS.TOTAL_ITEM_SOLD"
            value={general.totalCount}
            valutTid="OTHER.AMOUNT"
          />
          <StatsCard
            title="STATISTICS.PARAMETERS.TOTAL_ORDERS"
            value={general.totalOrders}
            valutTid="OTHER.AMOUNT"
          />
          <StatsCard
            title="STATISTICS.PARAMETERS.TOTAL_SOLD_MATERIAL_GOODS"
            value={general.printCount}
            valutTid="OTHER.AMOUNT"
          />
          <StatsCard
            title="STATISTICS.PARAMETERS.TOTAL_ELECTRONIC_GOODS_SOLD"
            value={general.electronicCount}
            valutTid="OTHER.AMOUNT"
          />
          <StatsCard
            title="STATISTICS.PARAMETERS.TOTAL_PROFIT"
            value={general.totalPrice}
            valutTid="OTHER.VALUTE"
          />
          <StatsCard
            title="STATISTICS.PARAMETERS.AVERAGE_COST_PER_ORDER"
            value={general.averagePrice}
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
