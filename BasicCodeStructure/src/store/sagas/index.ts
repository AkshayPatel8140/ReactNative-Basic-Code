import { all, takeLatest } from 'redux-saga/effects';

import { CHANGE_PASSWORD_REQUEST, FORGOT_PASSWORD_REQUEST, SIGN_IN_REQUEST, SIGN_OUT_REQUEST, SIGNUP_REQUEST } from '../Types';
import { changePasswordUser } from './changePassword';
import { forgotPasswordUser } from './forgotPassword';
import { signInUser, signOutUser } from './signIn';
import { signUpUser } from './signUp';

function* rootSaga() {
  yield all([
    takeLatest(SIGN_IN_REQUEST, signInUser),
    takeLatest(SIGNUP_REQUEST, signUpUser),
    takeLatest(SIGN_OUT_REQUEST, signOutUser),
    takeLatest(FORGOT_PASSWORD_REQUEST, forgotPasswordUser),
    takeLatest(CHANGE_PASSWORD_REQUEST, changePasswordUser),
  ]);
}

export default rootSaga;
