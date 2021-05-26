import { SUBSCRIBE_DATA, SubscribeDto } from './subscribe.type';

export const parseSubscribeData = (raw: any): SubscribeDto => ({
  email: raw[SUBSCRIBE_DATA.EMAIL],
});
