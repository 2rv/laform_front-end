import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { spacing, THEME_COLOR } from '../../lib/theme';
import { BLOCK_TABLE_LIST_ROW_TYPE } from './block-table-list.type';
import {
  SEWING_PRODUCT_KEY,
  PATTERN_PRODUCT_KEY,
  MASTER_CLASS_KEY,
  PATTER_PRODUCT_FORMAT,
} from '../../lib/common/cart';

import { ActionTd } from './action-td';
import { CommentTd } from './comment-td';
import { CounterTd } from './counter-td';
import { NameTd } from './name-td';
import { ParamsTd } from './patams-td';
import { PriceTd } from './price-td';
import { StatusTd } from './status-td';

export function TableItem(props) {
  const dispatch = useDispatch();

  const {
    children,
    data, incrementCount,
    decrementCount,
    count,
    type,
    onClick,
    cursorPointer,
  } = props;

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
    productName = null,
  } = data;
  const countedPrice = quantity ? price * quantity : price;

  const showParameters = (type) => {
    switch (type) {
      case BLOCK_TABLE_LIST_ROW_TYPE.SEWING_PRODUCT:
        return (
          <ParamsTd
            items={[
              {
                name: 'BASKET.TABLE.PARAMETERS.COLOR',
                value: data[SEWING_PRODUCT_KEY.COLOR],
              },
              {
                name: 'BASKET.TABLE.PARAMETERS.SIZE',
                value: data[SEWING_PRODUCT_KEY.SIZE],
              },
              {
                name: 'BASKET.TABLE.PARAMETERS.CATEGORY',
                value: data[SEWING_PRODUCT_KEY.CATEGORY],
              },
            ]}
          />
        );
      case BLOCK_TABLE_LIST_ROW_TYPE.PATTERN_PRODUCT:
        return (
          <ParamsTd
            items={[
              {
                name: 'BASKET.TABLE.PARAMETERS.SIZE',
                value: data[PATTERN_PRODUCT_KEY.SIZE],
              },
              {
                name: 'BASKET.TABLE.PARAMETERS.FORMAT',
                value: data[PATTERN_PRODUCT_KEY.FORMAT],
              },
            ]}
          />
        );
      case BLOCK_TABLE_LIST_ROW_TYPE.MASTER_CLASS:
        return (
          <ParamsTd
            items={[
              {
                name: 'BASKET.TABLE.PARAMETERS.PROGRAM',
                value: data[MASTER_CLASS_KEY.PROGRAMM],
              },
            ]}
          />
        );

      default:
        return null;
    }
  };

  const excludeCount =
    type === BLOCK_TABLE_LIST_ROW_TYPE.PATTERN_PRODUCT &&
    data[PATTERN_PRODUCT_KEY.FORMAT] === PATTER_PRODUCT_FORMAT.REMOTE;

  return (
    <Tr>
      <NameTd image={image} name={name} />
      {comment ? <CommentTd text={comment?.text} /> : <></>}
      {params ? <ParamsTd items={params} /> : <></>}
      {otherParams ? <ParamsTd items={otherParams} /> : <></>}
      {type ? showParameters(type) : <></>}
      {count ? (
        <CounterTd
          id={id}
          incrementCount={(id) => dispatch(incrementCount(id))}
          dicrementCoun={(id) => dispatch(decrementCount(id))}
          quantity={quantity}
          excludeCount={excludeCount}
        />
      ) : <></>}
      {countedPrice ? <PriceTd countedPrice={countedPrice} isLast={status} /> : <></>}
      {status ? <StatusTd status={status} /> : <></>}
      {children ? <ActionTd id={id} data={data} children={children} /> : <></>}
    </Tr>
  );
}
const Tr = styled.tr`
  display: table-row;
  ${(props) => props.cursorPointer && `
    &:hover {
      cursor: pointer;
      background: ${THEME_COLOR.GRAY};
    }
  `};
  @media screen and (max-width: 875px) {
    display: flex;
    flex-direction: column;
    gap: ${spacing(3)};
  }
`;
