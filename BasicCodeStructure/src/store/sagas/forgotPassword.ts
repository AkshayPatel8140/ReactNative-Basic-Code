import { put, call } from 'redux-saga/effects';

import STRINGS from '@app/data/strings';

import { IAction } from '@app/interface';
import { apiStatusCodes } from '@app/data/apis';
import { IForgotPasswordResponseData } from '@app/interface/ApiInterface';

import { noInternet, toastError, toastRemoveData, toastSuccess } from '../actions/common';
import { forgotPassword } from '../services';
import { forgotPasswordFailure, forgotPasswordSuccess } from '../actions/forgotPassword';


export function* forgotPasswordUser(data: IAction) {
  try {
    // clearing internet reducer state before API call
    yield put(noInternet());
    yield put(toastRemoveData());

    const response: IForgotPasswordResponseData = yield call(forgotPassword, data.payload);
    console.log('Forgot Password Response', response?.data);

    if (response?.data?.code === apiStatusCodes.success) {
      yield put(forgotPasswordSuccess(response?.data?.msg));
      yield put(toastSuccess(response?.data?.msg));
    } else if (response?.data?.code === apiStatusCodes.noInternet) {
      yield put(noInternet(STRINGS.errorNoNetwork));
      yield put(toastError(STRINGS.errorNoNetwork));
    } else {
      yield put(forgotPasswordFailure(response?.data?.msg));
      yield put(toastError(response?.data?.msg));
    }
  } catch (error: any) {
    yield put(forgotPasswordFailure(STRINGS.errorNetwork));
    yield put(toastError(STRINGS.errorNetwork));
  }
}
