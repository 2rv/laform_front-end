import { SectionLayout } from 'src/lib/element/layout';
import { CardListBlock } from 'src/lib/element/card-list';
import { BlockFaqLinks } from '../faq-article';
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
      <BlockFaqLinks viewAll />
      <HomeAdvantage />
    </SectionLayout>
  );
}
