import styled from 'styled-components';

import { OrderNumberTableComponent, AboutOrderContainer } from './frames';

import { ORDER_NUMBER_LIST } from './order-number.constant';

import { TextSecondary } from 'src/lib/element/text';
import { TitlePrimary } from 'src/lib/element/title';
import { ContentLayout } from 'src/lib/element/layout';
import { spacing, THEME_SIZE, THEME_COLOR } from 'src/lib/theme';

export function OrderNumberComponent({ orderNumberDetails }) {
  return (
    <Content>
      <HeadLine>
        <TitlePrimary tid="ORDER_NUMBER.TABLE.TITLE" />&nbsp;
        <OrderNumber>555105</OrderNumber>
      </HeadLine>
      <OrderNumberTableComponent orderNumberList={ORDER_NUMBER_LIST} orderNumberDetails={orderNumberDetails} />
      <AboutOrderContainer orderNumberDetails={orderNumberDetails} />
    </Content>
  );
}

const Content = styled(ContentLayout)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 ${spacing(2)};
`;

const HeadLine = styled.div`
  margin-bottom: ${spacing(5)};
`;

const OrderNumber = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  color: ${THEME_COLOR.SECONDARY_DARK}
`;
