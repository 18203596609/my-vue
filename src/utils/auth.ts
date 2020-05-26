import Cookie from 'js-cookie';
const loginToken = 'loginToken';

export const setTokenCookie = (token: string) => {
    Cookie.set(loginToken, token, { expires: 1 })
}

export const getToken = () => {
    return Cookie.get(loginToken);
}

export const removeCookie = (name?: string) => {
    Cookie.remove(name || loginToken);
}