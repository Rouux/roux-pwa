import http from './http-service';
import { bus } from '../main';
import { EVENTS, USER_SESSION_COOKIE } from '../utils/const';
import { API_ENDPOINT } from '../utils/endpoints';

const LOGIN_ENDPOINT = `${API_ENDPOINT}/login`;
const LOGOUT_ENDPOINT = `${API_ENDPOINT}/logout`;
const IS_AUTHENTIFIED_ENDPOINT = `${API_ENDPOINT}/isAuthentified`;

export const login = async (username, password) => {
  return http
    .post(LOGIN_ENDPOINT, {
      username: username,
      password: password
    })
    .then(response => {
      const { session } = response.data;
      bus.$cookies.set(USER_SESSION_COOKIE, session);
      bus.$emit(EVENTS.USER_AUTH, true);
      return response;
    })
    .catch(error => {
      const { status } = error.response;
      if (status !== 401) {
        console.log(error);
      }
      return error.response;
    });
};

export const logout = async () => {
  return http
    .get(LOGOUT_ENDPOINT)
    .then(response => {
      bus.$emit(EVENTS.USER_AUTH, false);
      return response;
    })
    .catch(error => {
      console.log(error);
      return error.response;
    });
};

export async function isAuthentified() {
  return await http
    .get(IS_AUTHENTIFIED_ENDPOINT)
    .then(() => true)
    .catch(() => false);
}
