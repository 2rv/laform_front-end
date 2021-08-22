import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ButtonBasic } from '../../lib/element/button';
import { LinkSecondary } from '../../lib/element/link';
import { TextSecondary, TextPrimary } from '../../lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { BLOCK_TABLE_LIST_ROW_TYPE } from './block-table-list.type';
import {
  SEWING_PRODUCT_KEY,
  PATTERN_PRODUCT_KEY,
  MASTER_CLASS_KEY,
  PATTER_PRODUCT_FORMAT,
} from '../../lib/common/cart';

export function TableItem(props) {
  const dispatch = useDispatch();
  const { children, data, incrementCount, decrementCount, count, type } = props;
  const {
    name,
    price,
    quantity,
    image,
    params,
    otherParams,
    status,
    comment,
    id,
  } = data;
  const countedPrice = price * quantity;

  const showParameters = (type) => {
    switch (type) {
      case BLOCK_TABLE_LIST_ROW_TYPE.SEWING_PRODUCT:
        return (
          <Td>
            <Case>
              <Contructor
                items={[
                  {
                    name: 'BASKET.PARAMETERS.COLOR',
                    value: data[SEWING_PRODUCT_KEY.COLOR],
                  },
                  {
                    name: 'BASKET.PARAMETERS.SIZE',
                    value: data[SEWING_PRODUCT_KEY.SIZE],
                  },
                  {
                    name: 'BASKET.PARAMETERS.CATEGORY',
                    value: data[SEWING_PRODUCT_KEY.CATEGORY],
                  },
                ]}
              />
            </Case>
          </Td>
        );
      case BLOCK_TABLE_LIST_ROW_TYPE.PATTERN_PRODUCT:
        return (
          <Td>
            <Case>
              <Contructor
                items={[
                  {
                    name: 'BASKET.PARAMETERS.SIZE',
                    value: data[PATTERN_PRODUCT_KEY.SIZE],
                  },
                  {
                    name: 'BASKET.PARAMETERS.FORMAT',
                    value: data[PATTERN_PRODUCT_KEY.FORMAT],
                  },
                ]}
              />
            </Case>
          </Td>
        );
      case BLOCK_TABLE_LIST_ROW_TYPE.MASTER_CLASS:
        return (
          <Td>
            <Case>
              <Contructor
                items={[
                  {
                    name: 'BASKET.PARAMETERS.PROGRAM',
                    value: data[MASTER_CLASS_KEY.PROGRAMM],
                  },
                ]}
              />
            </Case>
          </Td>
        );
      default:
        return null;
    }
  };

  const excludeCount =
    type === BLOCK_TABLE_LIST_ROW_TYPE.PATTERN_PRODUCT &&
    data[PATTERN_PRODUCT_KEY.FORMAT] === PATTER_PRODUCT_FORMAT.REMOTE;

  return (
    <tr>
      <Td>
        <NameBlock>
          <Image src={image} />
          <TextPrimary tid={name} />
        </NameBlock>
      </Td>
      {comment && (
        <Td>
          <Case>
            <div>
              <TextSecondary tid={comment?.text} />
              &nbsp;
              <Link tid="Читать полность" />
            </div>
          </Case>
        </Td>
      )}
      {params && (
        <Td>
          <Case>
            <Contructor items={params} />
          </Case>
        </Td>
      )}
      {type && showParameters(type)}
      {otherParams && (
        <Td>
          <Case>
            <Contructor items={otherParams} />
          </Case>
        </Td>
      )}
      {count && !excludeCount && (
        <Td>
          <CountCase>
            <CountButton onClick={() => dispatch(decrementCount(id))}>
              -
            </CountButton>
            <TextPrimary>{quantity}</TextPrimary>
            <CountButton onClick={() => dispatch(incrementCount(id))}>
              +
            </CountButton>
          </CountCase>
        </Td>
      )}
      {countedPrice && (
        <Td>
          <Line isLast={status}>
            <div>
              <Price tid={countedPrice} />
              &nbsp;
              <Valute tid="UNIT.CURRENCY" />
            </div>
          </Line>
        </Td>
      )}
      {status && (
        <Td>
          <Case>
            <ColoredText tid={status} />
          </Case>
        </Td>
      )}
      <Td>
        <ActionBlock>{children && children(id)}</ActionBlock>
      </Td>
    </tr>
  );
}
const CountCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  margin: 0 30px;
  background-color: ${THEME_COLOR.GRAY};
`;

const CountButton = styled(ButtonBasic)`
  width: 100%;
  padding: 0;
  color: ${THEME_COLOR.TEXT.LIGHT};
`;

const Link = styled(LinkSecondary)`
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
const Td = styled.td`
  vertical-align: middle;
`;
const ActionBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing(3)};
`;
const NameBlock = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
  line-height: 1.5;
  width: max-content;
  max-width: 230px;
`;
const Line = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
  line-height: 1.5;
  margin: 0 30px;
`;
const Case = styled.div`
  display: flex;
  line-height: 1.5;
  align-items: center;
  margin: 0 30px;
`;
const Image = styled.img`
  width: 75px;
  height: 75px;
  min-width: 75px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  overflow: hidden;
`;
const Price = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Valute = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const ColoredText = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.SUCCESS};
`;

const Contructor = (props) => {
  const { items } = props;
  return (
    <ConstructorCase>
      {items.map(({ name, value }, i) => {
        return (
          <>
            <TextSecondary>
              <TextSecondary tid={name} />
              :&nbsp;
              <TextPrimary>
                <TextPrimary tid={value} />
                {i !== items.length - 1 && ','}
              </TextPrimary>
            </TextSecondary>
          </>
        );
      })}
    </ConstructorCase>
  );
};
const ConstructorCase = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing(1)};
  line-height: 1.5;
`;
const renderCondition = (condition) => {
  // if (condition === 'delivered') {
  //   return <DeliveredText tid="PURCHASE.SEЕWING_GOODS.CONDITION.DELIVERED" />;
  // } else if (condition === 'paid') {
  //   return <PaidText tid="PURCHASE.SEЕWING_GOODS.CONDITION.PAID" />;
  // } else {
  //   return null;
  // }
};
