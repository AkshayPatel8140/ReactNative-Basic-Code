import {
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
} from '../Types';
import { IAction, IForgotPasswordReducer } from '@app/interface';

const initialState: IForgotPasswordReducer = {
  loading: false,
  forgotPasswordError: undefined,
  forgotPasswordDetail: undefined,

};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        forgotPasswordError: undefined,
        forgotPasswordDetail: undefined,
        loading: true,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordDetail: action.payload,
        forgotPasswordError: undefined,
        loading: false,
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        forgotPasswordDetail: undefined,
        forgotPasswordError: action.error,
      };

    default:
      return state;
  }
};
