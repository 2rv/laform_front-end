import styled from 'styled-components';

import { PATTERN_TABLE_COLUMNS } from '../../basket.constant';

import { EditProductComponent } from '../edit-product';

import { ReactComponent as EditIcon } from 'src/asset/svg/edit.svg';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';

import {
  TableRow,
  TableData,
  TableImage,
  TableActionButton,
} from 'src/lib/element/table';
import { TextSecondary, TextPrimary } from 'src/lib/element/text';
import { Popup } from 'src/lib/element/popup';
import { THEME_SIZE, THEME_COLOR } from 'src/lib/theme';

export function PatternsListItemComponent(props) {
  const { title, image, parameters, totalPrice } = props;

  return (
    <TableRow columns={PATTERN_TABLE_COLUMNS}>
      <TableData verticalMiddle>
        <TableImage src={image.url} alt={image.alt} />
        <TextPrimary tid={title} />
      </TableData>
      <TableData>
        <span>
          <TextSecondary tid="BASKET.TABLE.PARAMETERS.SIZE" />
          :&nbsp;
          <TextPrimary>{parameters.size}</TextPrimary>,
        </span>
        &nbsp;
        <span>
          <TextSecondary tid="BASKET.TABLE.PARAMETERS.FORMATS.TITLE" />
          :&nbsp;
          <TextPrimary tid={parameters.format} />
        </span>
      </TableData>
      <TableData>
        <TotalPriceText>{totalPrice}</TotalPriceText>&nbsp;
        <TextSecondary tid="OTHER.VALUTE" />.
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
