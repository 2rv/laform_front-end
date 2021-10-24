export const ORDER_NUMBER_ROUTE_PATH = ({ id } = { id: '[id]' }) =>
  `/order/${id}`;

export const ORDER_NUMBER_STORE_NAME = 'ORDER_NUMBER';
export const ORDER_NUMBER_API = {
  ORDER_NUMBER_UPLOAD: {
    ENDPOINT: (id) => `purchase/get/${id}`,
    TYPE: 'GET',
  },
  UPDATE_PURCHASE: {
    ENDPOINT: (id) => `purchase/update/${id}`,
    TYPE: 'PUT',
  },
  UPDATE_PURCHASE_STATUS: {
    ENDPOINT: (id) => `purchase/update-status/${id}`,
    TYPE: 'PUT',
  },
};
