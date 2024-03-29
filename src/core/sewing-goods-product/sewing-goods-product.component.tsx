import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { SectionLayout } from 'src/lib/element/layout';
import { CardListBlock } from 'src/lib/element/card-list';
import { Divider } from 'src/lib/element/divider';
import { TabBlocks } from 'src/lib/element/tab-blocks';
import { BlockProductSelect } from 'src/lib/common/block-select-options';
import { BlockComment } from 'src/lib/common/block-comment';
import {
  ProducName,
  ProductDescription,
  ProductCategories,
  ProductImages,
} from '../block-product-components';
import { SewingGoodsProductComponentProps } from './sewing-goods-product.type';

export function SewingGoodsProductComponent(
  props: SewingGoodsProductComponentProps,
) {
  const {
    state: { pending, product },
  } = props;

  const {
    id,
    isCount,
    isLength,
    optionType,
    modifier,
    categories,
    discount,
    description,
    images,
    recommendations,
    like,
    vendorCode,
    price,
    count,
    sizes,
    options,
    colors,
    length,
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
          <ProductDescription description={description} />
          <Divider />
          <BlockProductSelect
            id={id}
            type={3}
            isCount={isCount}
            isLength={isLength}
            optionType={optionType}
            like={like}
            vendorCode={vendorCode}
            price={price}
            discount={discount}
            count={count}
            sizes={sizes}
            options={options}
            colors={colors}
            length={length}
          />
        </Content>
      </Container>
      <TabBlocks tabItems={['Рекомендации', 'Отзывы']}>
        <CardListBlock
          title="SEWING_GOODS.RECOMMENDATIONS"
          isLoading={pending}
          items={recommendations}
          emptyText="Рекомендации отсутствуют"
        />
        <BlockComment id={id} type={3} />
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
