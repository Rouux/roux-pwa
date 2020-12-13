import axios from 'axios';
import { bus } from '../main';
import { USER_SESSION_COOKIE } from '../utils/const';
import { LOGIN_ENDPOINT } from '../utils/endpoints';

export const login = async (username, password) => {
  return axios
    .post(LOGIN_ENDPOINT, {
      session: sessionStorage.session_id,
      username: username,
      password: password
    })
    .then(response => {
      const { session } = response.data;
      bus.$cookies.set(USER_SESSION_COOKIE, session);
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
