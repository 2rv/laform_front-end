import { AboutAccountComponent } from './about-account.component';
import { ABOUT_ACCOUNT_TEST_ITEMS } from './about-account.constant';

export function AboutAccountContainer() {
  return <AboutAccountComponent activityData={ABOUT_ACCOUNT_TEST_ITEMS} />;
}
