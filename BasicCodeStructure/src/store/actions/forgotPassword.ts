import { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE } from '../Types';
import { IAForgotPasswordUser } from '@app/interface';

// SignIn User Actions

export const forgotPasswordUser = (user: IAForgotPasswordUser) => ({
  type: FORGOT_PASSWORD_REQUEST,
  payload: user,
});

export const forgotPasswordSuccess = (response: string) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: response,
});

export const forgotPasswordFailure = (error: string = '') => ({
  type: FORGOT_PASSWORD_FAILURE,
  error: error,
});


