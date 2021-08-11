import { SectionLayout } from 'src/lib/element/layout';
import { EditCompilationListComponent } from './frames';
import { TitlePrimary } from '../../lib/element/title';

export function EditCompilationComponent(props) {
  const { bestGoodsItems, bestMasterClassesItems, bestArticlesItems } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="ПОДБОРКИ" />
      <EditCompilationListComponent
        title="Лучшие товары"
        items={bestGoodsItems}
      />
      <EditCompilationListComponent
        title="Лучшие мастер-классы"
        items={bestMasterClassesItems}
      />
      <EditCompilationListComponent
        title="Лучшие полезные статьи"
        items={bestArticlesItems}
      />
    </SectionLayout>
  );
}
