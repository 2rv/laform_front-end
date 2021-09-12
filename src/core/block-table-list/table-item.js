import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { ActionTd } from './action-td';
import { CommentTd } from './comment-td';
import { CounterTd } from './counter-td';
import { NameTd } from './name-td';
import { ParamsTd } from './patams-td';
import { PriceTd } from './price-td';
import { StatusTd } from './status-td';
import { ChangeTd } from './change-td';
export function TableItem(props) {
  const { children, countMethods, data, changeItem } = props;
  const {
    id,
    name,
    image,
    comment,
    params,
    otherParams,
    count,
    maxCount,

    totalPrice,
    quantity,
    status,

    sizesOptions,
    colorsOptions,
    programsOptions,
  } = data;

  return (
    <Tr>
      <NameTd image={image} name={name} />
      <CommentTd comment={comment} />
      <ParamsTd params={params} />
      <ParamsTd params={otherParams} />
      <CounterTd
        id={id}
        count={count}
        maxCount={maxCount}
        countMethods={countMethods}
      />
      <PriceTd isLast={status} totalPrice={totalPrice} />
      <StatusTd status={status} />
      <ChangeTd
        id={id}
        changeItem={changeItem}
        sizesOptions={sizesOptions}
        colorsOptions={colorsOptions}
        programsOptions={programsOptions}
      />
      <ActionTd children={children} />
    </Tr>
  );
}

const Tr = styled.tr`
  display: table-row;
  /* &:hover {
    cursor: pointer;
    background: ${THEME_COLOR.GRAY};
    transition: 0.5s;
  }
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT}; */
  @media screen and (max-width: 875px) {
    display: flex;
    flex-direction: column;
    gap: ${spacing(3)};
  }
`;
