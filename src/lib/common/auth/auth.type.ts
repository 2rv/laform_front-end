export enum AUTH_USER_DATA {
  ID = 'id',
  LOGIN = 'login',
  EMAIL = 'email',
  ROLE = 'role',
}

export enum USER_ROLE {
  BLOCKED = 0,
  USER = 1,
  ADMIN = 2,
}

export interface AuthUserDto {
  id: number;
  login: string;
  email: string;
  role: USER_ROLE;
}

export interface AuthStoreState {
  token: string | null;
  logged: boolean | null;
  user: AuthUserDto | null;
}

export interface AuthStoreAction extends AuthStoreState {
  type: AUTH_ACTION_TYPE;
}

export enum AUTH_ACTION_TYPE {
  SET_DATA = 'AUTH.SET_DATA',
}
