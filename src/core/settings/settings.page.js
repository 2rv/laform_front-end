import { SettingsComponent } from './settings.component';
import { PageLayout, ContentLayout } from '../../lib/element/layout';

export function SettingsPage() {
  return (
    <PageLayout horizontal="center">
      <ContentLayout type="MEDIUM">
        <SettingsComponent />
      </ContentLayout>
    </PageLayout>
  );
}
