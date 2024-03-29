import styled from 'styled-components';
import { THEME_COLOR, spacing, THEME_SIZE } from '../../theme';
import { ButtonBasic } from '../button';
import { EnumeratorCountProps } from './enumerator.type';
import { BasicField } from '../field';
import { SyntheticEvent } from 'react';
import { TextSecondary } from '../text';

export function EnumeratorCount(props: EnumeratorCountProps) {
  const {
    titleTid,
    count,
    onChange,
    minNumber = 1,
    maxNumber = Infinity,
  } = props;

  const increment = () => {
    onChange(count + 1);
  };
  const dicrement = () => {
    if (count > minNumber) onChange(count - 1);
  };
  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const result: number = parseInt(value);
    onChange(result);
  };

  return (
    <Container>
      {titleTid && <Title tid={titleTid} />}
      <Content>
        <Button
          disabled={Number(count) >= Number(maxNumber)}
          tid="+"
          onClick={increment}
        />
        <Field
          value={count}
          placeholderTid="Количество ед."
          type="number"
          onChange={handleChange}
        />
        <Button
          disabled={Number(count) <= Number(minNumber)}
          tid="-"
          onClick={dicrement}
        />
      </Content>
    </Container>
  );
}
const Field = styled(BasicField)`
  padding: 0;
  min-width: 46px;
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
`;
const Button = styled(ButtonBasic)`
  color: ${THEME_COLOR.TEXT.LIGHT};
  width: 46px;
`;
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
