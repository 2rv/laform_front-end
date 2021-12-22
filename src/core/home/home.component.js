import { SectionLayout } from 'src/lib/element/layout';
import { CardListBlock } from 'src/lib/element/card-list';
import { CatalogListComponent, AdvantageInfoComponent } from './frames';
import { BlockHelpLinks } from '../block-help-links';
import { SliderBlock } from '../slider';

export function HomeComponent(props) {
  const { compilationPending, compilationBlock } = props;
  return (
    <SectionLayout type="MEDIUM">
      <SliderBlock />
      <CatalogListComponent />
      {compilationPending ? (
        <CardListBlock
          isSliced={false}
          isLoading={compilationPending}
          paginateCount={6}
        />
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
