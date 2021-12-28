import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { SectionLayout } from 'src/lib/element/layout';
import { CardListBlock } from 'src/lib/element/card-list';
import { BlockReactEditor } from 'src/lib/common/block-react-editor';
import { Divider } from 'src/lib/element/divider';
import { BlockProductSelect } from 'src/lib/common/block-select-options';
import {
  ProducName,
  ProductDescription,
  ProductCategories,
  ProductImages,
} from 'src/core/block-product-components';
import { BlockComment } from '../block-comment';
import { MasterClassProductComponentProps } from './master-class-product.type';
import { TabBlocks } from 'src/lib/element/tab-blocks';

export function MasterClassProductComponent(
  props: MasterClassProductComponentProps,
) {
  const {
    state: { pending, product },
  } = props;
  const {
    id,
    type,
    modifier,
    categories,
    discount,
    description,
    materials,
    images,
    recommendations,
    like,
    vendorCode,
    price,
    name,
  } = product;

  return (
    <SectionLayout type="MEDIUM">
      <SectionLayout>
        <Container>
          <ProductImages images={images} />
          <Content>
            <ProducName name={name} modifier={modifier} discount={!!discount} />
            <ProductCategories categories={categories} />
            <Divider />
            <ProductDescription description={description} />
            <BlockProductSelect
              id={id}
              type={type}
              like={like}
              vendorCode={vendorCode}
              price={price}
              discount={discount}
            />
          </Content>
        </Container>
      </SectionLayout>

      <TabBlocks tabItems={['Материалы', 'Рекомендации', 'Отзывы']}>
        {materials ? (
          <BlockReactEditor
            titleTid="PATTERNS.MATERIALS"
            data={materials}
            enableReInitialize
            readOnly
          />
        ) : (
          <div />
        )}
        <CardListBlock
          isLoading={pending}
          items={recommendations}
          title="MASTER_CLASSES.MASTER_CLASSES.RECOMMENDATIONS"
        />
        <BlockComment type={0} id={id} />
      </TabBlocks>
    </SectionLayout>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing(6)};
  @media screen and (max-width: 1070px) {
    display: flex;
    flex-direction: column;
    gap: ${spacing(3)};
  }
`;
const Content = styled.div`
  gap: ${spacing(3)};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 720px) {
    display: contents;
  }
`;
