import styled from 'styled-components';
import { FieldArray } from 'formik';
import { ChangeEvent } from 'react';
import { FileField } from 'src/lib/element/field';
import { ButtonSecondary, IconButton } from 'src/lib/element/button';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TextSecondary } from 'src/lib/element/text';
import { SelectFileItemProps, SelectFilesListProps } from './select-files.type';

export function SelectFilesList(props: SelectFilesListProps) {
  const { files = [], name = 'files', setFieldValue } = props;
  return (
    <FieldArray name={name}>
      {({ remove, push }) => (
        <SectionLayout type="SMALL">
          <Title tid="Файлы PDF" />
          <FieldLayout type="double" adaptive>
            {files.map((file, index) => (
              <SelectFileItem
                key={index}
                index={index}
                file={file}
                name={`${name}.${index}`}
                setFieldValue={setFieldValue}
                remove={remove}
              />
            ))}
          </FieldLayout>

          <FieldLayout type="double" adaptive>
            <ButtonSecondary tid="Добавить PDF" onClick={() => push({})} />
          </FieldLayout>
        </SectionLayout>
      )}
    </FieldArray>
  );
}
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

function SelectFileItem(props: SelectFileItemProps) {
  const { index, file, name, setFieldValue, remove } = props;
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setFieldValue(name, { file: file, fileUrl: '' });
  }
  function onRemove() {
    remove(index);
  }

  return (
    <LineCase>
      {file.fileUrl ? (
        <LinkButton href={file.fileUrl}>
          <ButtonSecondary
            tid={file.fileUrl?.split('com/')?.[1] || 'Файл PDF'}
          />
        </LinkButton>
      ) : (
        <FileField
          placeholderTid="PATTERNS.CREATE_ELECTRONIC.FORM.FIELDS.PLACEHOLDER.FILE_UPLOAD"
          accept="application/pdf"
          name={name}
          file={file}
          onChange={onChange}
        />
      )}
      <IconButton onClick={onRemove}>
        <RemoveIcon />
      </IconButton>
    </LineCase>
  );
}
const LineCase = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: ${spacing(3)};
`;
const LinkButton = styled.a`
  width: 100%;
`;
