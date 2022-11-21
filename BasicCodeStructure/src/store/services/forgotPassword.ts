import { apiMethods, apis } from '@app/data/apis';
import { IAForgotPasswordUser, IForgotPasswordUserAPI } from '@app/interface';
import { apiCall } from './apiCall';


function forgotPassword(data: IAForgotPasswordUser) {

  const bodyData: IForgotPasswordUserAPI = {
    email: data.username,
  };

  return apiCall({
    url: apis.forgotPassword,
    method: apiMethods.POST,
    body: bodyData,
  });
}

export {
  forgotPassword,
};
