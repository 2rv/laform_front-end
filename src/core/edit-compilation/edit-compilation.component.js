import { SectionLayout } from 'src/lib/element/layout';
import { EditCompilationListComponent } from './frames';
import { TitlePrimary } from '../../lib/element/title';
import { FieldSelect } from 'src/lib/element/field';

const PRODUCTS_TYPE = [
  { id: 0, tid: 'COMPILATION.SELECT.TITLE', hidden: true },
  { id: 1, tid: 'COMPILATION.SELECT.PRODUCT' },
  { id: 2, tid: 'COMPILATION.SELECT.MASTER_CLASS' },
  { id: 3, tid: 'COMPILATION.SELECT.ARTICLE' },
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
      <TitlePrimary tid="COMPILATION.TITLE" />
      <EditCompilationListComponent
        title="COMPILATION.SUB_MENU.BEST_GOODS"
        compilationName="sewing-product"
        items={bestProducts}
        currentLang={currentLang}
      />
      <EditCompilationListComponent
        title="COMPILATION.SUB_MENU.BEST_MASTER_CLASSES"
        compilationName="master-class"
        items={bestMasterClasses}
        currentLang={currentLang}
      />
      <EditCompilationListComponent
        title="COMPILATION.SUB_MENU.BEST_ARTICLES"
        compilationName="post"
        items={bestArticles}
        currentLang={currentLang}
      />
      <FieldSelect
        titleTid="COMPILATION.SELECT.TITLE"
        value="addCompilation"
        options={PRODUCTS_TYPE}
        onChange={fetchProductsToSelectBestCompilation}
      />
    </SectionLayout>
  );
}
