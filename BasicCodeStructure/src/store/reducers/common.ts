import CONSTANTS from '@app/data/constants';
import { ICommonReducer, IAction } from '@app/interface';

import { NO_INTERNET, LANGUAGE, IS_DARK_MODE, IS_ERROR, IS_SUCCESS, REMOVE_ERROR } from '../Types';

const initialState: ICommonReducer = {
  noInternetError: undefined,
  language: CONSTANTS.ENGLISH,
  isDarkMode: false,
  isError: null,
  errorMessage: '',
  SuccessMessage: '',
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case NO_INTERNET:
      return {
        ...state,
        noInternetError: action.error,
      };
    case LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case IS_DARK_MODE:
      return {
        ...state,
        isDarkMode: action.payload,
      };
    case IS_ERROR:
      return {
        ...state,
        isError: true,
        errorMessage: action.Message,
      };
    case IS_SUCCESS:
      return {
        ...state,
        isError: false,
        SuccessMessage: action.Message,
      };
    case REMOVE_ERROR:
      return {
        ...state,
        isError: null,
        SuccessMessage: '',
        errorMessage: '',
      };
    default:
      return state;
  }
};
