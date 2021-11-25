export const convertUsersOrderData = (data) => {
  return {
    id: data.id,
    login: data.login,
    emailConfirmed: data.emailConfirmed,
    notificationEmail: data.notificationEmail,
    receivesNewOrders: data.receivesNewOrders,
    role: data.role,
  };
};
