const apiMethods = {
  POST: 'POST',
  GET: 'GET',
  DELETE: 'DELETE',
};

const apiStatusCodes = {
  success: 200,
  successError: 203,
  noContent: 204,
  created: 201,
  movedPermanently: 301,
  bedRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  methodAllowed: 405,
  unsupportedMediaType: 415,
  timeout: 408,
  conflict: 409,
  internalServerError: 500,
  bedGetaway: 502,
  serviceUnavailable: 503,
  getawayTimeout: 504,
  noInternet: 0,
};

// API base URL
const baseURL = 'https://beta4.moontechnolabs.com/sfl-app-web/public/api/v1/';

// auth api
const apis = {
  signIn: 'login',
  signUp: 'signup',
  forgotPassword: 'frogot-password',
  changePassword: 'change-password',
};

export { baseURL, apis, apiMethods, apiStatusCodes };
