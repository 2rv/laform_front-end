import styled from 'styled-components';

import { MASTER_CLASSES_TABLE_COLUMNS } from '../../basket.constant';

import { EditProductComponent } from '../edit-product';

import { ReactComponent as EditIcon } from 'src/asset/svg/edit.svg';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';

import { TableRow, TableData, TableImage, TableActionButton } from 'src/lib/element/table';
import { TextSecondary, TextPrimary } from 'src/lib/element/text';
import { Popup } from 'src/lib/element/popup';
import { THEME_SIZE, THEME_COLOR } from 'src/lib/theme';

export function MasterClassesListItemComponent(props) {
  const {
    title,
    image,
    parameters,
    totalPrice,
  } = props;

  return (
    <TableRow columns={MASTER_CLASSES_TABLE_COLUMNS}>
      <TableData verticalMiddle>
        <TableImage src={image.url} alt={image.alt} />
        <TextPrimary tid={title} color={THEME_COLOR.SECONDARY_DARK} />
      </TableData>
      <TableData>
        <span>
          <TextSecondary tid="BASKET.TABLE.PARAMETERS.PROGRAM" />:&nbsp;
          <TextPrimary tid={parameters.program} color={THEME_COLOR.SECONDARY_DARK} />
        </span>
      </TableData>
      <TableData>
        <TotalPriceText>{totalPrice}</TotalPriceText>&nbsp;
        <TextPrimary tid="OTHER.VALUTE" color={THEME_COLOR.SECONDARY} />.
      </TableData>
      <TableData>
        <Popup content={<EditProductComponent />}>
          <TableActionButton icon={EditIcon} />
        </Popup>
      </TableData>
      <TableData>
        <TableActionButton icon={RemoveIcon} />
      </TableData>
    </TableRow>
  );
}

const TotalPriceText = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
