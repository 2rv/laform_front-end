import styled from 'styled-components';
import { ReactComponent as ChangeIcon } from 'src/asset/svg/change.svg';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { spacing } from 'src/lib/theme';
import { IconButton } from 'src/lib/element/button';
import { Divider } from 'src/lib/element/divider';
import { TextPrimary } from 'src/lib/element/text';

export function SliderItem(props) {
  const { index, data, removeSlide, editSlide } = props;
  return (
    <Container>
      <Content>
        <Case>
          <Image src={data.image} />
          <TextPrimary tid={data.name} />
        </Case>
        <Case>
          <Button onClick={() => editSlide(data.id)}>
            <ChangeIcon />
          </Button>
          <Button onClick={() => removeSlide(index, data.id)}>
            <RemoveIcon />
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
