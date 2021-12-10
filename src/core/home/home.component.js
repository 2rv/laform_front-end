import { SectionLayout } from 'src/lib/element/layout';
import { CardListBlock } from 'src/lib/element/card-list';
import { ProductCartSkeleton } from 'src/lib/element/skeleton';
import { CatalogListComponent, AdvantageInfoComponent } from './frames';
import { BlockHelpLinks } from '../block-help-links';
import { SliderContainer } from '../slider';

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
      <BlockHelpLinks viewAll />
      <AdvantageInfoComponent />
    </SectionLayout>
  );
}
