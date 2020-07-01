export const setSession = (name: string, value: any) => {
  sessionStorage.setItem(name, value);
}

export const getSession = (name: string) => {
  return sessionStorage.getItem(name);
}
