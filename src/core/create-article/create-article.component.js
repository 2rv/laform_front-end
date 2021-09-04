import React from 'react';
import styled from 'styled-components';
import { SectionLayout, FieldLayout } from '../../lib/element/layout';
import {
  CreateArticleImageComponent,
  CreateArticleFieldComponent,
} from './frames';
import { TitlePrimary } from '../../lib/element/title';
import { TextPrimary } from '../../lib/element/text';
import { spacing, THEME_SIZE, THEME_COLOR } from 'src/lib/theme';
import { ButtonSecondary } from '../../lib/element/button';

export function CreateArticleComponent(props) {
  const { fieldsData, children, disabled } = props;
  const [images, setImages] = React.useState([]);

  const removeImageHandler = (clickedImage) => {
    setImages(images.filter((image) => image !== clickedImage));
  };

  return (
    <SectionLayout>
      <TitlePrimary tid="Создание мастер-класса" />
      <Images>
        {images?.map((image, index) => (
          <CreateArticleImageComponent
            key={index}
            image={image}
            removeImageHandler={removeImageHandler}
          />
        ))}
      </Images>
      {/* <CreateArticleFieldComponent
          fieldsData={fieldsData}
          images={images}
          setImages={setImages}
        /> */}
      <SectionLayout type="SMALL">
        <FormSubheading tid="Контент" />
        {children ? children : null}
      </SectionLayout>
      <FieldLayout type="double" adaptive>
        <Button
          tid="Создать"
          disabled={disabled}
          onClick={() => {
            console.log('СОЗДАТЬ');
          }}
        />
        {/* <Button
          tid="Отменить создание"
          altType={true}
          onClick={setLinkRedirect(MASTER_CLASSES_ROUTE_PATH)}
        /> */}
      </FieldLayout>
    </SectionLayout>
  );
}

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const EditorContainer = styled.div`
  padding: ${spacing(10)};
  background-color: grey;
`;

const FormSubheading = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;

const Button = styled(ButtonSecondary)`
  ${({ altType }) =>
    altType &&
    `
    background-color: ${THEME_COLOR.GRAY}
    color: ${THEME_COLOR.SECONDARY_DARK}
  `};
`;
