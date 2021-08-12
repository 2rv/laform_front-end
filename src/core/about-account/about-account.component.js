import {
  AboutAccountInfoComponent,
  AboutAccountActivityComponent,
} from './frames';
import { SectionLayout } from '../../lib/element/layout';

export function AboutAccountComponent(props) {
  const { activityData } = props;
  return (
    <SectionLayout>
      <AboutAccountInfoComponent />
      <AboutAccountActivityComponent {...activityData} />
    </SectionLayout>
  );
}
