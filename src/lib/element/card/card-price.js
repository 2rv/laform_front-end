import styled from 'styled-components';
import { TextSecondary, TextCurrency } from '../text';
import { THEME_COLOR, THEME_SIZE } from '../../theme';

export function CardPrice(props) {
  const { min = 0, max, discount = null } = props;
  const discountPrice = () => min - (min / 100) * discount;
  if (discount === 100 || min === 0)
    return <TextSecondary tid="PRODUCT_PRICE.FREE" />;
  return (
    <div>
      {discount ? (
        <>
          <Text price={discountPrice()} />
          &nbsp;
          <ThroughText price={min} />
        </>
      ) : (
        <>
          <Text price={min} />
          {Boolean(max) && (
            <>
              <Text price={-max} />
            </>
          )}
        </>
      )}
      &nbsp;
      <LightText tid="OTHER.VALUTE" />
    </div>
  );
}
const LightText = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const Text = styled(TextCurrency)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
const ThroughText = styled(TextCurrency)`
  text-decoration: line-through;
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
