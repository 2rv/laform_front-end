import React from 'react';
import styled from 'styled-components';
import { FileField } from '../../element/field';
import { FieldArray } from 'formik';
import { ButtonSecondary, IconButton } from '../../element/button';
import { spacing } from 'src/lib/theme';
import { ReactComponent as RemoveIcon } from '../../../asset/svg/remove.svg';
import { MultiFilesProps } from './type';
import { LinkSecondary } from 'src/lib/element/link';

export function MultiFilesBlock(props: MultiFilesProps) {
  const {
    values,
    filesName = '',
    fileName = '',
    handleBlur,
    handleChange,
  } = props;

  return (
    <FieldArray name={filesName}>
      {({ remove, push }) => (
        <React.Fragment>
          {values.map((value: any, index: number) => {
            return (
              <LineCase key={index}>
                {value?.fileUrl ? (
                  <LinkButton path={value.fileUrl}>
                    <ButtonSecondary tid="Файл PDF" />
                  </LinkButton>
                ) : (
                  <FileField
                    placeholderTid="PATTERNS.CREATE_ELECTRONIC.FORM.FIELDS.PLACEHOLDER.FILE_UPLOAD"
                    accept="application/pdf"
                    name={`${filesName}.${index}.${fileName}`}
                    value={value[fileName]}
                    onChange={handleChange(`${filesName}.${index}.${fileName}`)}
                    onBlur={handleBlur}
                  />
                )}
                <IconButton onClick={() => remove(index)}>
                  <RemoveIcon />
                </IconButton>
              </LineCase>
            );
          })}
          <ButtonSecondary tid="Добавить" onClick={() => push(initialFile)} />
        </React.Fragment>
      )}
    </FieldArray>
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
const LinkButton = styled(LinkSecondary)`
  width: 100%;
`;
