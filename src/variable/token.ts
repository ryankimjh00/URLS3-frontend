
import { Cookies } from 'react-cookie';
const cookies = new Cookies();
const setCookie = (name: string, value: string, option?: any) => {
  return cookies.set(name, value, { ...option });
};
const getCookie = (name: string) => {
  return cookies.get(name);
};

const rmLogInToken = () => {
  cookies.remove('LogInToken');
};

export const LogInToken = getCookie('LogInToken');

export { setCookie, getCookie, rmLogInToken };
