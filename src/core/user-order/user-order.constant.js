export const USER_ORDER_ROUTE_PATH = ({ id } = { id: '[id]' }) =>
  `/my-order/${id}`;

export const USER_ORDER_STORE_NAME = 'USER_ORDER';
export const USER_ORDER_API = {
  USER_ORDER_UPLOAD: {
    ENDPOINT: (id) => `purchase/get/${id}`,
    TYPE: 'GET',
  },
};
