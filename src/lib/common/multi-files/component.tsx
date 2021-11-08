import React from 'react';
import styled from 'styled-components';
import { FileField } from '../../element/field';
import { FieldArray } from 'formik';
import { ButtonSecondary, IconButton } from '../../element/button';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { ReactComponent as RemoveIcon } from '../../../asset/svg/remove.svg';
import { MultiFilesProps } from './type';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TextSecondary } from 'src/lib/element/text';

export function MultiFilesBlock(props: MultiFilesProps) {
  const {
    values,
    filesName = '',
    fileName = '',
    handleBlur,
    handleChange,
  } = props;

  return (
    <SectionLayout type="SMALL">
      <Title tid="Файлы PDF" />
      <FieldArray name={filesName}>
        {({ remove, push }) => (
          <React.Fragment>
            <FieldLayout type="double" adaptive>
              {values.map((value: any, index: number) => {
                return (
                  <LineCase key={index}>
                    {value?.fileUrl ? (
                      <LinkButton href={value.fileUrl}>
                        <ButtonSecondary tid="Файл PDF" />
                      </LinkButton>
                    ) : (
                      <FileField
                        placeholderTid="PATTERNS.CREATE_ELECTRONIC.FORM.FIELDS.PLACEHOLDER.FILE_UPLOAD"
                        accept="application/pdf"
                        name={`${filesName}.${index}.${fileName}`}
                        value={value[fileName]}
                        onChange={handleChange(
                          `${filesName}.${index}.${fileName}`,
                        )}
                        onBlur={handleBlur}
                      />
                    )}
                    <IconButton onClick={() => remove(index)}>
                      <RemoveIcon />
                    </IconButton>
                  </LineCase>
                );
              })}
            </FieldLayout>
            <FieldLayout type="double" adaptive>
              <ButtonSecondary
                tid="Добавить PDF"
                onClick={() => push(initialFile)}
              />
            </FieldLayout>
          </React.Fragment>
        )}
      </FieldArray>
    </SectionLayout>
  );
}
const initialFile = {
  id: undefined,
  fileUrl: undefined,
  productFilePdf: undefined,
  optionFilePdf: undefined,
};
const LineCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;
const LinkButton = styled.a`
  width: 100%;
`;
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
