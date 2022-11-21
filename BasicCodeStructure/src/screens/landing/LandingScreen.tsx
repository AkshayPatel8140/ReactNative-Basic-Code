import React, { useContext } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import SafeAreaContainer from '@app/components/safeAreaContainerCom';
import MainButton from '@app/components/buttonCom';
import CONSTANTS from '@app/data/constants';
import ContextData from '@app/data/context';

import { IContext, INavigation } from '@app/interface';

import STYLES from './LandingScreenStyle';

interface IProps {
  navigation: INavigation
}

const LandingScreen = (props: IProps) => {

  const context: IContext = useContext(ContextData);
  const { theme, darkMode } = context;
  const styles = STYLES(theme);

  const onPressSignIn = () => {
    props.navigation.navigate(CONSTANTS.SIGN_IN_SCREEN);
  };

  const onPressSignUp = () => {
    props.navigation.navigate(CONSTANTS.SIGN_UP_SCREEN);
  };


  return (
    <NativeBaseProvider>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaContainer>
        <View style={styles.container}>
          <Text style={styles.textStyle}>{'Landing Screen'}</Text>
          <View style={styles.subContainer}>
            <View style={{}}>
              <MainButton title={'SignIn'} onPress={onPressSignIn} />
            </View>
            <View style={styles.view} />
            <View style={{}}>
              <MainButton title={'SignUp'} onPress={onPressSignUp} />
            </View>
          </View>
        </View>
      </SafeAreaContainer>
    </NativeBaseProvider>
  );
};

export default LandingScreen;
