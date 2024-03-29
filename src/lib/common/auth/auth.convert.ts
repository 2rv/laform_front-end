import { AUTH_USER_DATA, AuthUserDto } from './auth.type';

export const parseUserAuthData = (raw: any): AuthUserDto => {
  return {
    id: raw[AUTH_USER_DATA.ID],
    login: raw[AUTH_USER_DATA.LOGIN],
    email: raw[AUTH_USER_DATA.EMAIL],
    role: raw[AUTH_USER_DATA.ROLE],
    emailConfirmed: raw[AUTH_USER_DATA.EMAIL_CONFIRMED],
    notificationEmail: raw[AUTH_USER_DATA.NOTIFICATION_EMAIL],
  };
};
