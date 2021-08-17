import { createRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as ChangeIcon } from '../../../../asset/svg/change-icon.svg';
import { ReactComponent as Cancel } from '../../../../asset/svg/cancel-delete-icon.svg';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary } from '../../../../lib/element/title';
import { IconButton } from '../../../../lib/element/button';

export function CreateProductImageComponent(props) {
  const { items } = props;
  const fileRef = createRef();
  return (
    <SectionLayout type="SMALL">
      <Title tid="Фото" />
      <Container type="SMALL">
        {items.map(({ backgroundImage }, index) => {
          return (
            <ImageContainer key={index}>
              <Image src={backgroundImage} />
              <PositionContainer>
                <Button>
                  <ChangeIcon />
                </Button>
                <Button>
                  <Cancel />
                </Button>
              </PositionContainer>
            </ImageContainer>
          );
        })}
        <ImageContainer>
          <AddImage>
            <ChangeIcon />
            <File type="file" ref={fileRef} />
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 274px;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
`;
const Button = styled(IconButton)`
  padding: 0;
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
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
