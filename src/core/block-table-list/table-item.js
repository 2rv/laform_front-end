import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { ActionTd } from './action-td';
import { CommentTd } from './comment-td';
import { CounterTd } from './counter-td';
import { NameTd } from './name-td';
import { ParamsTd } from './patams-td';
import { PriceTd } from './price-td';
import { StatusTd } from './status-td';

export function TableItem(props) {
  const { children, data, incrementCount, dicrementCoun, count } = props;
  const { name, price, image, params, otherParams, status, comment, id } = data;
  let countedPrice = price || null;
  if (count) countedPrice = count[id] * price;
  return (
    <Tr>
      <NameTd image={image} name={name} />
      {comment && <CommentTd text={comment?.text} />}
      {params && <ParamsTd items={params} />}
      {otherParams && <ParamsTd items={otherParams} />}
      {count && (
        <CounterTd
          id={id}
          incrementCount={incrementCount}
          dicrementCoun={dicrementCoun}
          count={count}
        />
      )}
      {countedPrice && <PriceTd countedPrice={countedPrice} isLast={status} />}
      {status && <StatusTd status={status} />}
      {children && <ActionTd id={id} children={children} />}
    </Tr>
  );
}
const Tr = styled.div`
  display: table-row;
  @media screen and (max-width: 875px) {
    display: flex;
    flex-direction: column;
    gap: ${spacing(3)};
  }
`;
