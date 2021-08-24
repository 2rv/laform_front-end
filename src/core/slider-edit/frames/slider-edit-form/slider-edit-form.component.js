import styled, { css } from 'styled-components';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../../lib/theme';
import { FieldLayout, SectionLayout } from '../../../../lib/element/layout';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonSecondary } from '../../../../lib/element/button';
import {
  BasicField,
  FieldCheckbox,
  FieldSelect,
} from '../../../../lib/element/field';
import { TextSecondary } from '../../../../lib/element/text';
import { SLIDER_EDIT_FIELD_NAME } from '../../slider-edit.type';

export function SliderEditFormComponent(props) {
  const {
    titleTextColorOptions,
    buttonColorOptions,
    buttonTextColorOptions,

    formikObject,

    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
  } = props;
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    setFieldValue,
  } = formikObject;

  const titleTextFieldName = SLIDER_EDIT_FIELD_NAME.TITLE_TEXT;
  const titleTextColorSelectName = SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR;
  const buttonTextFieldName = SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT;
  const buttonTextColorSelectName = SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR;
  const buttonColorSelectName = SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR;
  const isButtonCheckboxName = SLIDER_EDIT_FIELD_NAME.IS_BUTTON;
  const buttonPathFieldName = SLIDER_EDIT_FIELD_NAME.BUTTON_PATH;

  const getFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  return (
    <SectionLayout as="form" type="SMALL" onSubmit={handleSubmit}>
      <Title tid="Редактирование" />
      <FieldLayout type="double" adaptive>
        <BasicField
          titleTid="Основной текст баннера"
          placeholderTid="Текст на баннере"
          name={titleTextFieldName}
          value={values[titleTextFieldName]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(titleTextFieldName)}
        />
        <FieldSelect
          titleTid="Цвет текста на баннере"
          name={titleTextColorSelectName}
          options={titleTextColorOptions}
          value={values[titleTextColorSelectName]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldLayout>
      <FieldLayout type="double">
        <FieldCheckbox
          titleTid="Кнопка"
          name={isButtonCheckboxName}
          checked={values[isButtonCheckboxName]}
          onClick={() =>
            setFieldValue(isButtonCheckboxName, !values[isButtonCheckboxName])
          }
          labelTid="Будет ли кнопка на баннере?"
        />
        {values[isButtonCheckboxName] && (
          <>
            <BasicField
              titleTid="Текст на кнопке"
              placeholderTid="Текст на кнопке"
              name={buttonTextFieldName}
              value={values[buttonTextFieldName]}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getFieldError(buttonTextFieldName)}
            />
            <FieldSelect
              titleTid="Цвет кнопки"
              name={buttonColorSelectName}
              options={buttonColorOptions}
              value={values[buttonColorSelectName]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FieldSelect
              titleTid="Цвет текста на кнопке"
              name={buttonTextColorSelectName}
              options={buttonTextColorOptions}
              value={values[buttonTextColorSelectName]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </>
        )}
      </FieldLayout>
      {values[isButtonCheckboxName] && (
        <BasicField
          titleTid="Ссылка кнопки"
          placeholderTid="Введите ссылку на страницу"
          name={buttonPathFieldName}
          value={values[buttonPathFieldName]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(buttonPathFieldName)}
        />
      )}
      <FieldLayout type="double" adaptive>
        <Button tid="Сохранить" type="submit" />
        <Button altType={true} type="button" tid="Удалить слайд" />
      </FieldLayout>
    </SectionLayout>
  );
}

const Button = styled(ButtonSecondary)`
  ${({ altType }) =>
    altType &&
    css`
      background-color: ${THEME_COLOR.GRAY};
      color: ${THEME_COLOR.SECONDARY_DARK};
    `}
`;
const FieldTitle = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
