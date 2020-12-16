import axios from 'axios';
import { bus } from '../main';
import { USER_SESSION_COOKIE } from '../utils/const';

export default {
  /**
   * @param {string} url
   * @param {import('axios').AxiosRequestConfig|undefined} config
   * @returns {Promise<import('axios').AxiosResponse<T>>} response
   * @template T
   */
  get: (url, config = {}) => {
    return axios.get(url, injectDefaultOptions(config));
  },

  /**
   * @param {string} url
   * @param {any|undefined} data
   * @param {import('axios').AxiosRequestConfig|undefined} config
   * @returns {Promise<import('axios').AxiosResponse<T>>} response
   * @template T
   */
  post: (url, data = {}, config = {}) => {
    return axios.post(url, data, injectDefaultOptions(config));
  },

  /**
   * @param {string} url
   * @param {any|undefined} data
   * @param {import('axios').AxiosRequestConfig|undefined} config
   * @returns {Promise<import('axios').AxiosResponse<T>>} response
   * @template T
   */
  put: (url, data = {}, config = {}) => {
    return axios.put(url, data, injectDefaultOptions(config));
  },

  /**
   * @param {string} url
   * @param {import('axios').AxiosRequestConfig|undefined} config
   * @returns {Promise<import('axios').AxiosResponse<T>>} response
   * @template T
   */
  delete: (url, config = {}) => {
    return axios.delete(url, injectDefaultOptions(config));
  }
};

function injectDefaultOptions(config = {}) {
  const cookie = bus.$cookies.get(USER_SESSION_COOKIE);
  const headers = {
    'Set-Cookie': `${USER_SESSION_COOKIE}=${cookie};`
  };
  config.headers = {
    ...headers,
    ...config.headers
  };
  return config;
}
