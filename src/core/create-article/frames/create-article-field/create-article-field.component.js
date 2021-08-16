import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setLinkRedirect } from '../../../../main/navigation/navigation.core';
import { createArticleUploadData } from '../../create-article.action';
import { THEME_COLOR, spacing } from '../../../../lib/theme';
import { ButtonSecondary } from '../../../../lib/element/button';
import { TextareaField } from '../../../../lib/element/field';
import { MASTER_CLASSES_ROUTE_PATH } from '../../../master-classes';;

export function CreateArticleFieldComponent({ images, setImages }) {
  const dispatch = useDispatch();
  const [ textareaValue, setTextareaValue ] = React.useState('');

  return (
    <Layout>
      <TextareaField
        titleTid="Контент"
        placeholderTid="Описание процесса"
        name="content"
        value={textareaValue}
        onChange={({ target: { value } }) => setTextareaValue(value)}
        rows={8}
        isFile={true}
        images={images}
        setImages={setImages}
      />
      <FieldContainer>
        <Button tid="Создать" onClick={() => dispatch(createArticleUploadData(images, textareaValue))} />
        <Button tid="Отменить создание" altType={true} onClick={setLinkRedirect(MASTER_CLASSES_ROUTE_PATH)}  />
      </FieldContainer>
    </Layout>
  );
}

const Layout = styled.div`
  display: grid;
  gap: ${spacing(3)}
`;

const FieldContainer = styled.div`
  display: grid;
  gap: ${spacing(3)};
  grid-template-columns: repeat(2, 1fr);
`;

const Button = styled(ButtonSecondary)`
  ${({ altType }) => altType && `
    background-color: ${THEME_COLOR.GRAY}
    color: ${THEME_COLOR.SECONDARY_DARK}
  `};
`;
