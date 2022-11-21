import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from '@app/screens/landing';
import SignInScreen from '@app/screens/signIn';
import SignUpScreen from '@app/screens/signUp';
import CONSTANTS from '@app/data/constants';
import ForgotPasswordScreen from '../screens/forgotPassword';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={CONSTANTS.LANDING_SCREEN} screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen name={CONSTANTS.LANDING_SCREEN} component={LandingScreen} />
      <Stack.Screen name={CONSTANTS.SIGN_IN_SCREEN} component={SignInScreen} />
      <Stack.Screen name={CONSTANTS.SIGN_UP_SCREEN} component={SignUpScreen} />
      <Stack.Screen name={CONSTANTS.FORGOT_PASSWORD_SCREEN} component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
