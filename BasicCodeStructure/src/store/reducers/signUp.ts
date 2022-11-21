import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from '../Types';
import { ISignUpReducer, IAction } from '@app/interface';

const initialState: ISignUpReducer = {
  loading: false,
  signUpDetails: undefined,
  signUpError: undefined,
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        signUpDetails: undefined,
        signUpError: undefined,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signUpDetails: action.payload,
        signUpError: undefined,
        loading: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signUpDetails: undefined,
        signUpError: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
