import { SectionLayout } from 'src/lib/element/layout';
import { TextCurrency, TextSecondary } from 'src/lib/element/text';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import styled from 'styled-components';

export function MasterClassStats(props) {
  const { statistics } = props;
  return (
    <SectionLayout>
      <Title tid="STATISTICS.TITLES.MASTER_CLASS" />
      <Content>
        <Case>
          <TextTitle tid="STATISTICS.PARAMETERS.TOTAL_PROFIT" />
          <LineCase>
            <Price price={statistics.totalPurchasedProductPrice} />
            &nbsp;
            <LigthText tid="OTHER.VALUTE" />
          </LineCase>
        </Case>
        <Case>
          <TextTitle tid="STATISTICS.PARAMETERS.TOTAL_ITEM_SOLD" />
          <LineCase>
            <Price price={statistics.productsCount} />
            &nbsp;
            <LigthText tid="OTHER.AMOUNT" />
          </LineCase>
        </Case>
      </Content>
    </SectionLayout>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
`;
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
