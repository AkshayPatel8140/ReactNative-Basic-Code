import { apiMethods, apis } from '@app/data/apis';
import { IAChangePasswordUser, IChangePasswordUserAPI } from '@app/interface';
import { apiCall } from './apiCall';


async function changePassword(data: IAChangePasswordUser) {

  const bodyData: IChangePasswordUserAPI = {
    currentpassword: data.currentPassword,
    password: data.password,
    password_confirmation: data.passwordConfirmation,
  };

  return apiCall({
    url: apis.changePassword,
    method: apiMethods.POST,
    body: bodyData,
    isToken: true,
  });
}

export {
  changePassword,
};
