import styled from 'styled-components';

import { ORDER_NUMBER_TABLE_COLUMNS } from '../../order-number.constant';

import { TextSecondary, TextPrimary } from 'src/lib/element/text';
import { TableRow, TableData, TableImage } from 'src/lib/element/table';
import { THEME_SIZE, THEME_COLOR } from 'src/lib/theme';

export function OrderNumberTableItemComponent(props) {
  const {
    title,
    image,
    parameters,
    totalPrice,
    orderNumberDetails,
  } = props;

  // TODO: поправить когда данные будут в BE

  return (
    <TableRow columns={ORDER_NUMBER_TABLE_COLUMNS}>
      <TableData verticalMiddle>
        <TableImage src={image.url} /> {/* не понятно где ссылка картинки в BE */}
        <TextPrimary tid={title} />
      </TableData>
      <TableData>
        {/* orderNumberDetails.size */}
        {parameters.size && (
          <span>
            <TextSecondary tid="ORDER_NUMBER.TABLE.DATA.PARAMETERS.SIZE" />:&nbsp;
            <TextPrimary>{parameters.size}</TextPrimary>,&nbsp; {/* orderNumberDetails.size */}
          </span>
        )}
        {/* orderNumberDetails.format */}
        {parameters.format && (
          <span>
            <TextSecondary tid="ORDER_NUMBER.TABLE.DATA.PARAMETERS.FORMAT" />:&nbsp;
            <TextPrimary tid={parameters.format} />&nbsp; {/* orderNumberDetails.format */}
          </span>
        )}
        {/* orderNumberDetails.color */}
        {parameters.color && (
          <span>
            <TextSecondary tid="ORDER_NUMBER.TABLE.DATA.PARAMETERS.COLOR" />:&nbsp;
            <TextPrimary tid={parameters.color} />,&nbsp; {/* orderNumberDetails.color */}
          </span>
        )}
        <br />
        {/* orderNumberDetails.quantity */}
        {parameters.count && (
          <span>
            <TextSecondary tid="ORDER_NUMBER.TABLE.DATA.PARAMETERS.COUNT" />:&nbsp;
            <TextPrimary tid={parameters.count} />&nbsp; {/* orderNumberDetails.quantity */}
          </span>
        )}
      </TableData>
      <TableData>
        <TotalPriceText>{totalPrice}</TotalPriceText>&nbsp;  {/* orderNumberDetails.total */}
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
