import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { SectionLayout } from 'src/lib/element/layout';
import { CardListBlock } from 'src/lib/element/card-list';
import { BlockComment } from '../block-comment';
import { Divider } from 'src/lib/element/divider';
import {
  ProducName,
  ProductDescription,
  ProductCategories,
  ProductImages,
  ProductMaterials,
} from 'src/core/block-product-components';
import { BlockProductSelect } from 'src/lib/common/block-select-options';
import { ComplexityDots } from 'src/lib/element/card';
import { TabBlocks } from 'src/lib/element/tab-blocks';
import { PatternsProductComponentProps } from './patterns-product.type';

export function PatternsProductComponent(props: PatternsProductComponentProps) {
  const {
    state: { pending, product },
  } = props;
  const {
    id,
    type,
    isCount,
    optionType,
    modifier,
    complexity,
    categories,
    discount,
    description,
    descriptionOld,
    materials,
    materialOld,
    images,
    recommendations,
    like,
    vendorCode,
    price,
    count,
    sizes,
    name,
  } = product;
  return (
    <SectionLayout type="MEDIUM">
      <Container>
        <ProductImages images={images} />
        <Content>
          <ProducName name={name} modifier={modifier} discount={!!discount} />
          <ProductCategories categories={categories} />
          <Divider />
          <ComplexityDots
            complexity={complexity}
            title="PATTERNS.CREATE.FORM.COMPLEXITY"
          />
          <Divider />
          <ProductDescription
            description={description}
            descriptionOld={descriptionOld}
          />
          <Divider />
          <BlockProductSelect
            id={id}
            type={3}
            isCount={isCount}
            optionType={optionType}
            like={like}
            vendorCode={vendorCode}
            price={price}
            discount={discount}
            count={count}
            sizes={sizes}
          />
        </Content>
      </Container>

      <TabBlocks tabItems={['Материалы', 'Рекомендации', 'Отзывы']}>
        <ProductMaterials
          data={materials}
          oldData={materialOld}
          pending={pending}
          titleTid="PATTERNS.MATERIALS"
        />
        <CardListBlock
          isLoading={pending}
          items={recommendations}
          title="PATTERNS.RECOMMENDATIONS"
        />
        <BlockComment type={type} id={id} />
      </TabBlocks>
    </SectionLayout>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
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
