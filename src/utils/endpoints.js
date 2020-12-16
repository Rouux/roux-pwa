const isProduction = process.env.NODE_ENV === 'production';
export const BASE_URL = isProduction
  ? 'https://roux-pwa-api.herokuapp.com'
  : 'http://192.168.1.69:3000';
export const API_ENDPOINT = `${BASE_URL}/api`;

// Private
export const USER_ENDPOINT = `${API_ENDPOINT}/users`;
export const FEATURES_ENDPOINT = `${API_ENDPOINT}/features`;
