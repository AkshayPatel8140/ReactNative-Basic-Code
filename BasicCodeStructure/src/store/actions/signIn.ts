import { SIGN_IN_REQUEST, SIGN_OUT_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE } from '../Types';
import { IASignInSuccess, IASignInUser } from '@app/interface';

// SignIn User Actions
export const signInUser = (user: IASignInUser) => ({
  type: SIGN_IN_REQUEST,
  payload: user,
});

export const signInSuccess = (response: IASignInSuccess) => ({
  type: SIGN_IN_SUCCESS,
  payload: response,
});

export const signInFailure = (error: string = '') => ({
  type: SIGN_IN_FAILURE,
  error: error,
});

// SignOut User Actions
export const signOutUser = () => ({
  type: SIGN_OUT_REQUEST,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error: string = '') => ({
  type: SIGN_OUT_FAILURE,
  error: error,
});
