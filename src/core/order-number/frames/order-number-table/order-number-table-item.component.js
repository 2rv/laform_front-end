import styled from 'styled-components';

import { ORDER_NUMBER_TABLE_COLUMNS } from '../../order-number.constant';

import { ButtonBasic } from 'src/lib/element/button';
import { TextSecondary, TextPrimary } from 'src/lib/element/text';
import { TableRow, TableHeader, TableData, TableImage } from 'src/lib/element/table';

import { spacing, THEME_SIZE, THEME_COLOR } from 'src/lib/theme';

export function OrderNumberTableItemComponent(props) {
  const {
    title,
    image,
    parameters,
    totalPrice,
  } = props;

  return (
    <TableRow columns={ORDER_NUMBER_TABLE_COLUMNS}>
      <TableData verticalMiddle>
        <TableImage src={image.url} alt={image.alt} />
        <TextPrimary tid={title} />
      </TableData>
      <TableData>
        <span>
          <TextSecondary tid="ORDER_NUMBER.TABLE.DATA.PARAMETERS.SIZE" />:&nbsp;
          <TextPrimary>{parameters.size}</TextPrimary>,
        </span>&nbsp;
        {parameters.format && (
          <span>
            <TextSecondary tid="ORDER_NUMBER.TABLE.DATA.PARAMETERS.PRINTED" />:&nbsp;
            <TextPrimary tid={parameters.format} />
          </span>
        )}
        {parameters.color && (
          <span>
            <TextSecondary tid="ORDER_NUMBER.TABLE.DATA.PARAMETERS.COLOR" />:&nbsp;
            <TextPrimary tid={parameters.color} />,
          </span>
        )}
        <br />
        {parameters.count && (
          <span>
            <TextSecondary tid="ORDER_NUMBER.TABLE.DATA.PARAMETERS.COUNT" />:&nbsp;
            <TextPrimary tid={parameters.count} />
          </span>
        )}
      </TableData>
      <TableData>
        <TotalPriceText>{totalPrice}</TotalPriceText>&nbsp;
        <TextSecondary tid="OTHER.VALUTE" />.
      </TableData>
    </TableRow>
  );
}

const TotalPriceText = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
