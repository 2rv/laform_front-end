import styled from 'styled-components';
import { FieldSelect } from '../../../../lib/element/field';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { TextPrimary, TextSecondary } from '../../../../lib/element/text';
import { FieldLayout } from '../../../../lib/element/layout';

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
    <form onSubmit={handleSubmit}>
      <FieldLayout>
        {optionsKeys.map((item, index) => {
          return (
            <Container key={index}>
              <Pair>
                <TextSecondary tid={optionsTitles[item]} />
                {item === 'size' && <CircleQuestion tid="?" />}
              </Pair>
              <FieldSelect
                options={options[item]}
                name={item}
                value={values[item]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Container>
          );
        })}
      </FieldLayout>
    </form>
  );
}
const Pair = styled.div`
  display: flex;
  gap: ${spacing(1.2)};
`;
const Container = styled.div`
  display: grid;
  gap: ${spacing(3)};
  align-items: center;
  grid-template-columns: 100px 1fr;
  width: 100%;
`;
const CircleQuestion = styled(TextPrimary)`
  width: 18px;
  height: 18px;
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${THEME_COLOR.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
