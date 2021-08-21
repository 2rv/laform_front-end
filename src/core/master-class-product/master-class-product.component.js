import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { TitlePrimary } from '../../lib/element/title';
import { CardListBlock } from '../../lib/element/card-list';
import { BlockComments } from '../block-comments/comments-block';
import { GalleryBlock } from '../block-gallery';
import { ProductMainContainer } from './frames';

export function MasterClassProductComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    listItems,
    comments,
    currentProductData,
    setValueSelectOption,
  } = props;
  const { images, ...productMainData } = currentProductData;
  return (
    <SectionLayout type="MEDIUM">
      <SectionLayout>
        <TextSecondary>Главная / Выкройки / Пальто 0105 ЦК-рукав</TextSecondary>
        <Content>
          <GalleryBlock items={images} />
          <ProductMainContainer
            data={productMainData}
            setValueSelectOption={setValueSelectOption}
          />
        </Content>
      </SectionLayout>
      <CardListBlock
        title="Рекомендации"
        cardType="sewing-goods"
        items={listItems}
      />
      <BlockComments items={comments} />
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
