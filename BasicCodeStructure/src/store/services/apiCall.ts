import axios from 'axios';

import PF from '@app/utils/functions';

import { IApi } from '@app/interface/ApiInterface';
import { apiMethods, apiStatusCodes, baseURL } from '@app/data/apis';
import { getToken } from '@root/src/utils/asyncStorage';

const getHeaders = async ({ isToken = false, header = {} }) => {
  try {
    const authToken = await getToken();

    let headers = { ...header };
    if (isToken === true) {
      headers = {
        ...header,
        Accept: 'application/json',
        Authorization: `Bearer ${authToken.token}`,
        'Content-Type': 'application/json',
        // 'Content-Type': "multipart/form-data",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Accept': "*/*",
      };
    }
    return headers;
  } catch (error) {

  }

};

async function apiCall(params: IApi) {
  const { url, method = apiMethods.GET, body = {}, isToken = false, header = {} } = params;

  const BASE_URL = baseURL;
  const API_URL = `${BASE_URL}${url}`;
  let response;

  if (!await PF.checkNetConnectivity()) {
    return { data: { code: apiStatusCodes.noInternet } };
  }

  console.log('API request2: ', API_URL, params, isToken);

  const headers = await getHeaders({ isToken, header });

  if (method === apiMethods.GET) {
    response = await axios({ method: apiMethods.GET, url: API_URL, headers });
  } else {
    response = await axios({ method: method, url: API_URL, data: body, headers });
  }
  console.log('API response: ', response);
  return response;
}

export { apiCall };
