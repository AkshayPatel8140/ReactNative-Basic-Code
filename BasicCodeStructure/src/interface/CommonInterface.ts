interface ICommonReducer {
  noInternetError: string | undefined;
  language: string | undefined;
  isDarkMode: boolean;
  isError: boolean | null;
  errorMessage: string;
  SuccessMessage: string;
}

export type {
  ICommonReducer,
};
