import { createRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as ChangeIcon } from '../../../../asset/svg/change-icon.svg';
import { ReactComponent as Cancel } from '../../../../asset/svg/cancel-delete-icon.svg';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../../lib/theme';
import { ContentLayout, IndentLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary } from '../../../../lib/element/title';
import { LinkPrimary } from '../../../../lib/element/link';
import { ButtonBasic } from '../../../../lib/element/button';

export function CreateProductImageComponent(props) {
  const { items } = props;
  const fileRef = createRef();
  return (
    <IndentLayout type="small">
      <Title tid="Фото" />
      <Container type="small">
        {items.map(({ backgroundImage }) => {
          return (
            <ImageContainer>
              <Image src={backgroundImage} />
              <PositionContainer>
                <IconButton2 icon={ChangeIcon} />
                <IconButton icon={Cancel} />
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
    </IndentLayout>
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
const Container = styled(IndentLayout)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
const IconButton2 = styled(ButtonBasic)`
  padding: 9.5px;
  width: 40px;
  height: 40px;
`;
const IconButton = styled(ButtonBasic)`
  padding: 0;
  width: 40px;
  height: 40px;
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
