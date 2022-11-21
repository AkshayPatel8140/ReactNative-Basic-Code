import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
} from '../Types';
import { ISignInReducer, IAction } from '@app/interface';

const initialState: ISignInReducer = {
  loading: false,
  authToken: undefined,
  signInDetails: undefined,
  signInError: undefined,
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        signInDetails: undefined,
        signInError: undefined,
        loading: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        authToken: action.payload.token,
        signInDetails: action.payload,
        signInError: undefined,
        loading: false,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        signInDetails: undefined,
        signInError: action.error,
        loading: false,
      };
    case SIGN_OUT_SUCCESS:
      return {
        authToken: undefined,
      };
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
