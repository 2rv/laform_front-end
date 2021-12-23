import styled from 'styled-components';
import { THEME_SIZE } from 'src/lib/theme';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonBasic, ButtonSecondary } from 'src/lib/element/button';
import {
  BasicField,
  ColorPickerField,
  FieldCheckbox,
} from 'src/lib/element/field';
import { SlideEditFormProps, SLIDER_EDIT_FIELD_NAME } from './slider-edit.type';
import { ErrorAlert, InfoAlert, SuccessAlert } from 'src/lib/element/alert';

export function SlideEditForm(props: SlideEditFormProps) {
  const {
    formik: {
      values,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      touched,
      setFieldValue,
    },
    state: {
      createPending,
      createSuccess,
      createError,
      getPending,
      getError,
      removePending,
      removeSuccess,
      removeError,
      updatePending,
      updateSuccess,
      updateError,
    },
    onRemove,
  } = props;
  function getFieldError(name: SLIDER_EDIT_FIELD_NAME): any {
    return errors[name] && touched[name] && errors[name];
  }

  const isPending =
    createPending || getPending || removePending || updatePending;
  const isError = createError || getError || removeError || updateError;

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
          <ColorPickerField
            titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.TEXT_COLOR"
            onChange={handleChange}
            setFieldValue={setFieldValue}
            name={SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR}
            error={getFieldError(SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR)}
            value={values[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR]}
          />
          <FieldCheckbox
            titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.BUTTON"
            labelTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.PLACEHOLDER.BUTTON"
            name={SLIDER_EDIT_FIELD_NAME.IS_BUTTON}
            checked={values[SLIDER_EDIT_FIELD_NAME.IS_BUTTON]}
            onChange={handleChange}
            onBlur={handleBlur}
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
              <ColorPickerField
                titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.BUTTON_COLOR"
                error={getFieldError(SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR)}
                onChange={handleChange}
                setFieldValue={setFieldValue}
                name={SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR}
                value={values[SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR]}
              />
              <ColorPickerField
                titleTid="SLIDER.EDIT_SLIDER.FORM.FIELDS.TITLE.BUTTON_TEXT_COLOR"
                error={getFieldError(SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR)}
                onChange={handleChange}
                setFieldValue={setFieldValue}
                name={SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR}
                value={values[SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR]}
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
          <ButtonSecondary
            tid="SLIDER.EDIT_SLIDER.FORM.BUTTON.SAVE"
            type="submit"
            disabled={isPending}
          />
          <ButtonBasic
            tid="SLIDER.EDIT_SLIDER.FORM.BUTTON.DELETE_SLIDE"
            disabled={isPending}
            onClick={onRemove}
          />
        </FieldLayout>

        {createSuccess && <SuccessAlert tid="Слайд успешно создан" />}
        {removeSuccess && <SuccessAlert tid="Слайд успешно удален" />}
        {updateSuccess && <SuccessAlert tid="Слайд успешно обновлен" />}
        {(createPending || updatePending) && (
          <InfoAlert tid="Идёт сохранение, подождите" />
        )}
        {removePending && <InfoAlert tid="Идёт удаление, подождите" />}
        {isError && <ErrorAlert tid={isError} />}
      </SectionLayout>
    </form>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
