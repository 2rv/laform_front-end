import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { ActionTd } from './button.td';
import { CommentTd } from './comment-td';
import { CounterTd } from './counter-td';
import { NameTd } from './name-td';
import { ParamsTd } from './patams-td';
import { PriceTd } from './price-td';
import { StatusTd } from './status-td';
import { ButtonTd } from './button.td';

export function TableItem(props) {
  const { children, data, changeItem, deleteItem } = props;
  const {
    id,
    name,
    image,
    //------ основные данные
    params,
    otherParams,
    sizesOptions,
    colorsOptions,
    programsOptions,
    //------ параметры и опции
    count,
    maxCount,
    totalPrice,
    //------ количество и цена
    status,
    comment,
    //------ другое
  } = data;
  return (
    <Tr>
      <NameTd image={image} name={name} />
      <CommentTd comment={comment} />
      <ParamsTd params={params} />
      <ParamsTd params={otherParams} />
      <CounterTd
        changeItem={changeItem}
        id={id}
        count={count}
        maxCount={maxCount}
      />
      <PriceTd isLast={status} totalPrice={totalPrice} />
      <StatusTd status={status} />
      <ButtonTd
        id={id}
        changeItem={changeItem}
        deleteItem={deleteItem}
        sizesOptions={sizesOptions}
        colorsOptions={colorsOptions}
        programsOptions={programsOptions}
      />
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
