import { SectionLayout } from '../../lib/element/layout';
import { FaqListComponent } from './frames';
import { HelpInfoBlock } from '../block-help-info';

export function FaqPageComponent(props) {
  const { mainItems, saleItems } = props;
  return (
    <SectionLayout>
      <HelpInfoBlock />
      <FaqListComponent items={mainItems} />
      <FaqListComponent titleTid={'Вопросы о продаже'} items={saleItems} />
    </SectionLayout>
  );
}
