
import { IASignInSuccess } from './SignInInterface';
import { IASignUpSuccess } from './SignUpInterface';

interface IApi {
  url: string;
  body?: object;
  isToken?: boolean;
  method?: string;
  header?: object;
  isFormData?: boolean;
}

interface ISignInResponseData {
  data: SignInResponseData;
}

interface SignInResponseData {
  data: IASignInSuccess;
  code: number;
  msg: string;
}

interface ISignUpResponseData {
  data: SignUpResponseData;
}

interface SignUpResponseData {
  data: IASignUpSuccess;
  code: number;
  msg: string;
}
interface IForgotPasswordResponseData {
  data: ForgotPasswordData;
}

interface ForgotPasswordData {
  status?: boolean;
  msg: string,
  version: string,
  code: number
}
interface IChangePasswordResponseData {
  data: ChangePasswordData;
}

interface ChangePasswordData {
  status?: boolean;
  msg: string,
  version: string,
  code: number
}


export type { IApi, ISignInResponseData, ISignUpResponseData, IForgotPasswordResponseData, IChangePasswordResponseData };
