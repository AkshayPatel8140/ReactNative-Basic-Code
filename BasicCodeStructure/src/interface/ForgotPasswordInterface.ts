interface IForgotPasswordReducer {
  loading: boolean,
  forgotPasswordError: string | undefined;
  forgotPasswordDetail: undefined;
}
interface IAForgotPasswordUser {
  username: string | undefined;
}

interface IAForgotPasswordSuccess {
  status?: number | string;
  msg: string | undefined,
  version: number | string | undefined,
  code: number
}
interface IForgotPasswordUserAPI {
  email: string | undefined;
}

export type {
  IForgotPasswordReducer,
  IAForgotPasswordUser,
  IForgotPasswordUserAPI,
  IAForgotPasswordSuccess,
};
