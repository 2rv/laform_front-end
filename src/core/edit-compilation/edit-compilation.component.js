import { SectionLayout } from 'src/lib/element/layout';
import { EditCompilationListComponent } from './frames';
import { TitlePrimary } from '../../lib/element/title';
import { FieldSelect } from 'src/lib/element/field';

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
    fetchProductsToSelectBestCompilation,
    currentLang,
  } = props;

  return (
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
    </SectionLayout>
  );
}
