import { SectionLayout } from 'src/lib/element/layout';
import { EditCompilationListComponent } from './frames';
import { TitlePrimary } from '../../lib/element/title';

export function EditCompilationComponent(props) {
  const {
    bestProducts,
    bestMasterClasses,
    bestArticles,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="ПОДБОРКИ" />
      <EditCompilationListComponent
        title="Лучшие товары"
        compilationName="post" // Изменить когда BE будет готов
        items={bestProducts}
      />
      <EditCompilationListComponent
        title="Лучшие мастер-классы"
        compilationName="master-class"
        items={bestMasterClasses}
      />
      <EditCompilationListComponent
        title="Лучшие полезные статьи"
        compilationName="post"
        items={bestArticles}
      />
    </SectionLayout>
  );
}
