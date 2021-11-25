import { SectionLayout } from 'src/lib/element/layout';
import { SliderContainer } from '../../core/slider';
import { CatalogListComponent, AdvantageInfoComponent } from './frames';
import { HelpInfoBlock } from '../block-help-info';
import { CardListBlock } from '../../lib/element/card-list';
import { ProductCartSkeleton } from '../../lib/element/skeleton';

export function HomeComponent(props) {
  const { catalogListItems, compilationPending, compilationBlock } = props;
  return (
    <SectionLayout type="MEDIUM">
      <SliderContainer />
      <CatalogListComponent items={catalogListItems} />
      {compilationPending ? (
        <ProductCartSkeleton quantity={3} />
      ) : (
        compilationBlock.map((item, index) => (
          <CardListBlock
            key={index}
            isSliced={false}
            title={item.title}
            path={item.path}
            items={item.compilationProducts}
          />
        ))
      )}
      <HelpInfoBlock viewAll />
      <AdvantageInfoComponent />
    </SectionLayout>
  );
}
