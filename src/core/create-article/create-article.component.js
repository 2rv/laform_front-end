import React from 'react';
import styled from 'styled-components';
import { SectionLayout } from '../../lib/element/layout';
import {
  CreateArticleImageComponent,
  CreateArticleFormContainer,
  CreateArticleFieldComponent,
} from './frames';
import { TitlePrimary } from '../../lib/element/title';

export function CreateArticleComponent(props) {
  const { fieldsData } = props;
  const [ imageUrls, setImageUrls ] = React.useState([]);

  const removeImageHandler = (clickedImageUrl) => {
    setImageUrls(imageUrls.filter((imageUrl) => imageUrl !== clickedImageUrl));
  }

  return (
    <SectionLayout>
      <TitlePrimary tid="Создание мастер-класса" />
      <Images>
        {imageUrls?.map((image, index) => (
          <CreateArticleImageComponent key={index} image={image} removeImageHandler={removeImageHandler} />
        ))}
      </Images>
      <CreateArticleFieldComponent
        fieldsData={fieldsData}
        imageUrls={imageUrls}
        setImageUrls={setImageUrls}
      />
      {/* <CreateArticleFormContainer fieldsData={fieldsData}>
        {(formProps) => (
          <CreateArticleFieldComponent
            {...formProps}
            fieldsData={fieldsData}
            imageUrls={imageUrls}
            setImageUrls={setImageUrls}
          />
        )}
      </CreateArticleFormContainer> */}
    </SectionLayout>
  );
}

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
