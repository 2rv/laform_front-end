import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { text } from '../../common/text';
import { TextSecondary } from '../text';
import { ErrorField } from '../error';
import { TextAreaPropsType } from './field.type';
import { ReactComponent as FileIcon } from '../../../asset/svg/file.svg';

export function TextareaField(props: TextAreaPropsType) {
  const {
    titleTid,
    placeholderTid,
    onChange,
    onBlur,
    name,
    rows = 1,
    error,
    children,
    isFile,
    minHeight = 56,
    images = null,
    setImages = null,
  } = props;

  const fileInputRef = React.createRef<any>();

  const fileToDataUri = (image: any) => {
    return new Promise((response) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        response(reader.result);
      });
      reader.readAsDataURL(image);
    });
  };

  const pickImage = async ({ target: { files } }: any) => {
    const newImagesPromises = [];

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] === 'image') {
        newImagesPromises.push(fileToDataUri(files[i]));
      } else {
        alert('Please select only images');
        return;
      }
    }

    const newImages = await Promise.all(newImagesPromises);
    setImages([...images, ...newImages]);
  };

  return (
    <Container>
      {titleTid && <TextSecondary tid={titleTid} />}
      <RelativeCase>
        <Textarea
          onChange={onChange}
          placeholder={text(placeholderTid)}
          onBlur={onBlur}
          name={name}
          isError={!!error}
          rows={rows}
          minHeight={minHeight}
        />
        {isFile && (
          <ActionCase>
            <File onClick={() => fileInputRef.current.click()} />
            <input
              type="file"
              ref={fileInputRef}
              onChange={pickImage}
              multiple
              hidden
            />
          </ActionCase>
        )}
        {children}
      </RelativeCase>
      {error && <ErrorField errorTid={error} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 56px;
  flex: 1;
  gap: ${spacing(1)};
`;

const RelativeCase = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const ActionCase = styled.div`
  position: absolute;
  display: flex;
  gap: ${spacing(2)};
  top: ${spacing(4)};
  right: ${spacing(4)};
  align-items: center;
`;

const File = styled(FileIcon)`
  cursor: pointer;
`;

const Textarea = styled.textarea<any>`
  min-height: ${(p) => p.minHeight}px;
  max-height: 200px;
  height: fit-content;
  flex-grow: 1;
  display: flex;
  line-height: 1.5;
  resize: none;
  padding: ${spacing(4)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.LIGHT};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  border: ${(p) =>
    p.isError
      ? `1px solid ${THEME_COLOR.TEXT.DANGER}`
      : '1px solid transparent'};
  background: ${(p) => (p.isError ? THEME_COLOR.WHITE : THEME_COLOR.GRAY)};
  &:focus {
    border: 1px solid #b5b5b5;
    opacity: 1;
  }
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
  overflow-y: auto;
`;
