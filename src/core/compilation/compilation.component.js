import { SectionLayout } from 'src/lib/element/layout';
import {
  CompilationSubMenuComponent,
  CompilationListComponent,
} from './frames';
import { TitlePrimary } from '../../lib/element/title';

export function CompilationComponent(props) {
  const { subMenuItems, activePath, items } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="COMPILATION.TITLE" />
      <CompilationSubMenuComponent
        activePath={activePath}
        items={subMenuItems}
      />
      <CompilationListComponent items={items} />
    </SectionLayout>
  );
}
