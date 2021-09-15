import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
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
          <TitlePrimary tid={'PATTERNS.CREATE.FORM.COMPLEXITY'} />
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
  @media screen and (max-width: 1070px) {
    display: flex;
    flex-direction: column;
    gap: ${spacing(3)};
  }
`;
