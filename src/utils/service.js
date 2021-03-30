export const isBrowser = () => typeof window !== 'undefined';

export const getUser = () =>
  isBrowser() && localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

export const setUser = user =>
  localStorage.setItem("user", JSON.stringify(user));

export const isLoggedIn = () => {
  const user = getUser();
  if (user.token) {
    return true;
  }
  return false;
};

export const logout = callback => {
  setUser({});
  callback();
};