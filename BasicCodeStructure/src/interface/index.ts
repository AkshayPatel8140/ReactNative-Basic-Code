
import { ITokenData } from './AsyncStorageInterface';
import { IApi } from './ApiInterface';
import { ISignInReducer, IASignInUser, ISignInUserAPI, IASignInSuccess } from './SignInInterface';
import { ISignUpReducer, IASignUpUser, ISignUpUserAPI, IASignUpSuccess } from './SignUpInterface';
import { ICommonReducer } from './CommonInterface';
import { IForgotPasswordReducer, IAForgotPasswordUser, IForgotPasswordUserAPI, IAForgotPasswordSuccess } from './ForgotPasswordInterface';
import { IChangePasswordReducer, IAChangePasswordUser, IChangePasswordUserAPI, IAChangePasswordSuccess } from './ChangePasswordInterface';

/**
 * I...=> Interface
 * IA...=> Action Interface
 * I...API=> API bodyData Interface
 */

interface IStates {
  signInReducer: ISignInReducer;
  signUpReducer: ISignUpReducer;
  forgotPasswordReducer: IForgotPasswordReducer;
  changePasswordReducer: IChangePasswordReducer;
  commonReducer: ICommonReducer;
}

interface IAction {
  type: string;
  payload: any;
  error?: string;
  Message?: string;
}
interface IThemeColors {
  background: string;
  foreground: string;
  text: string;
  buttonBackground: string;
  buttonText: string;
  borderColor: string;
  tintColor: string;
  primary: string;
  success: string;
  danger: string;
  failure: string;
  buttonLoaderColor: string
}
interface ITheme {
  colors: IThemeColors
  isPortrait?: boolean
}
interface IContext {
  theme: ITheme,
  darkMode: boolean,
  setDarkMode: (val: boolean) => void,
}
interface INavigation {
  navigate: (screen: string) => void,
  goBack: () => void,
}

export type {
  IAction,
  IStates,
  ITheme,
  IContext,

  //? AsyncInterface
  ITokenData,

  //? SignUpInterface
  ISignUpReducer,
  IASignUpUser,
  ISignUpUserAPI,
  IASignUpSuccess,

  //? forgotPasswordInterface
  IForgotPasswordReducer,
  IAForgotPasswordUser,
  IForgotPasswordUserAPI,
  IAForgotPasswordSuccess,

  //? changePasswordInterface
  IChangePasswordReducer,
  IAChangePasswordUser,
  IChangePasswordUserAPI,
  IAChangePasswordSuccess,

  //? ApiInterface
  IApi,

  //? SignInInterface
  ISignInReducer,
  IASignInUser,
  ISignInUserAPI,
  IASignInSuccess,

  //? CommonInterface
  ICommonReducer,

  //? NavigationInterface
  INavigation,
};
