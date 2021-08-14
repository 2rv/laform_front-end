import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { TitlePrimary } from '../../lib/element/title';
import { GalleryBlock } from '../block-gallery';
import { ProductMainContainer } from './frames';
import { TextBlock } from '../block-text';

export function PatternsPageComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    currentPageData,
  } = props;
  const { materials, images, ...productMainData } = currentPageData;
  return (
    <SectionLayout type="MEDIUM">
      <Content>
        <GalleryBlock items={images} />
        <ProductMainContainer data={productMainData} />
      </Content>
      {materials && (
        <SectionLayout type="TEXT">
          <TitlePrimary tid={'Материалы'} />
          <TextBlock text={materials} />
        </SectionLayout>
      )}
    </SectionLayout>
  );
}

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing(6)};
`;
