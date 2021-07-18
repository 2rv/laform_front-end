import { THEME_SIZE } from 'src/lib/theme';
import styled, { keyframes } from 'styled-components';
import { ListSkeletonPropsType } from './type.skeleton';
export function SliderSkeleton(props: ListSkeletonPropsType) {
  return <Skeleton className={props.className} />;
}

const skeletonAnimation = keyframes`
    0% {
      background-position: 0px;
    }
    100% {
      background-position: 2000px;
    }
`;

const Skeleton = styled.div`
  width: 100%;
  height: 350px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 40px);
  background-size: 2000px;
  animation: ${skeletonAnimation} 1.6s infinite linear;
`;
