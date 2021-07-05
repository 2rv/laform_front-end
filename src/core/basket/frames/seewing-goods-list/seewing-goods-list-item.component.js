import styled from 'styled-components';

import { EditProductComponent } from '../edit-product';

import { SEEWING_GOODS_TABLE_COLUMNS } from '../../basket.constant';

import { ReactComponent as EditIcon } from 'src/asset/svg/edit.svg';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';

import { TableRow, TableData, TableImage, TableActionButton } from 'src/lib/element/table';
import { TextSecondary, TextPrimary } from 'src/lib/element/text';
import { Popup } from 'src/lib/element/popup';
import { ButtonBasic } from 'src/lib/element/button';
import { THEME_SIZE, THEME_COLOR } from 'src/lib/theme';

export function SeewingGoodsListItemComponent(props) {
  const {
    title,
    image,
    parameters,
    count,
    totalPrice,
  } = props;

  return (
    <TableRow columns={SEEWING_GOODS_TABLE_COLUMNS}>
      <TableData verticalMiddle>
        <TableImage src={image.url} alt={image.alt} />
        <TextPrimary tid={title} />
      </TableData>
      <TableData>
        <span>
          <TextSecondary tid="BASKET.TABLE.PARAMETERS.COLORS.TITLE" />:&nbsp;
          <TextPrimary tid={parameters.color} />,
        </span>&nbsp;
        <span>
          <TextSecondary tid="BASKET.TABLE.PARAMETERS.SIZE" />:&nbsp;
          <TextPrimary>{parameters.size}</TextPrimary>,
        </span>
        <br />
        <span>
          <TextSecondary tid="BASKET.TABLE.PARAMETERS.CATEGORY" />:&nbsp;
          <TextPrimary tid={parameters.category} />
        </span>
      </TableData>
      <TableData>
        <CounterContent>
          <CounterButton>-</CounterButton>
          <TextPrimary>{count}</TextPrimary>
          <CounterButton>+</CounterButton>
        </CounterContent>
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

const CounterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 40px;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
`;

const CounterButton = styled(ButtonBasic)`
  width: 100%;
  height: 100%;
  padding: 0;
  color: ${THEME_COLOR.FIELD.TEXT_PRIMARY};
`;
