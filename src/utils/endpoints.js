const isProduction = process.env.NODE_ENV === 'production';
export const BASE_URL = isProduction
  ? 'https://roux-pwa-api.herokuapp.com'
  : 'http://localhost:3000';
export const API_ENDPOINT = `${BASE_URL}/api`;

// Public
export const LOGIN_ENDPOINT = `${API_ENDPOINT}/login`;

// Private
export const IS_AUTHENTIFIED_ENDPOINT = `${API_ENDPOINT}/isAuthentified`;
export const USER_ENDPOINT = `${API_ENDPOINT}/users`;
export const FEATURES_ENDPOINT = `${API_ENDPOINT}/features`;
