import { SectionLayout } from 'src/lib/element/layout';
import { EditCompilationListComponent } from './frames';
import { TitlePrimary } from '../../lib/element/title';
import { bestCompilationsRemoveItem, bestCompilationsUpdateItem } from './edit-compilation.action';

export function EditCompilationComponent(props) {
  const {
    bestProducts,
    bestMasterClasses,
    bestArticles,

    isPendingBestArticles,
    isPendingBestMasterClasses,
    isPendingBestProducts,

    currentLang,
  } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="ПОДБОРКИ" />
      <EditCompilationListComponent
        title="Лучшие товары"
        compilationName="post" // Изменить когда BE будет готов
        items={bestProducts}
        isPendingBestProducts={isPendingBestProducts}
        updateItem={bestCompilationsUpdateItem}
        removeItem={bestCompilationsRemoveItem}
        currentLang={currentLang}
      />
      <EditCompilationListComponent
        title="Лучшие мастер-классы"
        compilationName="master-class"
        items={bestMasterClasses}
        isPendingBestMasterClasses={isPendingBestMasterClasses}
        updateItem={bestCompilationsUpdateItem}
        removeItem={bestCompilationsRemoveItem}
        currentLang={currentLang}
      />
      <EditCompilationListComponent
        title="Лучшие полезные статьи"
        compilationName="post"
        items={bestArticles}
        isPendingBestArticles={isPendingBestArticles}
        updateItem={bestCompilationsUpdateItem}
        removeItem={bestCompilationsRemoveItem}
        currentLang={currentLang}
      />
    </SectionLayout>
  );
}
