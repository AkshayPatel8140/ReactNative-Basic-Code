import React, { useContext } from 'react';
import {
  View,
  Alert,
  Pressable,
  Switch,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NativeBaseProvider } from 'native-base';

import SafeAreaContainer from '@app/components/safeAreaContainerCom';
import Header from '@app/components/headerCom';
import MainButton from '@app/components/buttonCom';
import STRINGS from '@app/data/strings';
import CONSTANTS from '@app/data/constants';
import COLORS from '@app/data/colors';
import GLOBAL_STYLES from '@app/utils/globalStyles';
import ContextData from '@app/data/context';

import { signOutUser } from '@app/store/actions/signIn';
import { IStates, IContext, INavigation } from '@app/interface';
import { setLanguage, setThemeMode } from '@app/store/actions/common';
import { useOrientation } from '@app/utils/useOrientation';
import STYLES from './HomeStyle';

interface IProps {
  navigation: INavigation
}
const HomeScreen = (props: IProps) => {
  const isPortrait = useOrientation();
  const context: IContext = useContext(ContextData);
  const { theme, darkMode, setDarkMode } = context;
  const styles = STYLES({ ...theme, isPortrait });


  const commonReducer = useSelector((state: IStates) => state.commonReducer);
  const currentLanguage = commonReducer.language;

  const dispatch = useDispatch();

  const changeLanguage = (value: string) => {
    STRINGS.setLanguage(value);
    dispatch(setLanguage(value));
  };

  const changeTheme = (value: boolean) => {
    setDarkMode(value);
    dispatch(setThemeMode(value));
  };


  const submit = () => {
    dispatch(signOutUser());
  };

  const handleMenuPress = () => {
    Alert.alert('Menu Pressed');
  };

  const handleBackPress = () => {
    Alert.alert('Back Pressed');
  };

  const handleProfilePress = () => {
    Alert.alert('User Profile Pressed');
  };

  const onPressChangePassword = () => {
    props.navigation.navigate(CONSTANTS.CHANGE_PASSWORD_SCREEN);
  };

  return (
    <NativeBaseProvider>

      {/* custom header */}
      <Header
        showMenu
        title="Home"
        viewProfile
        profile="https://reactnative.dev/img/tiny_logo.png" // temp user profile picture
        handleMenuPress={handleMenuPress}
        handleBackPress={handleBackPress}
        handleProfilePress={handleProfilePress}
      />

      <SafeAreaContainer containerStyle={GLOBAL_STYLES.flex}>
        <View style={styles.container}>


          <View style={{ ...GLOBAL_STYLES.flex }}>

            <View style={styles.titleView}>
              <Text style={styles.textStyle}>{STRINGS.hello}</Text>
            </View>
            <View style={styles.languageContainer}>
              <Pressable
                onPress={() => changeLanguage(CONSTANTS.ENGLISH)}
                style={[styles.languageView, { backgroundColor: currentLanguage === CONSTANTS.ENGLISH ? COLORS.purple : COLORS.gray }]}>
                <Text>{STRINGS.english}</Text>
              </Pressable>
              <Pressable
                onPress={() => changeLanguage(CONSTANTS.HINDI)}
                style={[styles.languageView, { backgroundColor: currentLanguage === CONSTANTS.HINDI ? COLORS.purple : COLORS.gray }]}>
                <Text>{STRINGS.hindi}</Text>
              </Pressable>
            </View>
            <View style={styles.switchContainer}>
              <Text style={[styles.switchText]}>{STRINGS.theme}</Text>
              <Switch value={darkMode} onValueChange={(val) => changeTheme(val)} />
            </View>
            <View style={styles.switchContainer}>
              <TouchableOpacity onPress={onPressChangePassword}>
                <Text style={[styles.switchText]}>{'change Password'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <MainButton title={'LogOut'} onPress={submit} />
          </View>
        </View>

      </SafeAreaContainer>
    </NativeBaseProvider>
  );
};

export default HomeScreen;
