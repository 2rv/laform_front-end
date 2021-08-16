import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setLinkRedirect } from '../../../../main/navigation/navigation.core';
import { createArticleUploadData } from '../../create-article.action';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../../lib/theme';
import { IndentLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonSecondary } from '../../../../lib/element/button';
import { TextareaField } from '../../../../lib/element/field';
import { CreateArticleFieldItemComponent } from './create-article-field-item.component';
import { MASTER_CLASSES_ROUTE_PATH } from '../../../master-classes';;

export function CreateArticleFieldComponent({
  handleChange,
  handleBlur,
  errors,
  values,
  handleSubmit,
  fieldsData,
  imageUrls,
  setImageUrls,
}) {
  const dispatch = useDispatch();
  const [ textareaValue, setTextareaValue ] = React.useState('');

  return (
    <Layout>
      {/* <IndentLayout type="small">
        <Title tid="Описание" />
        <FieldContainer>
          {fieldsData.description.map(
            ({ type, title, fullWidth, name, options }, index) => {
              return (
                <CreateArticleFieldItemComponent
                  key={name || index}
                  type={type}
                  title={title}
                  options={options}
                  fullWidth={fullWidth}
                  name={name}
                  value={values[name]}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                />
              );
            },
          )}
        </FieldContainer>
      </IndentLayout>
      <IndentLayout type="small">
        <Title tid="Цена" />
        <FieldContainer>
          {fieldsData.price.map(
            ({ type, title, name, fullWidth, options }, index) => {
              return (
                <CreateArticleFieldItemComponent
                  key={name || index}
                  type={type}
                  title={title}
                  options={options}
                  fullWidth={fullWidth}
                  name={name}
                  value={values[name]}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                />
              );
            },
          )}
        </FieldContainer>
      </IndentLayout>
      <IndentLayout type="small">
        <Title tid="Контент" />
        <FieldContainer>
          {fieldsData.content.map(
            ({ type, title, fullWidth, name, options }, index) => {
              return (
                <CreateArticleFieldItemComponent
                  key={name || index}
                  type={type}
                  title={title}
                  options={options}
                  name={name}
                  fullWidth={fullWidth}
                  value={values[name]}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                />
              );
            },
          )}
        </FieldContainer>
      </IndentLayout> */}
      <TextareaField
        titleTid="Контент"
        placeholderTid="Описание процесса"
        name="content"
        value={textareaValue}
        onChange={({ target: { value } }) => setTextareaValue(value)}
        rows={8}
        isFile={true}
        imageUrls={imageUrls}
        setImageUrls={setImageUrls}
      />
      <FieldContainer>
        <Button tid="Создать" onClick={() => dispatch(createArticleUploadData(imageUrls, textareaValue))} />
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

// const Title = styled(TitlePrimary)`
//   font-size: ${THEME_SIZE.FONT.MEDIUM};
// `;
