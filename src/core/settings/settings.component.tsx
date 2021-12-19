import {
  SectionLayout,
  PageLayout,
  ContentLayout,
} from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { SettingsChangePasswordContainer } from '../settings-change-password';
import { SettingsChangeEmailContainer } from '../settings-change-email';
import { SettingsChangeNotificationContainer } from '../settings-change-notification';
import { SettingsLogutContainer } from '../settings-logout';
import { BlockUserInfo } from '../settings-user-info';

export function SettingsComponent() {
  return (
    <ContentLayout horizontal="center">
      <PageLayout type="MEDIUM">
        <SectionLayout>
          <TitlePrimary tid="SETTINGS.HEADER" />
          <SectionLayout>
            <BlockUserInfo />
            <SettingsChangePasswordContainer />
            <SettingsChangeEmailContainer />
            <SettingsChangeNotificationContainer />
            <SettingsLogutContainer />
          </SectionLayout>
        </SectionLayout>
      </PageLayout>
    </ContentLayout>
  );
}
