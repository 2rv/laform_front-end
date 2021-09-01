import styled from 'styled-components';
import { TextSecondary, TextPrimary } from '../../lib/element/text';
import { spacing } from '../../lib/theme';

export function ParamsTd(props) {
  const { items } = props;
  return (
    <Td>
      <Case>
        {items.map(({ name, value }, i) => {
          return (
            <TextSecondary key={i}>
              <TextSecondary tid={name} />
              :&nbsp;
              <TextPrimary>
                <TextPrimary tid={value} />
                {i !== items.length - 1 && ','}
              </TextPrimary>
            </TextSecondary>
          );
        })}
      </Case>
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
  padding-right: ${spacing(5)};
  @media screen and (max-width: 875px) {
    padding-right: 0;
    margin-left: 90px;
    max-width: fit-content;
  }
`;
const Case = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${spacing(1)};
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
