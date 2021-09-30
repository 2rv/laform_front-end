import { PromocodeFormContainer, PromocodesListComponent } from './frames';
import { SectionLayout } from '../../lib/element/layout';

export function PromocodesComponent(props) {
  const { promocodes, isPending } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="Промокоды" />
      <PromocodeFormContainer {...props} />
      <PromocodesListComponent promocodes={promocodes} isPending={isPending} />
    </SectionLayout>
  );
}
