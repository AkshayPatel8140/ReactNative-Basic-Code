import {
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
} from '../Types';
import { IAction, IChangePasswordReducer } from '@app/interface';

const initialState: IChangePasswordReducer = {
  loading: false,
  changePasswordError: undefined,
  changePasswordDetail: undefined,
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        changePasswordError: undefined,
        changePasswordDetail: undefined,
        loading: true,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePasswordDetail: action.payload,
        changePasswordError: undefined,
        loading: false,
      };
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        changePasswordDetail: undefined,
        changePasswordError: action.error,
      };

    default:
      return state;
  }
};
