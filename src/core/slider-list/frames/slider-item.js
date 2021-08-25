import styled from 'styled-components';
import { spacing } from '../../../lib/theme';
import { IconButton } from '../../../lib/element/button';
import { ReactComponent as EditIcon } from '../../../asset/svg/change-icon.svg';
import { ReactComponent as DeleteIcon } from '../../../asset/svg/cancel-delete-icon.svg';
import { Divider } from '../../../lib/element/divider';
import { TextPrimary } from '../../../lib/element/text';

export function SliderItem({ data, removeSlide, editSlide }) {
  const { image, id, name } = data;
  return (
    <Container>
      <Content>
        <Case>
          <Image src={image} />
          <TextPrimary tid={name} />
        </Case>
        <Case>
          <Button onClick={() => editSlide(id)}>
            <EditIcon />
          </Button>
          <Button onClick={() => removeSlide(id)}>
            <DeleteIcon />
          </Button>
        </Case>
      </Content>
      <Divider />
    </Container>
  );
}

const Image = styled.img`
  height: 75px;
  max-width: 75px;
  width: 75px;
`;
const Button = styled(IconButton)`
  padding: 0;
`;
const Case = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${spacing(3)};
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
