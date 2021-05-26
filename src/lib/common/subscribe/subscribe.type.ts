export enum SUBSCRIBE_DATA {
  EMAIL = 'email',
}

export interface SubscribeDto {
  email: string;
}

export interface SubscribeStoreState {
  subscribeForm: any;
}

export interface SubscribeStoreAction extends SubscribeStoreState {
  type: SUBSCRIBE_ACTION_TYPE;
  errorMessage: string | string[];
}

export enum SUBSCRIBE_ACTION_TYPE {
  UPLOAD_PENDING = 'SUBSCRIBE.UPLOAD_PENDING',
  UPLOAD_SUCCESS = 'SUBSCRIBE.UPLOAD_SUCCESS',
  UPLOAD_ERROR = 'SUBSCRIBE.UPLOAD_ERROR',
}
