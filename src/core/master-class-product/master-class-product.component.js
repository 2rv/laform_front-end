import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { TitlePrimary } from '../../lib/element/title';
import { CardListBlock } from '../../lib/element/card-list';
import { BlockComment } from '../block-comment';
import { GalleryBlock } from '../block-gallery';
import { ProductMainContainer } from './frames';

export function MasterClassProductComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    //------------
    productInfo,
    setValueSelectOption,
  } = props;
  const {
    id,
    name,
    description,
    modifier,
    discount,
    type,
    comment,
    images,
    categories,
    programs,
  } = productInfo;

  return (
    <SectionLayout type="MEDIUM">
      <SectionLayout>
        <TextSecondary>{`Главная / Мастер-классы / ${name}`}</TextSecondary>
        <Content>
          <GalleryBlock items={images} />
          <ProductMainContainer
            id={id}
            name={name}
            description={description}
            modifier={modifier}
            discount={discount}
            type={type}
            comment={comment}
            images={images}
            categories={categories}
            programs={programs}
            setValueSelectOption={setValueSelectOption}
          />
        </Content>
      </SectionLayout>
      {/* <CardListBlock title="Рекомендации" cardType="sewing-goods" items={[]} /> */}
      <BlockComment type={type} id={id} />
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
