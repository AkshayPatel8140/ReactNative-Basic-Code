import { apiMethods, apis } from '@app/data/apis';
import { IASignUpUser, ISignUpUserAPI } from '@app/interface';
import { apiCall } from './apiCall';


function signUp(data: IASignUpUser) {

  const bodyData: ISignUpUserAPI = {
    first_name: data.first_name,
    last_name: data.last_name,
    phone_number: data.phone_number,
    country_id: data.country_id,
    zip_code: data.zip_code,
    password: data.password,
    email: data.username,
  };

  return apiCall({
    url: apis.signUp,
    method: apiMethods.POST,
    body: bodyData,
  });
}

export {
  signUp,
};
