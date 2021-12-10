import { Field } from 'formik';
import styled, { css } from 'styled-components';
import { THEME_COLOR, THEME_SIZE, spacing } from 'src/lib/theme';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonSecondary } from 'src/lib/element/button';
import { BasicField, FieldCheckbox, FieldSelect } from 'src/lib/element/field';
import { ErrorAlert } from 'src/lib/element/alert';
import { SLIDER_EDIT_FIELD_NAME } from '../../slider-edit.type';
import { SLIDER_COLORS } from 'src/lib/basic-types';

export function SliderEditFormComponent(props) {
  const {
    removeSlider,
    formik: {
      values,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      touched,
      setFieldValue,
      isValid,
    },
    isPending,
    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
    isImageUploadError,
  } = props;
  const getFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };
  return (
    <form onSubmit={handleSubmit}>
      <SectionLayout type="SMALL">
        <Title tid="SLIDER.EDIT_SLIDER.EDIT" />
        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.TEXT"
            placeholderTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.PLACEHOLDER.TEXT"
            name={SLIDER_EDIT_FIELD_NAME.TITLE_TEXT}
            value={values[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getFieldError(SLIDER_EDIT_FIELD_NAME.TITLE_TEXT)}
          />
          <FieldSelect
            titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.TEXT_COLOR"
            name={SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR}
            options={SLIDER_COLORS.map((color, id) => ({ id, tid: color }))}
            value={values[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>
        <FieldLayout type="double">
          <FieldCheckbox
            titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.BUTTON"
            labelTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.PLACEHOLDER.BUTTON"
            name={SLIDER_EDIT_FIELD_NAME.IS_BUTTON}
            checked={values[SLIDER_EDIT_FIELD_NAME.IS_BUTTON]}
            onClick={() =>
              setFieldValue(
                SLIDER_EDIT_FIELD_NAME.IS_BUTTON,
                !values[SLIDER_EDIT_FIELD_NAME.IS_BUTTON],
              )
            }
          />
          {values[SLIDER_EDIT_FIELD_NAME.IS_BUTTON] && (
            <>
              <BasicField
                titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.BUTTON_TEXT"
                placeholderTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.PLACEHOLDER.BUTTON_TEXT"
                name={SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT}
                value={values[SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getFieldError(SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT)}
              />
              <FieldSelect
                titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.BUTTON_COLOR"
                name={SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR}
                options={SLIDER_COLORS.map((color, id) => ({ id, tid: color }))}
                value={values[SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FieldSelect
                titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.BUTTON_TEXT_COLOR"
                name={SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR}
                options={SLIDER_COLORS.map((color, id) => ({ id, tid: color }))}
                value={values[SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </>
          )}
        </FieldLayout>
        {values[SLIDER_EDIT_FIELD_NAME.IS_BUTTON] && (
          <BasicField
            titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.BUTTON_LINK"
            placeholderTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.PLACEHOLDER.BUTTON_LINK"
            name={SLIDER_EDIT_FIELD_NAME.BUTTON_PATH}
            value={values[SLIDER_EDIT_FIELD_NAME.BUTTON_PATH]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getFieldError(SLIDER_EDIT_FIELD_NAME.BUTTON_PATH)}
          />
        )}
        <FieldLayout type="double" adaptive>
          <Button
            tid="SLIDER.EDIT_SLIDER.FORM.BUTTON.SAVE"
            type="submit"
            disabled={!isValid}
          />
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
