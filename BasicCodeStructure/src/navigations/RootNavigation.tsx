import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Loader from '@app/components/loaderCom';
import STRINGS from '@app/data/strings';
import CONSTANTS from '@app/data/constants';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

import { IStates, IContext } from '@app/interface';
import ContextData from '@app/data/context';
import Toast from '../components/toastCom';

const RootNavigation = () => {

  const context: IContext = useContext(ContextData);
  const { setDarkMode } = context;
  const toastRef = useRef<any>(null);

  const signInReducer = useSelector((state: IStates) => state.signInReducer);
  const commonReducer = useSelector((state: IStates) => state.commonReducer);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (commonReducer.isError) {
      toastRef?.current?.error(commonReducer.errorMessage);
    }
    else if (commonReducer.isError === false) {
      toastRef?.current?.success(commonReducer.SuccessMessage);
    }
  }, [commonReducer.isError]);

  useEffect(() => {
    STRINGS.setLanguage(commonReducer?.language ?? CONSTANTS.ENGLISH);
    setDarkMode(commonReducer?.isDarkMode);
    setLoading(false);
  }, []);

  return (
    <NavigationContainer>
      {signInReducer?.authToken === undefined ? <AuthStack /> : <AppStack />}
      {loading && <Loader />}
      <Toast ref={toastRef} />
    </NavigationContainer>
  );
};

export default RootNavigation;
