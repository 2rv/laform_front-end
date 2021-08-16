import styled from 'styled-components';
import { TextSecondary, TextPrimary } from '../../lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';

export function TableItem(props) {
  const { children, data } = props;
  const { name, price, image, params, otherParams, status, id } = data;
  return (
    <tr>
      <Td>
        <NameBlock>
          <Image src={image} />
          <TextPrimary tid={name} />
        </NameBlock>
      </Td>
      {params && (
        <Td>
          <Case>
            <Contructor items={params} />
          </Case>
        </Td>
      )}
      {otherParams && (
        <Td>
          <Case>
            <Contructor items={otherParams} />
          </Case>
        </Td>
      )}
      {price && (
        <Td>
          <Line>
            <div>
              <Price tid={price} />
              &nbsp;
              <Valute tid="руб." />
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
        <ActionBlock>{children(id)}</ActionBlock>
      </Td>
    </tr>
  );
}
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
  align-items: center;
  margin: 0 30px;
`;
const Image = styled.img`
  width: 75px;
  height: 75px;
  min-width: 75px;
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
