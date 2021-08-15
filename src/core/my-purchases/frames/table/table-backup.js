import styled from 'styled-components';
import { TextSecondary, TextPrimary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { IconButton } from '../../../../lib/element/button';
import { Divider } from '../../../../lib/element/divider';
import { SectionLayout } from '../../../../lib/element/layout';

const testOptions = [
  { name: 'Цвет', value: 'Зелёный' },
  { name: 'Размер', value: '15/70 250' },
  { name: 'Категория', value: 'Верхняя одежда' },
  { name: 'Количество', value: 1 },
];
export function TableComponent(props) {
  const { listItems = [] } = props;
  return (
    <table>
      <col />
      <col />
      <col />
      <col />
      <col />
      <col />
      <tr>
        <Td>
          <TextPrimary tid="Название" />
        </Td>
        <Td>
          <Case>
            <TextPrimary tid="Подробности" />
          </Case>
        </Td>
        <Td>
          <Case>
            <TextPrimary tid="Цена товара" />
          </Case>
        </Td>
        <Td>
          <Case>
            <TextPrimary tid="Состояние" />
          </Case>
        </Td>
        <Td>
          <ActionBlock>
            <ActionPlug />
            <ActionPlug />
          </ActionBlock>
        </Td>
      </tr>
      <Td colSpan="6">
        <DividerTable />
      </Td>
      {[0, 1, 2, 3, 4].map((item, index) => {
        return (
          <>
            <tr key={index}>
              <Td>
                <NameBlock>
                  <Image src="https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png" />
                  <TextPrimary tid="Товары для шитья" />
                </NameBlock>
              </Td>
              <Td>
                <Case>
                  <Contructor items={testOptions} />
                </Case>
              </Td>
              <Td>
                <Line>
                  <div>
                    <Price tid="320000" />
                    &nbsp;
                    <Valute tid="руб." />
                  </div>
                </Line>
              </Td>
              <Td>
                <Case>
                  <ColoredText tid="Доставленно" />
                </Case>
              </Td>
              <Td>
                <ActionBlock>
                  <IconButton />
                  <IconButton />
                </ActionBlock>
              </Td>
            </tr>
            <Td colSpan="6">
              <DividerTable />
            </Td>
          </>
        );
      })}
    </table>
  );
}

const DividerTable = styled(Divider)`
  margin: ${spacing(3)} 0;
`;
const Td = styled.td`
  vertical-align: middle;
`;
const ActionPlug = styled.div`
  width: 46px;
`;
const ActionBlock = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;
const NameBlock = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
  line-height: 1.5;
  min-width: max-content;
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
