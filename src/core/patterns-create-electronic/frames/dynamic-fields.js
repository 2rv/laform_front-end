import styled from 'styled-components';
import { Field, FieldArray } from 'formik';
import { spacing, THEME_SIZE } from '../../../lib/theme';
import {
  ButtonBasic,
  ButtonSecondary,
  IconButton,
} from '../../../lib/element/button';
import { BasicField, FieldSelect, FileField } from '../../../lib/element/field';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { ReactComponent as RemoveIcon } from '../../../asset/svg/remove.svg';
import { TitlePrimary } from '../../../lib/element/title';
import { numberValue } from '../../../lib/common/create-product-helpers';
import { ELECTRONIC_PATTERN_FIELD_NAME } from '../patterns-create-electronic.type';

export function DynamicFields(props) {
  const {
    initialData,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setFieldValue,
  } = props;

  const fieldArrayName = ELECTRONIC_PATTERN_FIELD_NAME.SIZES;

  const setNumber = (name, index) => (e) =>
    setFieldValue(`${fieldArrayName}.${index}.${name}`, numberValue(e));

  const getFieldError = (name, index) =>
    errors?.[fieldArrayName]?.[index]?.[name] &&
    touched?.[fieldArrayName]?.[index]?.[name] &&
    errors?.[fieldArrayName]?.[index]?.[name];

  const setPdfFile = (name, index) => (event) => {
    const file = event.currentTarget?.files?.[0];
    if (!file || file.type.split('/')[1] !== 'pdf') {
      alert('PATTERNS.CREATE_ELECTRONIC.FORM.NEED_PDF');
      setFieldValue(`${fieldArrayName}.${index}.${name}`, null);
    } else setFieldValue(`${fieldArrayName}.${index}.${name}`, file);
  };

  return (
    <SectionLayout type="SMALL">
      <Title tid="DYNAMIC_FIELDS.SIZE.TITLE" />
      <FieldArray name={fieldArrayName}>
        {({ remove, push }) => (
          <SectionLayout type="SMALL">
            {values[fieldArrayName].map((value, index) => (
              <FieldLayout type="double" adaptive key={index}>
                <BasicField
                  name={`${fieldArrayName}.${index}.${ELECTRONIC_PATTERN_FIELD_NAME.SIZE_NAME}`}
                  titleTid="DYNAMIC_FIELDS.SIZE.FIELD_TITLE"
                  placeholderTid="DYNAMIC_FIELDS.SIZE.FIELD_PLACEHOLDER"
                  error={getFieldError(
                    ELECTRONIC_PATTERN_FIELD_NAME.SIZE_NAME,
                    index,
                  )}
                  value={value[ELECTRONIC_PATTERN_FIELD_NAME.SIZE_NAME]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched}
                />
                <Line>
                  <BasicField
                    name={`${fieldArrayName}.${index}.${ELECTRONIC_PATTERN_FIELD_NAME.SIZE_PRICE}`}
                    titleTid="DYNAMIC_FIELDS.PRICE.TITLE"
                    placeholderTid="DYNAMIC_FIELDS.PRICE.PLACEHOLDER"
                    error={getFieldError(
                      ELECTRONIC_PATTERN_FIELD_NAME.SIZE_PRICE,
                      index,
                    )}
                    value={value[ELECTRONIC_PATTERN_FIELD_NAME.SIZE_PRICE]}
                    onChange={setNumber(
                      ELECTRONIC_PATTERN_FIELD_NAME.SIZE_PRICE,
                      index,
                    )}
                    onBlur={handleBlur}
                    touched={touched}
                  />
                  {values[fieldArrayName].length !== 1 && (
                    <Button onClick={() => remove(index)}>
                      <RemoveIcon />
                    </Button>
                  )}
                </Line>

                <FileField
                  titleTid="PATTERNS.CREATE_ELECTRONIC.FORM.FIELDS.TITLE.FILE_UPLOAD"
                  placeholderTid="PATTERNS.CREATE_ELECTRONIC.FORM.FIELDS.PLACEHOLDER.FILE_UPLOAD"
                  accept="application/pdf"
                  name={`${fieldArrayName}.${index}.${ELECTRONIC_PATTERN_FIELD_NAME.FILE}`}
                  value={value[ELECTRONIC_PATTERN_FIELD_NAME.FILE]}
                  error={getFieldError(
                    ELECTRONIC_PATTERN_FIELD_NAME.FILE,
                    index,
                  )}
                  onChange={setPdfFile(
                    ELECTRONIC_PATTERN_FIELD_NAME.FILE,
                    index,
                  )}
                  onBlur={handleBlur}
                />
              </FieldLayout>
            ))}
            <ButtonSecondary
              tid="DYNAMIC_FIELDS.SIZE.BUTTON_TEXT"
              onClick={() => push(initialData)}
            />
          </SectionLayout>
        )}
      </FieldArray>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Line = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
const Button = styled(IconButton)`
  margin-top: 19px;
`;
