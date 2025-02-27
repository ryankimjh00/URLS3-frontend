
import { Cookies } from 'react-cookie';
const cookies = new Cookies();
const setCookie = (name: string, value: string, option?: any) => {
  return cookies.set(name, value, { ...option });
};
const getCookie = (name: string) => {
  return cookies.get(name);
};

const rmToken = () => {
  cookies.remove('LoginToken');
};

export const LoginToken = getCookie('LoginToken');

export { setCookie, getCookie, rmToken };
