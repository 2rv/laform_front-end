import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { LinkPrimary } from 'src/lib/element/link';
import { TitlePrimary } from 'src/lib/element/title';
import { SEWING_GOODS_ROUTE_PATH } from 'src/core/sewing-goods';
import { MASTER_CLASSES_ROUTE_PATH } from 'src/core/master-classes';
import { PATTERNS_ROUTE_PATH } from 'src/core/patterns';

const catalogListItems = [
  {
    title: 'HOME.CATALOG_LIST.E_PATTERNS.TITLE',
    description: 'HOME.CATALOG_LIST.E_PATTERNS.DESCRIPTION',
    image: '/static/image/catalog-image-1.jpg',
    path: PATTERNS_ROUTE_PATH,
    pathConfig: { params: { type: 'electronic' } },
  },
  {
    title: 'HOME.CATALOG_LIST.PRINTED_PATTERNS.TITLE',
    description: 'HOME.CATALOG_LIST.PRINTED_PATTERNS.DESCRIPTION',
    image: '/static/image/catalog-image-2.jpg',
    path: PATTERNS_ROUTE_PATH,
    pathConfig: { params: { type: 'printed' } },
  },
  {
    title: 'HOME.CATALOG_LIST.MASTER_CLASSES.TITLE',
    description: 'HOME.CATALOG_LIST.MASTER_CLASSES.DESCRIPTION',
    image: '/static/image/catalog-image-3.jpg',
    path: MASTER_CLASSES_ROUTE_PATH,
  },
  {
    title: 'HOME.CATALOG_LIST.SEEWING_GOODS.TITLE',
    description: 'HOME.CATALOG_LIST.MASTER_CLASSES.DESCRIPTION',
    image: '/static/image/catalog-image-4.jpg',
    path: SEWING_GOODS_ROUTE_PATH,
  },
];

export function CatalogListComponent() {
  return (
    <Container>
      {catalogListItems.map((data, index) => {
        const { title, description, image, path, pathConfig } = data;
        return (
          <ContainerItem path={path} pathConfig={pathConfig} key={index}>
            <BackgroundImage src={image} />
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
  @media only screen and (max-width: 1070px) {
    grid-template-columns: 1fr 1fr;
    gap: ${spacing(3)};
  }
  @media only screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    gap: ${spacing(2)};
  }
`;
const ContainerItem = styled(LinkPrimary)`
  display: grid;
  position: relative;
  height: 270px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
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
