import styled from 'styled-components';
import { FieldSelect } from '../../lib/element/field';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { TextSecondary } from '../../lib/element/text';
import { ReactComponent as QuestionIcon } from '../../asset/svg/question-mark.svg';
import { IconButton } from '../../lib/element/button';
import { useEffect, useState } from 'react';

export function ProductSelect(props) {
  const { name, selectOptions, handleChange, isTooltip } = props;
  if (Boolean(selectOptions.length <= 0) || !selectOptions) return null;

  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value !== 0) {
      handleChange(selectOptions.find((i) => i.id === value));
    }
  }, [value]);
  const onChange = (event) => setValue(event.target.value);

  return (
    <Container>
      <Line>
        <TextSecondary tid={name} />
        {isTooltip && (
          <Button>
            <QuestionIcon />
          </Button>
        )}
      </Line>
      <FieldSelect options={selectOptions} value={value} onChange={onChange} />
    </Container>
  );
}

const Line = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
`;
const Container = styled.div`
  display: grid;
  gap: ${spacing(3)};
  align-items: center;
  grid-template-columns: 100px 1fr;
  width: 100%;
`;
const Button = styled(IconButton)`
  padding: 0;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  height: 25px;
  width: 25px;
`;
