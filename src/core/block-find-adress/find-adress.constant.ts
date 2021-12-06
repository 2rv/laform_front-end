export enum GET_ADRESS_API {
  URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
  TYPE = 'POST',
}
export enum GET_POSTAL_CODE {
  URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/postal_office',
  TYPE = 'POST',
}
export enum LOAD_ADRESS_API {
  URL = '/user/info/get',
  TYPE = 'GET',
}
export enum SAVE_ADRESS_API {
  URL = '/user/info/update',
  TYPE = 'PATCH',
}
export const FIND_ADRESS_STORE_NAME = 'FIND_ADRESS';
