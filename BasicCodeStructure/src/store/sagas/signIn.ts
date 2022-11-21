import { put, call } from 'redux-saga/effects';

import STRINGS from '@app/data/strings';

import { IAction } from '@app/interface';
import { apiStatusCodes } from '@app/data/apis';
import { ISignInResponseData } from '@app/interface/ApiInterface';

import { signInFailure, signInSuccess, signOutSuccess } from '../actions/signIn';
import { noInternet, toastError, toastSuccess, toastRemoveData } from '../actions/common';
import { signIn } from '../services';
import { setToken } from '@root/src/utils/asyncStorage';

export function* signInUser(data: IAction) {
  try {
    // clearing internet reducer state before API call
    yield put(noInternet());
    yield put(toastRemoveData());

    const response: ISignInResponseData = yield call(signIn, data.payload);

    if (response?.data?.code === apiStatusCodes.success) {
      // The exclamation mark removes null and undefined from a type without doing any explicit type checking.
      setToken(response?.data?.data?.token!);
      yield put(toastSuccess(response?.data?.msg));
      yield put(signInSuccess(response?.data?.data));
    } else if (response?.data?.code === apiStatusCodes.noInternet) {
      yield put(noInternet(STRINGS.errorNoNetwork));
      yield put(toastError(STRINGS.errorNoNetwork));
    } else {
      yield put(toastError(response?.data?.msg));
      yield put(signInFailure(response?.data?.msg));
    }
  } catch (error: any) {
    yield put(toastError(STRINGS.errorNetwork));
    yield put(signInFailure(STRINGS.errorNetwork));
  }
}

export function* signOutUser() {
  try {
    yield put(signOutSuccess());
  } catch (error: any) {
    yield put(signInFailure(STRINGS.errorNetwork));
  }
}
