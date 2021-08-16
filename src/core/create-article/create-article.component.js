import React from 'react';
import styled from 'styled-components';
import { SectionLayout } from '../../lib/element/layout';
import { CreateArticleImageComponent, CreateArticleFieldComponent } from './frames';
import { TitlePrimary } from '../../lib/element/title';

export function CreateArticleComponent(props) {
  const { fieldsData } = props;
  const [ images, setImages ] = React.useState([]);

  const removeImageHandler = (clickedImage) => {
    setImages(images.filter((image) => image !== clickedImage));
  }

  return (
    <SectionLayout>
      <TitlePrimary tid="Создание мастер-класса" />
      <Images>
        {images?.map((image, index) => (
          <CreateArticleImageComponent key={index} image={image} removeImageHandler={removeImageHandler} />
        ))}
      </Images>
      <CreateArticleFieldComponent
        fieldsData={fieldsData}
        images={images}
        setImages={setImages}
      />
    </SectionLayout>
  );
}

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
