import { useEffect, useReducer, useState } from 'react';
import { SearchBlockFilterValues } from 'src/lib/common/block-search';
import {
  getUsersAction,
  updateUserAction,
  paginateUsersAction,
} from './users.action';
import { UsersComponent } from './users.component';
import {
  UsersActionType,
  UsersStateType,
  USERS_ACTION_TYPE,
} from './users.type';

const initialState: UsersStateType = {
  getPending: false,
  getError: undefined,

  updatePending: false,
  updateError: undefined,

  users: [],
  total: 0,
  page: 1,
};
function UsersReducer(
  state: UsersStateType,
  action: UsersActionType,
): UsersStateType {
  switch (action.type) {
    case USERS_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
      };
    case USERS_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        users: action.users || [],
        total: action.total || 0,
        page: state.page + 1,
      };
    case USERS_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    case USERS_ACTION_TYPE.PAGINATION_PENDING:
      return {
        ...state,
        getPending: true,
      };
    case USERS_ACTION_TYPE.PAGINATION_SUCCESS:
      return {
        ...state,
        getPending: false,
        users: state.users.concat(action.users || []),
        page: state.page + 1,
      };
    case USERS_ACTION_TYPE.PAGINATION_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    case USERS_ACTION_TYPE.UPDATE_PENDING:
      return {
        ...state,
        updatePending: true,
      };
    case USERS_ACTION_TYPE.UPDATE_SUCCESS:
      return {
        ...state,
        updatePending: false,
        users: state.users.map((user) => {
          if (user.id === action.userId && action.data) {
            user.role = action.data?.role;
            user.receivesNewOrders = action.data?.receivesNewOrders;
          }
          return user;
        }),
      };
    case USERS_ACTION_TYPE.UPDATE_ERROR:
      return {
        ...state,
        updatePending: false,
        updateError: action.error,
      };

    case USERS_ACTION_TYPE.RESET:
      return initialState;

    default:
      return state;
  }
}

export function UsersContainer() {
  const [state, setState] = useReducer(UsersReducer, initialState);
  const [query, setQuery] = useState<SearchBlockFilterValues>();

  const onFilter = (props: SearchBlockFilterValues) => {
    const { where, sort, by, category } = props;
    const copy = { ...query };
    copy.where = where;
    copy.sort = sort;
    copy.by = by;
    copy.category = category;
    setQuery(copy);
  };

  useEffect(() => {
    getUsersAction({ page: state.page, ...query })(setState);
  }, [query]);

  const onPagination = () => {
    paginateUsersAction({ page: state.page, ...query })(setState);
  };
  const onUpdate = (userId: number, data: any) => {
    updateUserAction(userId, {
      role: data.role,
      receivesNewOrders: data.receivesNewOrders,
    })(setState);
  };
  return (
    <UsersComponent
      state={state}
      onFilter={onFilter}
      onUpdate={onUpdate}
      onPagination={onPagination}
      filterOptions={filterOptions}
      roleCategories={roleCategories}
    />
  );
}

export const filterOptions = [
  {
    id: 0,
    tid: 'OTHER.FILTER.ALL',
  },
  {
    id: 1,
    tid: 'OTHER.FILTER.NEW',
    sort: 'date',
    by: 'DESC',
  },
  {
    id: 2,
    tid: 'OTHER.FILTER.OLD',
    sort: 'date',
    by: 'ASC',
  },
  {
    id: 3,
    tid: 'OTHER.FILTER.FROM_A_TO_Z',
    sort: 'login',
    by: 'ASC',
  },
  {
    id: 4,
    tid: 'OTHER.FILTER.FROM_Z_TO_A',
    sort: 'login',
    by: 'DESC',
  },
];
const roleCategories = Object.values({
  0: 'OTHER.FILTER.ALL',
  1: 'Заблокирован',
  2: 'Пользователь',
  3: 'Администратор',
}).map((item, index) => ({
  id: index,
  tid: item,
}));
