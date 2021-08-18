import { createRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as ChangeIcon } from '../../../../asset/svg/change-icon.svg';
import { ReactComponent as RemoveIcon } from '../../../../asset/svg/remove.svg';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary } from '../../../../lib/element/title';
import { IconButton } from '../../../../lib/element/button';

export function CreateProductImageComponent(props) {
  const { pickImage, imagesData, deleteImage } = props;
  const fileRef = createRef();
  return (
    <SectionLayout type="SMALL">
      <Title tid="Фотографии товара" />
      <Container type="SMALL">
        {imagesData.map((image, index) => {
          return (
            <ImageContainer key={index}>
              <Image src={image} />
              <PositionContainer>
                <IconButton onClick={() => deleteImage(index)}>
                  <RemoveIcon />
                </IconButton>
              </PositionContainer>
            </ImageContainer>
          );
        })}
        <ImageContainer>
          <AddImage>
            <ChangeIcon />
            <File type="file" ref={fileRef} onChange={pickImage} />
            <Text tid="Добавить фото" />
          </AddImage>
        </ImageContainer>
      </Container>
    </SectionLayout>
  );
}

const Text = styled(TextSecondary)`
  color: ${THEME_COLOR.SECONDARY_DARK};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const AddImage = styled.label`
  display: flex;
  width: 100%;
  height: 100%;
  gap: ${spacing(2)};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const File = styled.input`
  display: none;
`;
const Container = styled(SectionLayout)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1170px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const ImageContainer = styled.div`
  background-color: ${THEME_COLOR.GRAY};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 274px;
`;
const PositionContainer = styled.div`
  display: flex;
  position: absolute;
  gap: ${spacing(2)};
  left: ${spacing(2)};
  top: ${spacing(2)};
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
