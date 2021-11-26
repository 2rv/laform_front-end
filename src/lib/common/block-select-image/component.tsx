import styled from 'styled-components';
import { FieldArray } from 'formik';
import { ReactComponent as ImageIcon } from '../../../asset/svg/image.svg';
import { ReactComponent as RemoveIcon } from '../../../asset/svg/remove.svg';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../theme';
import { SectionLayout } from '../../element/layout';
import { TextSecondary } from '../../element/text';
import { TitlePrimary } from '../../element/title';
import { IconButton } from '../../element/button';
import { ErrorField } from '../../element/error';
import { SelectImageComponentProps } from './type';

export function SelectImageComponent(props: SelectImageComponentProps) {
  const {
    titleTid,
    maxImages,
    values,
    error,
    handleAdd,
    handleUpdate,
    arrayName,
  } = props;

  return (
    <SectionLayout type="SMALL">
      <Title tid={titleTid} />
      <FieldArray name={arrayName}>
        {({ remove, push }) => (
          <Container type="SMALL">
            {values.map((item: any, index: number) => {
              return (
                <ImageContainer key={index}>
                  <Image src={item.fileUrl} />
                  <PositionContainer>
                    <Button>
                      <Icon />
                      <File
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleUpdate(e, index)}
                      />
                    </Button>
                    <IconButton onClick={() => remove(index)}>
                      <RemoveIcon />
                    </IconButton>
                  </PositionContainer>
                </ImageContainer>
              );
            })}
            {values.length !== maxImages && (
              <ImageContainer>
                <AddImage>
                  <Icon />
                  <File
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleAdd(e, push)}
                  />
                  <Text tid="PRODUCT_IMAGES.ADD_PHOTO" />
                </AddImage>
              </ImageContainer>
            )}
          </Container>
        )}
      </FieldArray>
      {error && <ErrorField errorTid={error} />}
    </SectionLayout>
  );
}
const Icon = styled(ImageIcon)`
  width: 20px;
  height: 20px;
`;
const Button = styled.label`
  display: flex;
  width: 46px;
  min-width: 46px;
  height: 46px;
  justify-content: center;
  align-items: center;
  background-color: ${THEME_COLOR.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  cursor: pointer;
`;
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
  background-color: ${THEME_COLOR.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const File = styled.input`
  display: none;
`;
const Container = styled(SectionLayout)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1070px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
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
