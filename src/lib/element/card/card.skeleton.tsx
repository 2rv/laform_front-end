import styled, { keyframes } from 'styled-components';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { SectionLayout } from '../layout';

export function CardSkeleton() {
  return (
    <SectionLayout type="SMALL">
      <Image />
      <Title />
      <LineCase>
        <Price />
        <Complexity />
      </LineCase>
      <ActionCase>
        <Button />
        <LikeButton />
      </ActionCase>
    </SectionLayout>
  );
}
const animation = keyframes`
    0% {
      background-position: -600px;
    }
    100% {
      background-position: 600px;
    }
`;
const Image = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  min-width: 360px;
  background-color: #ccc;
  animation: ${animation} 1.6s infinite linear;
  width: 100%;
  height: 100%;
  min-height: 260px;
  max-height: 500px;
`;
const Title = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  min-width: 230px;
  max-width: 70%;
  height: 18px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  animation: ${animation} 1.6s infinite linear;
`;
const LineCase = styled.div`
  display: flex;
  max-width: 70%;
  column-gap: ${spacing(3)};
`;
const Price = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  width: 50%;
  height: 24px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  animation: ${animation} 1.6s infinite linear;
`;
const Complexity = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  width: 50%;
  height: 24px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  animation: ${animation} 1.6s infinite linear;
`;
const ActionCase = styled.div`
  display: flex;
  width: 100%;
  column-gap: ${spacing(3)};
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
