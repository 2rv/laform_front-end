import { AboutAccountActivityItemComponent } from './about-account-activity-item.component';
import { SectionLayout } from '../../../../lib/element/layout';
import { AboutAccountActivityListComponent } from './about-account-activity-list.component';

export function AboutAccountActivityComponent(props) {
  const { myGoods, aboutAccount, myComments } = props;
  return (
    <SectionLayout>
      <AboutAccountActivityListComponent dataItems={myGoods}>
        {({ item, key }) => (
          <AboutAccountActivityItemComponent {...item} key={key} />
        )}
      </AboutAccountActivityListComponent>
      <AboutAccountActivityListComponent dataItems={aboutAccount}>
        {({ item, key }) => (
          <AboutAccountActivityItemComponent {...item} key={key} />
        )}
      </AboutAccountActivityListComponent>
      <AboutAccountActivityListComponent dataItems={myComments}>
        {({ item, key }) => (
          <AboutAccountActivityItemComponent {...item} key={key} />
        )}
      </AboutAccountActivityListComponent>
    </SectionLayout>
  );
}
