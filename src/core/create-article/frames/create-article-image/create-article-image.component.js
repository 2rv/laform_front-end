import styled from 'styled-components';
import { ReactComponent as Change } from '../../../../asset/svg/change-icon.svg';
import { ReactComponent as Cancel } from '../../../../asset/svg/cancel-delete-icon.svg';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../../lib/theme';
import { ButtonBasic } from '../../../../lib/element/button';

export function CreateArticleImageComponent({ image, removeImageHandler }) {
  return (
    <ImageContainer>
      <SlideImage src={image} />
      <FieldContainer>
        <Field>
          <File type="file" />
          <IconButton>
            <Change />
          </IconButton>
        </Field>
        <IconButton onClick={() => removeImageHandler(image)}>
          <Cancel />
        </IconButton>
      </FieldContainer>
    </ImageContainer>
  );
}
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 260px;
  width: 360px;
`;
const IconButton = styled(ButtonBasic)`
  padding: 0;
  width: 40px;
  height: 40px;
`;
const FieldContainer = styled.div`
  display: flex;
  position: absolute;
  gap: ${spacing(2)};
  left: ${spacing(2)};
  top: ${spacing(2)};
`;
const Field = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const File = styled.input`
  display: none;
`;
const SlideImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;
