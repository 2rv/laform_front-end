import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { text } from '../../common/text';
import { TextSecondary } from '../text';
import { ErrorField } from '../error';
import { TextAreaPropsType } from './field.type';
import { ReactComponent as FileIcon } from '../../../asset/svg/file.svg';
import { AutoSize } from './autosize';

export function TextareaField(props: TextAreaPropsType) {
  const {
    titleTid,
    placeholderTid,
    onChange,
    onBlur,
    name,
    error,
    rows = 1,
    children,
    isFile,
    minHeight = 46,
    maxHeight,
    images = null,
    setImages = null,
    ...restProps
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

  const handleChange = (event: any) => {
    AutoSize(event, minHeight);
    onChange && onChange(event);
  };
  return (
    <Container>
      {titleTid && <Title tid={titleTid} />}
      <RelativeCase maxHeight={maxHeight}>
        <Textarea
          {...restProps}
          onChange={handleChange}
          placeholder={text(placeholderTid)}
          onBlur={onBlur}
          name={name}
          rows={rows}
          isError={!!error}
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
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${spacing(1)};
`;
const RelativeCase = styled.div<any>`
  display: flex;
  max-height: ${(p) => (p.maxHeight ? `${p.maxHeight}px` : 'auto')};
  position: relative;
  width: 100%;
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
  max-height: inherit;
  padding: ${spacing(2)} ${spacing(7)} ${spacing(2)} ${spacing(3)};
  width: 100%;
  overflow-y: auto;
  resize: none;
  line-height: 1.5;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.SECONDARY_DARK};
  ::placeholder {
    color: ${THEME_COLOR.TEXT.LIGHT};
  }
  background: ${(p) => (p.isError ? THEME_COLOR.WHITE : THEME_COLOR.GRAY)};
  border: 1px solid;
  border-color: ${(p) => (p.isError ? THEME_COLOR.TEXT.DANGER : 'transparent')};
  &:focus {
    border-color: #b5b5b5;
    opacity: 1;
  }
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
`;
