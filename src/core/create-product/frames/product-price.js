import styled from 'styled-components';
import { TextSecondary } from '../../../lib/element/text';
import { TitlePrimary } from '../../../lib/element/title';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../lib/theme';
import { PRODUCT_FIELD_NAME } from '../create-product.type';

export function ProductPrice(props) {
  const { discount, values } = props;
  const price = minimumPrice(values);
  const discountPrice = ((price / 100) * discount).toFixed(2);
  const productPrice = (price - discountPrice).toFixed(2);
  return (
    <Container>
      <Column>
        <TextSecondary tid="Цена" />
        <div>
          <Bold tid={price} />
          &nbsp;
          <Light tid="руб." />
        </div>
      </Column>
      <TextSecondary tid="-" />
      <Column>
        <TextSecondary tid="Скидка" />
        <div>
          <Bold tid={discountPrice} />
          &nbsp;
          <Light tid="руб." />
          &nbsp;
          <Colored tid={`${discount}%`} />
        </div>
      </Column>
      <TextSecondary tid="=" />
      <Column>
        <TextSecondary tid="Цена со скидкой" />
        <div>
          <Bold tid={productPrice} />
          &nbsp;
          <Light tid="руб." />
        </div>
      </Column>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: ${spacing(2)};
  margin-top: 18px;
  height: 46px;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${spacing(2)};
  justify-content: space-between;
`;
const Bold = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Light = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const Colored = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.SUCCESS};
`;

function minimumPrice(values) {
  const productType = values[PRODUCT_FIELD_NAME.TYPE];
  if (productType === 0) {
    return checkMinPrice(
      values[PRODUCT_FIELD_NAME.PROGRAMS],
      PRODUCT_FIELD_NAME.PROGRAM_PRICE,
    );
  }
  if (productType === 1) {
    return values[PRODUCT_FIELD_NAME.PRICE];
  }
  if (productType === 2) {
    return checkMinPrice(
      values[PRODUCT_FIELD_NAME.SIZES],
      PRODUCT_FIELD_NAME.SIZE_PRICE,
    );
  }
  if (productType === 3) {
    const size = checkMinPrice(
      values[PRODUCT_FIELD_NAME.SIZES],
      PRODUCT_FIELD_NAME.SIZE_PRICE,
    );
    const color = checkMinPrice(
      values[PRODUCT_FIELD_NAME.COLORS],
      PRODUCT_FIELD_NAME.COLOR_PRICE,
    );
    return size + color;
  }
}

function checkMinPrice(listData, nameItem) {
  return listData.reduce((acc, item) => {
    if (acc > item[nameItem]) acc = item[nameItem];
    return acc;
  }, listData[0][nameItem]);
}
