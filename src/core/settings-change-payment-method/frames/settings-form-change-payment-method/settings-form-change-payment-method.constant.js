import { PAYMENT_METHOD } from '../../../../lib/common/payment-method';

export const DEFAULT_PAYMENT_METHOD = PAYMENT_METHOD.ONLINE;

export const PAYMENT_METHODS = [
  {
    id: PAYMENT_METHOD.ONLINE,
    tid: 'SETTINGS.CHANGE_PAYMENT_METHOD.PAYMENT_METHOD.ONLINE',
  },
  {
    id: 'offline',
    tid: 'SETTINGS.CHANGE_PAYMENT_METHOD.PAYMENT_METHOD.OFFLIE',
  },
];
