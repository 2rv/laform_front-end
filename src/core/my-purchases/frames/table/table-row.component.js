import styled from 'styled-components';

import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function TableRowComponent(props) {
  const {
    title,
    image,
    details,
    price,
    condition,
  } = props;

  const renderCondition = (condition) => {
    if (condition === 'delivered') {
      return <Text tid="PURCHASE.SEЕWING_GOODS.CONDITION.DELIVERED" color={THEME_COLOR.TEXT.SUCCESS} />;
    } else if (condition === 'paid') {
      return <Text tid="PURCHASE.SEЕWING_GOODS.CONDITION.PAID" color={THEME_COLOR.TEXT.BLUE} />;
    } else {
      return null;
    }
  };

  return (
    <TableRow>
      <TableTD>
        <PurchaseImg src={image.url} alt={image.alt} />
        <Text tid={title} color={THEME_COLOR.SECONDARY_DARK} />
      </TableTD>

      <TableTD>
        <label>
          <Text tid="PURCHASE.SEЕWING_GOODS.DETAILS.COLOR.TITLE" />:&nbsp;
          <Text tid={details.color} color={THEME_COLOR.SECONDARY_DARK} />,&nbsp;
        </label>
        <label>
          <Text tid="PURCHASE.SEЕWING_GOODS.DETAILS.SIZE"  />:&nbsp;
          <Text color={THEME_COLOR.SECONDARY_DARK}>{details.size}</Text>.&nbsp;
        </label>
        <label>
          <Text tid="PURCHASE.SEЕWING_GOODS.DETAILS.CATEGORY.TITLE" />:&nbsp;
          <Text tid={details.category} color={THEME_COLOR.SECONDARY_DARK} />,&nbsp;
        </label>
        <br />
        <label>
          <Text tid="PURCHASE.SEЕWING_GOODS.DETAILS.COUNT" />:&nbsp;
          <Text color={THEME_COLOR.SECONDARY_DARK}>{details.count}</Text>
        </label>
      </TableTD>

      <TableTD>
        <Text fontWeight={THEME_SIZE.FONT_WEIGHT.MEDIUM} color={THEME_COLOR.SECONDARY_DARK}>{price}</Text>&nbsp;
        <Text tid="OTHER.VALUTE" color={THEME_COLOR.SECONDARY}/>.
      </TableTD>

      <TableTD>
        {renderCondition(condition)}
      </TableTD>
    </TableRow>
  );
}

const Text = styled(TextSecondary)`
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight};`}
  ${(props) => props.color && `color: ${props.color};`}
`;

const PurchaseImg = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 5px;
  margin-right: ${spacing(3)};
`;

const TableRow = styled.tr`
  border-bottom: 3px solid ${THEME_COLOR.BACKGROUND.GRAY};
`;

const TableTD = styled.td`
  padding: ${spacing(2)} 0;
  vertical-align: middle;
  line-height: 24px;

  &:last-child {
    text-align: end;
  }
`;
