import { SUBSCRIBE_DATA_NAME } from './footer.type';

export const parseSubscribeData = (raw) => ({
  email: raw[SUBSCRIBE_DATA_NAME.EMAIL],
});
