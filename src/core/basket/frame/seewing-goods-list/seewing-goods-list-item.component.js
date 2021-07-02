import styled from 'styled-components';

import { ReactComponent as Edit } from 'src/asset/svg/edit.svg';
import { ReactComponent as Remove } from 'src/asset/svg/remove.svg';

import { FieldPrimary } from 'src/lib/element/field';
import { ButtonBasic } from 'src/lib/element/button';
import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_SIZE, THEME_COLOR } from 'src/lib/theme';

export function SeewingGoodsListItemComponent(props) {
  const {
    seewingGoods,
    parameters,
    count,
    totalPrice,
  } = props;

  return (
    <TableRow>
      <TableTD>
        <Div>
          <SeewingGoodsImg src={seewingGoods.image.url} alt={seewingGoods.image.alt} />
          <Text tid={seewingGoods.title} color={THEME_COLOR.SECONDARY_DARK} />
        </Div>
      </TableTD>
      <TableTD>
        <label>
          <Text tid="Цвет" />:&nbsp;
          <Text tid={parameters.color} color={THEME_COLOR.SECONDARY_DARK} />,&nbsp;
        </label>
        <label>
          <Text tid="Размер" />:&nbsp;
          <Text color={THEME_COLOR.SECONDARY_DARK}>{parameters.size}</Text>,
        </label>
        <br />
        <label>
          <Text tid="Категория" />:&nbsp;
          <Text tid={parameters.category} color={THEME_COLOR.SECONDARY_DARK} />
        </label>
      </TableTD>
      <TableTD>
        <Button width="68px" height="40px">
          <Text color={THEME_COLOR.FIELD.TEXT_PRIMARY}>-</Text>
          <Text margin={spacing(2)} color={THEME_COLOR.SECONDARY_DARK}>1</Text>
          <Text color={THEME_COLOR.FIELD.TEXT_PRIMARY}>+</Text>
        </Button>
      </TableTD>
      <TableTD>
        <Text fontWeight={THEME_SIZE.FONT_WEIGHT.MEDIUM} color={THEME_COLOR.SECONDARY_DARK}>{totalPrice}</Text>&nbsp;
        <Text tid="OTHER.VALUTE" color={THEME_COLOR.SECONDARY} />.
      </TableTD>
      <TableTD>
        <ButtonsContent>
          <Button width="45px" height="45px">
            <div>
              <Edit />
            </div>
          </Button>
          <Button width="45px" height="45px" marginLeft={spacing(3)}>
            <div>
              <Remove />
            </div>
          </Button>
        </ButtonsContent>
      </TableTD>
    </TableRow>
  );
}

const Text = styled(TextSecondary)`
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight};`}
  ${(props) => props.color && `color: ${props.color};`}
  ${(props) => props.margin && `margin: 0 ${props.margin};`}
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
`;

const SeewingGoodsImg = styled.img`
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

const ButtonsContent = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled(ButtonBasic)`
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.height && `height: ${props.height};`}
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft};`}
`;
