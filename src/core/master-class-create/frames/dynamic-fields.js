import styled from 'styled-components';
import { Field, FieldArray } from 'formik';
import { spacing, THEME_SIZE } from '../../../lib/theme';
import {
  ButtonBasic,
  ButtonSecondary,
  IconButton,
} from '../../../lib/element/button';
import { BasicField, FieldSelect } from '../../../lib/element/field';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { ReactComponent as RemoveIcon } from '../../../asset/svg/remove.svg';
import { TitlePrimary } from '../../../lib/element/title';
import { numberValue } from '../../../lib/common/create-product-helpers';
import { CREATE_MASTER_CLASS_FIELD_NAME } from '../master-class-create.type';
import { ReactEditor } from '../../block-react-editor';

export function DynamicFields(props) {
  const {
    initialData,
    errors,
    touched,
    setFieldValue,
    values,
    handleChange,
    handleBlur,
  } = props;
  const fieldArrayName = CREATE_MASTER_CLASS_FIELD_NAME.PROGRAMS;
  const setNumber = (name, index) => (e) =>
    setFieldValue(`${fieldArrayName}.${index}.${name}`, numberValue(e));

  const getFieldError = (name, index) =>
    errors?.[fieldArrayName]?.[index]?.[name] &&
    touched?.[fieldArrayName]?.[index]?.[name] &&
    errors?.[fieldArrayName]?.[index]?.[name];

  const setEditorData = (name, index) => (editorData) =>
    setFieldValue(`${fieldArrayName}.${index}.${name}`, editorData);

  return (
    <SectionLayout type="SMALL">
      <Title tid="Программы" />

      <FieldArray name={fieldArrayName}>
        {({ remove, push }) => (
          <SectionLayout type="SMALL">
            {values[fieldArrayName].map((value, index) => (
              <Container key={index}>
                <FieldLayout type="double" adaptive>
                  <BasicField
                    name={`${fieldArrayName}.${index}.${CREATE_MASTER_CLASS_FIELD_NAME.PROGRAM_NAME}`}
                    titleTid="Название программы"
                    placeholderTid="Введите название программы"
                    error={getFieldError(
                      CREATE_MASTER_CLASS_FIELD_NAME.PROGRAM_NAME,
                      index,
                    )}
                    value={value[CREATE_MASTER_CLASS_FIELD_NAME.PROGRAM_NAME]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched}
                  />
                  <Case>
                    <BasicField
                      name={`${fieldArrayName}.${index}.${CREATE_MASTER_CLASS_FIELD_NAME.PROGRAM_PRICE}`}
                      titleTid="Цена"
                      placeholderTid="Введите цену (в руб.)"
                      error={getFieldError(
                        CREATE_MASTER_CLASS_FIELD_NAME.PROGRAM_PRICE,
                        index,
                      )}
                      value={
                        value[CREATE_MASTER_CLASS_FIELD_NAME.PROGRAM_PRICE]
                      }
                      onChange={setNumber(
                        CREATE_MASTER_CLASS_FIELD_NAME.PROGRAM_PRICE,
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
                  </Case>
                </FieldLayout>

                <Title tid="Статья мастер-класса" />
                <ReactEditor
                  handleChange={setEditorData(
                    CREATE_MASTER_CLASS_FIELD_NAME.MASTER_CLASS,
                    index,
                  )}
                  values={value[CREATE_MASTER_CLASS_FIELD_NAME.MASTER_CLASS]}
                  name={`${fieldArrayName}.${index}.${CREATE_MASTER_CLASS_FIELD_NAME.MASTER_CLASS}`}
                />
              </Container>
            ))}
            <ButtonSecondary
              tid="Добавить программу"
              onClick={() => push(initialData)}
            />
          </SectionLayout>
        )}
      </FieldArray>
    </SectionLayout>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: ${spacing(2)};
`;
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Case = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
const Button = styled(IconButton)`
  margin-top: ${spacing(4)};
`;
