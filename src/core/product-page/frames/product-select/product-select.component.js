import styled from 'styled-components';
import { FieldSelect } from '../../../../lib/element/field';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';

export function ProductSelectComponent(props) {
  const {
    optionItem,

    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,

    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
  } = props;

  return (
    <Form onSubmit={handleSubmit}>
      {optionItem.map(({ id, title, type, items, fieldName }, index) => (
        <Container key={id || index}>
          <Pair>
            <TextSecondary tid={title} />
            {type === 'size' && <CircleQuestion tid="?" />}
          </Pair>
          <FieldContainer>
            <FieldSelect
              options={items}
              name={fieldName}
              value={values[fieldName]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FieldContainer>
        </Container>
      ))}
    </Form>
  );
}
const Pair = styled.div`
  display: flex;
  gap: ${spacing(1.2)};
`;
const Form = styled.form`
  display: grid;
  gap: ${spacing(2)};
`;
const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, auto);
`;
const FieldContainer = styled.div`
  width: 448px;
  margin-left: auto;
`;
const CircleQuestion = styled(TextSecondary)`
  font-size: 12px;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  color: ${THEME_COLOR.SECONDARY_DARK};
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
