import React, { useState } from 'react';

import { theme, darkTheme } from '@app/data/theme';
import ContextData from '@app/data/context';

const GlobalContext = (props: { children: any; }) => {

  const [darkMode, setDarkMode] = useState(false);

  const themeData = {
    theme: darkMode ? darkTheme : theme,
    darkMode,
    setDarkMode,
  };

  return (
    <ContextData.Provider value={themeData}>
      {props.children}
    </ContextData.Provider>
  );
};


export default GlobalContext;
