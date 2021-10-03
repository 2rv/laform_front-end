import styled, { keyframes } from 'styled-components';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { ProductCartSkeletonPropsType } from './type.skeleton';
import { SectionLayout } from '../layout';

export function ProductCartSkeleton(props: ProductCartSkeletonPropsType) {
  const { quantity = 9 } = props;
  return (
    <SkeletonContainer>
      {[...Array(quantity).keys()].map((_, i) => (
        <SectionLayout type="SMALL" key={i}>
          <Image />
          <LineTitle />
          <Container>
            <LinePrice />
            <LineComplexity />
          </Container>
          <ButtonGroupContainer>
            <Button />
            <LikeButton />
          </ButtonGroupContainer>
        </SectionLayout>
      ))}
    </SkeletonContainer>
  );
}

const SkeletonContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing(6)};
  @media screen and (max-width: 1070px) {
    gap: ${spacing(3)};
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 720px) {
    gap: ${spacing(3)};
    grid-template-columns: repeat(1, 1fr);
  }
`;

const animation = keyframes`
    0% {
      background-position: -600px;
    }
    100% {
      background-position: 600px;
    }
`;

const Container = styled.div`
  display: flex;
  max-width: 70%;
  column-gap: ${spacing(3)};
`;

const Image = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  min-width: 360px;
  height: 260px;
  background-color: #ccc;
  animation: ${animation} 1.6s infinite linear;
`;

const LineTitle = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  min-width: 230px;
  max-width: 70%;
  height: 18px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  animation: ${animation} 1.6s infinite linear;
`;

const LinePrice = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  width: 50%;
  height: 24px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  animation: ${animation} 1.6s infinite linear;
`;

const LineComplexity = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  width: 50%;
  height: 24px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  animation: ${animation} 1.6s infinite linear;
`;

const Button = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  width: 85%;
  height: 46px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  animation: ${animation} 1.6s infinite linear;
`;

const LikeButton = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  width: 15%;
  height: 46px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  animation: ${animation} 1.6s infinite linear;
`;

const ButtonGroupContainer = styled.div`
  display: flex;
  width: 100%;
  column-gap: ${spacing(3)};
`;
