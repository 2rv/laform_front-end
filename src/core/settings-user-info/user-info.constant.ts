export enum GET_ADRESS_API {
  URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
  TYPE = 'POST',
}
export enum GET_POSTAL_CODE {
  URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/postal_office',
  TYPE = 'POST',
}
export enum GET_USER_INFO_API {
  URL = '/user/info/get',
  TYPE = 'GET',
}
export enum SAVE_USER_INFO_API {
  URL = '/user/info/update',
  TYPE = 'PATCH',
}
export const USER_INFO_STORE_NAME = 'USER_INFO';
