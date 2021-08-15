import styled from 'styled-components';
import { TextSecondary, TextPrimary } from 'src/lib/element/text';
import { TableRow, TableData, TableImage } from 'src/lib/element/table';
import { THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function TableItemComponent(props) {
  const { title, image, details, price, condition } = props;

  const renderCondition = (condition) => {
    if (condition === 'delivered') {
      return <DeliveredText tid="PURCHASE.SEЕWING_GOODS.CONDITION.DELIVERED" />;
    } else if (condition === 'paid') {
      return <PaidText tid="PURCHASE.SEЕWING_GOODS.CONDITION.PAID" />;
    } else {
      return null;
    }
  };

  return (
    <TableRow columns={'1fr 2fr 0.4fr 0.4fr'}>
      <TableData>
        <TableImage src={image.url} alt={image.alt} />
        <TextSecondary tid={title} />
      </TableData>

      <TableData>
        <span>
          <TextSecondary tid="PURCHASE.SEЕWING_GOODS.DETAILS.COLOR.TITLE" />
          :&nbsp;
          <TextPrimary tid={details.color} />
          ,&nbsp;
        </span>
        <span>
          <TextSecondary tid="PURCHASE.SEЕWING_GOODS.DETAILS.SIZE" />
          :&nbsp;
          <TextPrimary>{details.size}</TextPrimary>.&nbsp;
        </span>
        <span>
          <TextSecondary tid="PURCHASE.SEЕWING_GOODS.DETAILS.CATEGORY.TITLE" />
          :&nbsp;
          <TextPrimary tid={details.category} />
          ,&nbsp;
        </span>
        <br />
        <span>
          <TextSecondary tid="PURCHASE.SEЕWING_GOODS.DETAILS.COUNT" />
          :&nbsp;
          <TextPrimary>{details.count}</TextPrimary>
        </span>
      </TableData>

      <TableData>
        <TotalPriceText>{price}</TotalPriceText>&nbsp;
        <TextSecondary tid="OTHER.VALUTE" />.
      </TableData>

      <TableData>{renderCondition(condition)}</TableData>
    </TableRow>
  );
}

const TotalPriceText = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;

const DeliveredText = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.SUCCESS};
`;

const PaidText = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.BLUE};
`;
