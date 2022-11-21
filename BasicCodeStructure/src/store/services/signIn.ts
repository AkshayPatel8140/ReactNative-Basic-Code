import { apiMethods, apis } from '@app/data/apis';
import { IASignInUser, ISignInUserAPI } from '@app/interface';
import { apiCall } from './apiCall';


function signIn(data: IASignInUser) {

  const bodyData: ISignInUserAPI = {
    email: data.username,
    password: data.password,
  };

  return apiCall({
    url: apis.signIn,
    method: apiMethods.POST,
    body: bodyData,
  });
}

export {
  signIn,
};
