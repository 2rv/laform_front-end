import { SectionLayout } from '../../lib/element/layout';
import { FaqListComponent } from './frames';
import { HelpInfoBlock } from '../block-help-info';

export function FaqPageComponent(props) {
  const { mainItems, saleItems } = props;
  return (
    <SectionLayout>
      <HelpInfoBlock />
      <FaqListComponent items={mainItems} />
      <FaqListComponent titleTid={'FAQ_LIST.SALES_QUESTION'} items={saleItems} />
    </SectionLayout>
  );
}
