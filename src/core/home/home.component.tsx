import { SectionLayout } from 'src/lib/element/layout';
import { CardListBlock } from 'src/lib/element/card-list';
import { BlockHelpLinks } from '../block-help-links';
import { SliderBlock } from '../slider';
import { HomeComponentProps } from './home.type';
import { HomeCatalog } from './home.catalog';
import { HomeAdvantage } from './home.advantage';

export function HomeComponent(props: HomeComponentProps) {
  const {
    state: { getPending, compilations },
  } = props;
  return (
    <SectionLayout type="MEDIUM">
      <SliderBlock />
      <HomeCatalog />
      {compilations.map((item, index) => (
        <CardListBlock
          isLoading={getPending}
          paginateCount={6}
          key={index}
          isSliced={false}
          title={item.title}
          path={item.path}
          items={item.compilationProducts}
        />
      ))}
      <BlockHelpLinks viewAll />
      <HomeAdvantage />
    </SectionLayout>
  );
}
