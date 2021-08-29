import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import { EditCompilationListComponent, SelectCompilationComponent } from './frames';
import { TitlePrimary } from '../../lib/element/title';
import { FieldSelect } from 'src/lib/element/field';
import { ModalPopup } from 'src/lib/element/modal';
import { LoaderPrimary } from 'src/lib/element/loader';
import { spacing } from 'src/lib/theme';

const PRODUCTS_TYPE = [
  { id: 0, tid: 'Товар' },
  { id: 1, tid: 'Мастер-класс' },
  { id: 2, tid: 'Полезную статью' },
];

export function EditCompilationComponent(props) {
  const {
    bestProducts,
    bestMasterClasses,
    bestArticles,
    products,
    fetchProductsToSelectBestCompilation,
    modalVisibilty,
    setModalVisibility,
    currentLang,
    pageLoading,
  } = props;

  console.log('products:', products);

  return (
    <>
      {pageLoading && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="ПОДБОРКИ" />
        <EditCompilationListComponent
          title="Лучшие товары"
          compilationName="post" // Изменить когда BE будет готов
          items={bestProducts}
          currentLang={currentLang}
        />
        <EditCompilationListComponent
          title="Лучшие мастер-классы"
          compilationName="master-class"
          items={bestMasterClasses}
          currentLang={currentLang}
        />
        <EditCompilationListComponent
          title="Лучшие полезные статьи"
          compilationName="post"
          items={bestArticles}
          currentLang={currentLang}
        />
        <FieldSelect
          titleTid="Добавить подборку"
          options={PRODUCTS_TYPE}
          onChange={fetchProductsToSelectBestCompilation}
        />
        <ModalPopup
          modalVisibilty={modalVisibilty}
          onClose={() => setModalVisibility(false)}
        >
          <ProductsContent>
            {products.map((product) => (
              <SelectCompilationComponent
                key={product.id}
                titleRu={product.titleRu}
                image={(product.images ? product.images[0] : product.imageUrl)?.fileUrl} />
            ))}
          </ProductsContent>
        </ModalPopup>
      </SectionLayout>
    </>
  );
}

const ProductsContent= styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  width: 100%;
`;
