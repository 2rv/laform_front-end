import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { LoaderPrimary } from '../../lib/element/loader';
import { UsersListComponent } from './frames/users-list.component';

export function UsersComponent({ pageLoading, isPending, users }) {
  return (
    <>
      {pageLoading && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="OTHER.USERS_LIST" />
        <UsersListComponent isPending={isPending} users={users} />
      </SectionLayout>
    </>
  );
}
