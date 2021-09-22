import { Spinner } from '../../../lib/element/spinner';
import { TextSecondary } from '../../../lib/element/text';
import { UsersListItemComponent } from './users-list-item.component';

export function UsersListComponent({ isPending, users }) {
  return isPending ? <Spinner /> : (
    Boolean(users?.length > 0) ? (
      users.map((user) => <UsersListItemComponent key={user.id} {...user} />)
    ) : (
      <TextSecondary tid="OTHER.LIST_IS_EMPTY" />
    )
  )
}
