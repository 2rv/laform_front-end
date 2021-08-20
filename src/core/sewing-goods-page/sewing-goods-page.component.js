import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { TitlePrimary } from '../../lib/element/title';
import { GalleryBlock } from '../block-gallery';
import { ProductMainContainer } from './frames';

export function SewingGoodsPageComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    currentPageData,
  } = props;
  const { images, ...productMainData } = currentPageData;
  return (
    <SectionLayout type="MEDIUM">
      <Content>
        <GalleryBlock items={images} />
        <ProductMainContainer data={productMainData} />
      </Content>
    </SectionLayout>
  );
}

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing(6)};
  @media screen and (max-width: 1070px) {
    display: flex;
    flex-direction: column;
    gap: ${spacing(3)};
  }
`;
