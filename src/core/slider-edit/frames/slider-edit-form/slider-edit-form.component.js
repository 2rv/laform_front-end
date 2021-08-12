import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, spacing } from 'src/lib/theme';
import { IndentLayout } from 'src/lib/element/layout';
import { TextSecondary } from 'src/lib/element/text';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonSecondary } from 'src/lib/element/button';
import { SliderEditFormItemComponent } from './slider-edit-form-item.component';

export function SliderEditFormComponent(props) {
  const {
    slideFieldsData,

    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,

    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
  } = props;

  return (
    <IndentLayout as="form" type="small" onSubmit={handleSubmit}>
      <PreviewTitle tid="Редактирование" />
      <FieldContainer>
        {slideFieldsData.map(({ type, title, name, options }) => {
          return (
            <SliderEditFormItemComponent
              type={type}
              title={title}
              options={options}
              name={name}
              value={values[name]}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
            />
          );
        })}
        <ButtonContainer>
          <Button tid="Сохранить" type="submit" />
          <Button altType={true} tid="Удалить слайд" />
        </ButtonContainer>
      </FieldContainer>
    </IndentLayout>
  );
}
const Button = styled(ButtonSecondary)`
  ${({ altType }) =>
    altType &&
    `background-color: ${THEME_COLOR.BACKGROUND.GRAY}
	color: ${THEME_COLOR.SECONDARY_DARK}
	`}
`;
const FieldContainer = styled.div`
  display: grid;
  gap: ${spacing(3)};
  grid-template-columns: repeat(2, 1fr);
`;
const ButtonContainer = styled(FieldContainer)`
  grid-row-end: 5;
`;
const PreviewTitle = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
