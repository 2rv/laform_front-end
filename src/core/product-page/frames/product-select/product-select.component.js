import styled from 'styled-components';
import { FieldSelect } from '../../../../lib/element/field';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';

export function ProductSelectComponent(props) {
  const {
    options,
    optionsKeys,
    optionsTitles,
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
      {optionsKeys.map((item, index) => {
        return (
          <Container>
            <Pair>
              <TextSecondary tid={optionsTitles[item]} />
              {item === 'size' && <CircleQuestion tid="?" />}
            </Pair>
            <FieldContainer>
              <FieldSelect
                key={index}
                options={options[item]}
                name={item}
                value={values[item]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FieldContainer>
          </Container>
        );
      })}
    </Form>
  );
}
const Pair = styled.div`
  display: flex;
  gap: ${spacing(1.2)};
`;
const FieldContainer = styled.div`
  width: 448px;
  margin-left: auto;
`;
const Form = styled.form`
  width: 100%;
  display: grid;
  gap: ${spacing(2)};
`;
const Container = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: center;
  width: 100%;
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
