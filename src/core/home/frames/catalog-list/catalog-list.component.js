import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';
import { LinkPrimary } from '../../../../lib/element/link';
import { TitlePrimary } from '../../../../lib/element/title';

export function CatalogListComponent(props) {
  const { items } = props;
  return (
    <Container>
      {items.map((data, index) => {
        const { title, description, backgroundImage, path } = data;
        return (
          <ContainerItem path={path} key={index}>
            <BackgroundImage src={backgroundImage} />
            <Content>
              <TitleText tid={title} />
              <DescriptionText tid={description} />
            </Content>
          </ContainerItem>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  gap: ${spacing(6)};
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(1, 262.5px); */
  @media only screen and (max-width: 1070px) {
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: repeat(2, 170px); */
    gap: ${spacing(3)};
  }
  @media only screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    /* grid-template-rows: repeat(4, minmax(160px, fit-content)); */
    gap: ${spacing(2)};
  }
`;
const ContainerItem = styled(LinkPrimary)`
  display: grid;
  position: relative;
  height: 270px;
  @media only screen and (max-width: 1070px) {
    height: 290px;
  }
  @media only screen and (max-width: 720px) {
    height: 290px;
  }
`;
const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Content = styled.div`
  padding: ${spacing(6)};
  display: flex;
  flex: 1;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing(3)};
  background-color: rgba(47, 42, 44, 0.75);
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const TitleText = styled(TitlePrimary)`
  color: ${THEME_COLOR.WHITE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  line-height: 1.5;
`;
const DescriptionText = styled(TextSecondary)`
  color: ${THEME_COLOR.LIGHT_GRAY};
  line-height: 1.5;
`;
