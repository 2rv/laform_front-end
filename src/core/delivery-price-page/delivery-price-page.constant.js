export const DELIVERY_PRICE_PAGE_ROUTE_PATH = '/delivery-price';
export const DELIVERY_PRICE_PAGE_STORE_NAME = 'DELIVERY_PRICE_PAGE';

export const DELIVERY_PRICE_PAGE_API = {
  CREATE_DELIVERY_PRICE: {
    ENDPOINT: '/delivery-price/create',
    TYPE: 'POST',
  },
  FETCH_ALL: {
    ENDPOINT: '/delivery-price/get',
    TYPE: 'GET',
  },
  REMOVE_DELIVERY_PRICE: {
    ENDPOINT: (id) => `/delivery-price/remove/${id}`,
    TYPE: 'DELETE',
  },
};

export const DELIVERY_PRICE_FORM_DATA_NAME = {
  DELIVERY_TYPE: 'deliveryType',
  DELIVERY_TYPE_PRICE: 'deliveryTypePrice',
};
