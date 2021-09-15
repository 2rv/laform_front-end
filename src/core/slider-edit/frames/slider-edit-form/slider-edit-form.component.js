import { Field } from 'formik';
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
import { ErrorAlert } from '../../../../lib/element/alert';
import { SLIDER_EDIT_FIELD_NAME } from '../../slider-edit.type';

export function SliderEditFormComponent(props) {
  const {
    titleTextColorOptions,
    buttonColorOptions,
    buttonTextColorOptions,

    removeSlider,
    formikObject,

    isPending,
    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
    isImageUploadError,
  } = props;
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    setFieldValue,
    isValid,
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

  const isSubmitDisabled = () => {
    return !isValid || !(values[titleTextFieldName] || values[buttonTextFieldName] || values[buttonPathFieldName])
  };

  return (
    <form onSubmit={handleSubmit}>
      <SectionLayout type="SMALL">
        <Title tid="SLIDER.EDIT_SLIDER.EDIT" />
        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.TEXT"
            placeholderTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.PLACEHOLDER.TEXT"
            name={titleTextFieldName}
            value={values[titleTextFieldName]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getFieldError(titleTextFieldName)}
          />
          <FieldSelect
            titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.TEXT_COLOR"
            name={titleTextColorSelectName}
            options={titleTextColorOptions}
            value={values[titleTextColorSelectName]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>
        <FieldLayout type="double">
          <FieldCheckbox
            titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.BUTTON"
            labelTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.PLACEHOLDER.BUTTON"
            name={isButtonCheckboxName}
            checked={values[isButtonCheckboxName]}
            onClick={() =>
              setFieldValue(isButtonCheckboxName, !values[isButtonCheckboxName])
            }
          />
          {values[isButtonCheckboxName] && (
            <>
              <BasicField
                titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.BUTTON_TEXT"
                placeholderTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.PLACEHOLDER.BUTTON_TEXT"
                name={buttonTextFieldName}
                value={values[buttonTextFieldName]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getFieldError(buttonTextFieldName)}
              />
              <FieldSelect
                titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.BUTTON_COLOR"
                name={buttonColorSelectName}
                options={buttonColorOptions}
                value={values[buttonColorSelectName]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FieldSelect
                titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.BUTTON_TEXT_COLOR"
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
            titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.BUTTON_LINK"
            placeholderTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.PLACEHOLDER.BUTTON_LINK"
            name={buttonPathFieldName}
            value={values[buttonPathFieldName]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getFieldError(buttonPathFieldName)}
          />
        )}
        <FieldLayout type="double" adaptive>
          <Button tid="SLIDER.EDIT_SLIDER.FORM.BUTTON.SAVE" type="submit" disabled={isSubmitDisabled()} />
          <Button
            altType={true}
            tid="SLIDER.EDIT_SLIDER.FORM.BUTTON.DELETE_SLIDE"
            disabled={isPending}
            onClick={removeSlider}
          />
        </FieldLayout>
        {isImageUploadError && <ErrorAlert tid={'PLEASE_UPLOAD_IMAGE'} />}
      </SectionLayout>
    </form>
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
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
