import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@app/screens/home';
import CONSTANTS from '@app/data/constants';
import ChangePasswordScreen from '@app/screens/changePassword';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={CONSTANTS.HOME_SCREEN} screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen name={CONSTANTS.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={CONSTANTS.CHANGE_PASSWORD_SCREEN} component={ChangePasswordScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
