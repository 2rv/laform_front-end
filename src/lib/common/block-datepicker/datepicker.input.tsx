import { forwardRef } from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { ButtonBasic } from 'src/lib/element/button';

export const DatepickerInput = forwardRef<HTMLInputElement>(
  (props: any, ref) => {
    const { onClick, onFocus, ...resProps } = props;
    return (
      <Container>
        <Input {...resProps} ref={ref} />
        <Button tid="Выбрать" onClick={onClick} />
      </Container>
    );
  },
);

const Input = styled.input`
  padding: 0 ${spacing(3)};
  height: 46px;
  display: flex;
  width: 100%;
  background: ${THEME_COLOR.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing(3)};
`;
const Button = styled(ButtonBasic)`
  width: auto;
`;
