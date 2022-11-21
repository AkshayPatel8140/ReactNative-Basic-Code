import React from 'react';
import { IContext } from '../interface';
import { theme } from './theme';

const context: IContext = {
  theme: theme,
  darkMode: false,
  setDarkMode: () => { },
};

const ContextData = React.createContext(context);

export default ContextData;
