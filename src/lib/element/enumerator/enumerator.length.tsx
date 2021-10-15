import styled from 'styled-components';
import { THEME_COLOR, spacing, THEME_SIZE } from '../../theme';
import { ButtonBasic } from '../button';
import { EnumeratorLengthProps } from './enumerator.type';
import { BasicField } from '../field';
import { SyntheticEvent } from 'react';
import { TextSecondary } from '../text';
// import { numberTwoDigit } from 'src/lib/common/create-product-validation';

export function EnumeratorLength(props: EnumeratorLengthProps) {
  const { length = 0, onChange, minLength = 0.1, maxLength = Infinity } = props;

  const increment = () => {
    onChange((Number(length) + 0.1).toFixed(2));
  };
  const dicrement = () => {
    if (length > minLength) onChange((Number(length) - 0.1).toFixed(2));
  };
  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    // const value = numberTwoDigit(e);
    // if (Math.floor(length * 100) <= Math.floor(minLength * 100))
    //   return onChange(minLength);
    // if (Math.floor(length * 100) >= Math.floor(maxLength * 100))
    //   return onChange(maxLength);
    onChange(value);
  };

  return (
    <Container>
      <Title tid="Длинна" />
      <Content>
        <Button
          disabled={Math.floor(length * 100) === Math.floor(maxLength * 100)}
          tid="+"
          onClick={increment}
        />
        <BasicField
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
