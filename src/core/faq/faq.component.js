import { SectionLayout } from '../../lib/element/layout';
import { HelpInfoBlock } from '../block-help-info';
import { FaqEditorComponent } from './frame/faq-editor.component';

export function FaqComponent(props) {
  return (
    <SectionLayout>
      <HelpInfoBlock />
      <FaqEditorComponent {...props} />
    </SectionLayout>
  );
}
