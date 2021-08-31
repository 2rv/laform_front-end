import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setLinkRedirect } from '../../../../main/navigation/navigation.core';
import { createArticleUploadData } from '../../create-article.action';
import { THEME_COLOR, spacing } from '../../../../lib/theme';
import { ButtonSecondary } from '../../../../lib/element/button';
import { TextareaField } from '../../../../lib/element/field';
import { MASTER_CLASSES_ROUTE_PATH } from '../../../master-classes';
import { FieldLayout } from '../../../../lib/element/layout';

import Editor from 'ckeditor5/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
const editorConfiguration = {
  toolbar: ['bold', 'italic'],
  plugins: [Bold],
};

function CreateArticleFieldComponent({ images, setImages }) {
  const dispatch = useDispatch();
  const [textareaValue, setTextareaValue] = React.useState('');

  const createArticleHandler = () => {
    if (!textareaValue.length) return;
    dispatch(createArticleUploadData(images, textareaValue));
  };

  return (
    <CKEditor
      editor={Editor}
      config={editorConfiguration}
      data="<p>Hello from CKEditor 5!</p>"
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
      }}
    />

    // <Layout>
    //   <TextareaField
    //     titleTid="Контент"
    //     placeholderTid="Описание процесса"
    //     name="content"
    //     value={textareaValue}
    //     onChange={({ target: { value } }) => setTextareaValue(value)}
    //     minHeight={190}
    //     maxHeight={230}
    //     isFile={true}
    //     images={images}
    //     setImages={setImages}
    //   />
    //   <FieldLayout type="double" adaptive>
    //     <Button
    //       tid="Создать"
    //       disabled={!textareaValue.length}
    //       onClick={createArticleHandler}
    //     />
    //     <Button
    //       tid="Отменить создание"
    //       altType={true}
    //       onClick={setLinkRedirect(MASTER_CLASSES_ROUTE_PATH)}
    //     />
    //   </FieldLayout>
    // </Layout>
  );
}

const Layout = styled.div`
  display: grid;
  gap: ${spacing(3)};
`;

const Button = styled(ButtonSecondary)`
  ${({ altType }) =>
    altType &&
    `
    background-color: ${THEME_COLOR.GRAY}
    color: ${THEME_COLOR.SECONDARY_DARK}
  `};
`;

export default CreateArticleFieldComponent;
