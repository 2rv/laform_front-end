import styled from 'styled-components';
import { spacing } from '../../theme';
import { SliderSkeleton } from './slider.skeleton';
import { ListSkeletonPropsType } from './type.skeleton';

export function HomeListSkeleton(props: ListSkeletonPropsType) {
  return (
    <Container className={props.className}>
      <SliderSkeleton />
      <SliderSkeleton />
      <SliderSkeleton />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing(6)};
`;
