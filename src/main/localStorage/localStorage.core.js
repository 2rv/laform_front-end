export const setLocalStorage = (key, value) => {
  if (!process.browser) return;

  localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
  if (!process.browser) return;

  localStorage.getItem(key);
};
