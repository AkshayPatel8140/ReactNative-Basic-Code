import { IS_DARK_MODE, IS_ERROR, IS_SUCCESS, LANGUAGE, NO_INTERNET, REMOVE_ERROR } from '../Types';

export const noInternet = (error: string = '') => ({
  type: NO_INTERNET,
  error: error,
});

export const setLanguage = (language: string) => ({
  type: LANGUAGE,
  payload: language,
});

export const setThemeMode = (value: boolean) => ({
  type: IS_DARK_MODE,
  payload: value,
});

export const toastError = (message: string = '') => ({
  type: IS_ERROR,
  Message: message,
});

export const toastRemoveData = () => ({
  type: REMOVE_ERROR,
});

export const toastSuccess = (message: string = '') => ({
  type: IS_SUCCESS,
  Message: message,
});
