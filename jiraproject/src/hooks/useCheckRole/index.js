export function useCheckRole() {

  const userData = JSON?.parse(localStorage?.getItem("USER_LOGIN"));
  return userData
}
