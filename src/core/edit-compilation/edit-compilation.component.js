import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import { EditCompilationListComponent, SelectCompilationComponent } from './frames';
import { TitlePrimary } from '../../lib/element/title';
import { FieldSelect } from 'src/lib/element/field';
import { ModalPopup } from 'src/lib/element/modal';
import { LoaderPrimary } from 'src/lib/element/loader';
import { spacing } from 'src/lib/theme';
import { Spinner } from 'src/lib/element/spinner';
import { TextSecondary } from 'src/lib/element/text';

const PRODUCTS_TYPE = [
  { id: 0, tid: 'Добавить подборку', hidden: true },
  { id: 1, tid: 'Товар' },
  { id: 2, tid: 'Мастер-класс' },
  { id: 3, tid: 'Полезную статью' },
];

export function EditCompilationComponent(props) {
  const {
    bestProducts,
    bestMasterClasses,
    bestArticles,
    products,
    compilationName,
    isPendingProducts,
    fetchProductsToSelectBestCompilation,
    modalVisibilty,
    setModalVisibility,
    currentLang,
    pageLoading,
  } = props;

  return (
    <>
      {pageLoading && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="ПОДБОРКИ" />
        <EditCompilationListComponent
          title="Лучшие товары"
          compilationName="sewing-product"
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
          value="addCompilation"
          options={PRODUCTS_TYPE}
          onChange={fetchProductsToSelectBestCompilation}
        />
        <ModalPopup modalVisibilty={modalVisibilty} onClose={() => setModalVisibility(false)}>
          {isPendingProducts ? <Spinner /> : (
            <ModalContent>
              {products.filter(({ pinned }) => pinned).length >= 3 ? (
                <TextSecondary tid="В списке должно быть максимум 3 подборки данной категории" />
              ) : (
                products.map((product) => (
                  <SelectCompilationComponent
                    key={product.id}
                    id={product.id}
                    title={product.titleRu}
                    pinned={product.pinned}
                    image={(product.images ? product.images[0] : product.imageUrl)?.fileUrl}
                    compilationName={compilationName}
                    currentLang={currentLang}
                    setModalVisibility={setModalVisibility}
                  />
                ))
              )}
            </ModalContent>
          )}
        </ModalPopup>
      </SectionLayout>
    </>
  );
}

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  width: 100%;
`;
