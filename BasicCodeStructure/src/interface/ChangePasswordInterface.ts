interface IChangePasswordReducer {
  loading: boolean,
  changePasswordError: string | undefined;
  changePasswordDetail: undefined;
}
interface IAChangePasswordUser {
  currentPassword: string | undefined;
  password: string | undefined;
  passwordConfirmation: string | undefined;
}

interface IAChangePasswordSuccess {
  status?: number | string;
  msg: string | undefined,
  version: number | string | undefined,
  code: number
}
interface IChangePasswordUserAPI {
  currentpassword: string | undefined;
  password: string | undefined;
  password_confirmation: string | undefined;
}

export type {
  IChangePasswordReducer,
  IAChangePasswordUser,
  IChangePasswordUserAPI,
  IAChangePasswordSuccess,
};
