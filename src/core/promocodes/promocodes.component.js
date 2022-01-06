import { PromocodeFormContainer, PromocodesListComponent } from './frames';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';

export function PromocodesComponent(props) {
  const { promocodes, isPending } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="PROMOCODE.PROMOCODES" />
      <PromocodeFormContainer {...props} />
      <PromocodesListComponent promocodes={promocodes} isPending={isPending} />
    </SectionLayout>
  );
}
