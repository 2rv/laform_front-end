import { SectionLayout } from '../../lib/element/layout';
import { HelpInfoBlock } from '../block-help-info';
import { FaqEditorComponent } from './frame/faq-editor.component';

export function FaqComponent({ faq, user, isAuth }) {
  return (
    <SectionLayout>
      <HelpInfoBlock />
      <FaqEditorComponent faq={faq} user={user} isAuth={isAuth} />
    </SectionLayout>
  );
}
