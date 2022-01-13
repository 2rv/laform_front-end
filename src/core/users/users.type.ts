import { USER_ROLE } from 'src/lib/common/auth';
import {
  CategoryOptionType,
  SearchBlockHandleFilterType,
  SortOptionType,
} from 'src/lib/common/block-search';

export enum USERS_ACTION_TYPE {
  RESET = 'RESET',

  GET_PENDING = 'GET_PENDING',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',

  UPDATE_PENDING = 'UPDATE_PENDING',
  UPDATE_SUCCESS = 'UPDATE_SUCCESS',
  UPDATE_ERROR = 'UPDATE_ERROR',

  PAGINATION_PENDING = 'PAGINATION_PENDING',
  PAGINATION_SUCCESS = 'PAGINATION_SUCCESS',
  PAGINATION_ERROR = 'PAGINATION_ERROR',
}
export type UsersStateType = {
  getPending: boolean;
  getError: string | undefined;

  updatePending: boolean;
  updateError: string | undefined;

  users: UsersType[];
  total: number;
  page: number;
};
export type UsersActionType = {
  type: USERS_ACTION_TYPE;
  error?: string;
  users?: UsersType[];
  total?: number;
  data?: updateData;
  userId?: number;
};
type UsersType = {
  id: number;
  login: string;
  emailConfirmed: boolean;
  notificationEmail: boolean;
  role: USER_ROLE;
  receivesNewOrders: boolean;
  createDate: Date;
};
export type UsersComponentProps = {
  state: UsersStateType;
  onFilter: SearchBlockHandleFilterType;
  roleCategories: CategoryOptionType[];
  onPagination: () => void;
  onUpdate: (userId: number, data: updateData) => any;
  filterOptions: SortOptionType[];
};
export type UsersItemProps = {
  state: UsersStateType;
  onUpdate: (userId: number, data: updateData) => any;
  data: UsersType;
};
export type updateData = {
  role: USER_ROLE;
  receivesNewOrders: boolean;
};
