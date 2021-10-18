import styled from 'styled-components';
import { FieldSelect } from '../../element/field';
import { spacing, THEME_SIZE } from '../../theme';
import { TextSecondary } from '../../element/text';
import { ReactComponent as QuestionIcon } from '../../../asset/svg/question-mark.svg';
import { IconButton } from '../../element/button';
import { ProductSelectFieldProps } from './type';

export function ProductSelect(props: ProductSelectFieldProps) {
  const {
    titleTid,
    defaultTid,
    name,
    options,
    value,
    onChange,
    onBlur,
    isSize,
  } = props;
  return (
    <Container>
      <Line>
        <TextSecondary tid={titleTid} />
        {isSize && (
          <Button>
            <QuestionIcon />
          </Button>
        )}
      </Line>
      <FieldSelect
        defaultTid={defaultTid}
        name={name}
        options={options}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
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
  grid-template-columns: 150px 1fr;
  width: 100%;
  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: ${spacing(2)};
  }
`;
const Button = styled(IconButton)`
  padding: 0;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  height: 25px;
  width: 25px;
`;
