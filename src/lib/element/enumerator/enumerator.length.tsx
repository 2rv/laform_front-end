import styled from 'styled-components';
import { THEME_COLOR, spacing, THEME_SIZE } from '../../theme';
import { ButtonBasic } from '../button';
import { EnumeratorLengthProps } from './enumerator.type';
import { BasicField } from '../field';
import { SyntheticEvent } from 'react';
import { TextSecondary } from '../text';

export function EnumeratorLength(props: EnumeratorLengthProps) {
  const {
    titleTid,
    length = 0,
    onChange,
    minLength = 0,
    maxLength = Infinity,
  } = props;

  const increment = () => {
    if (
      length === '' ||
      length === null ||
      length === undefined ||
      isNaN(Number(length))
    ) {
      return onChange(0.1);
    }
    const result: number = parseFloat(String(length)) + 0.1;
    onChange(result.toFixed(2));
  };
  const dicrement = () => {
    if (length > minLength) {
      const result: number = parseFloat(String(length)) - 0.1;
      onChange(result.toFixed(2));
    }
  };
  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const value: any = e.currentTarget.value;
    if (value === '' || value === null || value === undefined) {
      return onChange(value);
    }
    const result: number = parseInt(String(value * 100)) / 100;
    onChange(result);
  };

  return (
    <Container>
      {titleTid && <Title tid={titleTid} />}
      <Content>
        <Button
          disabled={Math.floor(length * 100) === Math.floor(maxLength * 100)}
          tid="+"
          onClick={increment}
        />
        <Field
          value={length}
          placeholderTid="Длинна метров"
          type="number"
          onChange={handleChange}
        />
        <Button
          disabled={Math.floor(length * 100) === Math.floor(minLength * 100)}
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
