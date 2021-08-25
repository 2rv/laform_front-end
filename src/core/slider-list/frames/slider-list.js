import styled from 'styled-components';
import { spacing } from '../../../lib/theme';
import { SliderItem } from './slider-item';

export function SliderList(props) {
  const { slidersItems, removeSlide, editSlide } = props;
  return (
    <Container>
      {slidersItems.map((data) => (
        <SliderItem
          key={data.id}
          data={data}
          removeSlide={removeSlide}
          editSlide={editSlide}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
