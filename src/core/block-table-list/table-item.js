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
  const { data, changeItem, deleteItem, downloadItem } = props;
  const {
    id,
    name,
    image,
    totalPrice,
    vendorCode,
    isOrder,
    //------ основные данные
    params,
    otherParams,
    sizesOptions,
    colorsOptions,
    programsOptions,
    //------ параметры и опции
    count,
    maxCount,
    //------ количество
    status,
    comment,
    path,
    pathConfig,
    //------ другое
  } = data;
  return (
    <Tr>
      <NameTd
        path={path}
        pathConfig={pathConfig}
        image={image}
        name={name}
        isOrder={isOrder}
        vendorCode={vendorCode}
      />
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
        downloadItem={downloadItem}
        sizeId={params?.size?.id}
        sizesOptions={sizesOptions}
        colorId={params?.color?.id}
        colorsOptions={colorsOptions}
        programId={params?.program?.id}
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
