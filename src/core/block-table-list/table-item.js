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
  const { data, changeItem, deleteItem } = props;
  const {
    id,
    name,
    image,
    totalPrice,
    vendorCode,
    isOrder,
    //------
    params,
    otherParams,
    sizesOptions,
    colorsOptions,
    programsOptions,
    //------
    count,
    //------
    status,
    comment,
    path,
    pathConfig,
    filePDF,
    //------
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
      <CounterTd changeItem={changeItem} id={id} count={count} />
      <PriceTd isLast={status} totalPrice={totalPrice} />
      <StatusTd status={status} />
      <ButtonTd
        filePDF={filePDF}
        id={id}
        changeItem={changeItem}
        deleteItem={deleteItem}
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
  @media screen and (max-width: 875px) {
    display: flex;
    flex-direction: column;
    gap: ${spacing(3)};
  }
`;
