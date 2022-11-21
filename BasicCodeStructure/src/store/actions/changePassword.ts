import { CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE } from '../Types';
import { IAChangePasswordUser } from '@app/interface';

// SignIn User Actions

export const changePasswordUser = (user: IAChangePasswordUser) => ({
  type: CHANGE_PASSWORD_REQUEST,
  payload: user,
});

export const changePasswordSuccess = (response: string) => ({
  type: CHANGE_PASSWORD_SUCCESS,
  payload: response,
});

export const changePasswordFailure = (error: string = '') => ({
  type: CHANGE_PASSWORD_FAILURE,
  error: error,
});


