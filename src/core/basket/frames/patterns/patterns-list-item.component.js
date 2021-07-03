import styled from 'styled-components';

import { ReactComponent as Edit } from 'src/asset/svg/edit.svg';
import { ReactComponent as Remove } from 'src/asset/svg/remove.svg';

import { ButtonBasic } from 'src/lib/element/button';
import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_SIZE, THEME_COLOR } from 'src/lib/theme';

export function PatternsListItemComponent(props) {
  const {
    seewingGoods,
    parameters,
    totalPrice,
  } = props;

  return (
    <TableRow>
      <TableTD>
        <SeewingGoodsImg src={seewingGoods.image.url} alt={seewingGoods.image.alt} />
        <Text tid={seewingGoods.title} color={THEME_COLOR.SECONDARY_DARK} />
      </TableTD>
      <TableTD>
        <label>
          <Text tid="Размер" />:&nbsp;
          <Text color={THEME_COLOR.SECONDARY_DARK}>{parameters.size}</Text>,&nbsp;
        </label>
        <label>
          <Text tid="Формат" />:&nbsp;
          <Text tid={parameters.format} color={THEME_COLOR.SECONDARY_DARK} />
        </label>
      </TableTD>
      <TableTD>
        <Text fontWeight={THEME_SIZE.FONT_WEIGHT.MEDIUM} color={THEME_COLOR.SECONDARY_DARK}>{totalPrice}</Text>&nbsp;
        <Text tid="OTHER.VALUTE" color={THEME_COLOR.SECONDARY} />.
      </TableTD>
      <TableTD>
        <ButtonsContent>
          <Button>
            <Div>
              <Edit />
            </Div>
          </Button>
          <Button marginLeft={spacing(3)}>
            <Div>
              <Remove />
            </Div>
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
  ${(props) => props.width && `width: 0 ${props.width};`}
  ${(props) => props.marginLeft && `margin-right: ${props.marginLeft};`}
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
  width: 45px;
  height: 45px;
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft};`}
`;
