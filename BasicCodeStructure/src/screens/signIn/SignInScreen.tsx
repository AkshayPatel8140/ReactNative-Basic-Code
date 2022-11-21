import React, { useContext, useRef, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NativeBaseProvider } from 'native-base';

import SafeAreaContainer from '@app/components/safeAreaContainerCom';
import Header from '@app/components/headerCom';
import MainButton from '@app/components/buttonCom';
import CONSTANTS from '@app/data/constants';
import InputBox from '@app/components/inputBoxCom';
import PF from '@app/utils/functions';
import STRINGS from '@app/data/strings';
import GLOBAL_STYLES from '@app/utils/globalStyles';
import ContextData from '@root/src/data/context';

import { signInUser } from '@app/store/actions/signIn';
import { IASignInUser, IContext, INavigation, IStates } from '@app/interface';
import { useOrientation } from '@app/utils/useOrientation';

import STYLES from './SignInStyle';

interface IProps {
  navigation: INavigation
}
const SignInScreen = (props: IProps) => {
  const dispatch = useDispatch();

  const isPortrait = useOrientation();
  const context: IContext = useContext(ContextData);
  const { theme } = context;
  const styles = STYLES({ ...theme, isPortrait });

  const signInReducer = useSelector((state: IStates) => state.signInReducer);

  const userNameRef = useRef<string | any>();
  const passwordRef = useRef<string | any>();

  const [username, setUsername] = useState('developer@yopmail.com');
  const [password, setPassword] = useState('Moon@123');

  const [usernameError, setUsernameError] = useState<string | boolean>(true);
  const [passwordError, setPasswordError] = useState<string | boolean>(true);

  const onPressForgotPassword = () => {
    props.navigation.navigate(CONSTANTS.FORGOT_PASSWORD_SCREEN);
  };

  const moveToFocus = (validation: Array<any> = []) => {
    if (validation[0] !== true) {
      userNameRef.current.focus();
    } else if (validation[1] !== true) {
      passwordRef.current.focus();
    } else {
      userNameRef.current.focus();
    }
  };

  const handleSignIn = async () => {
    const validation = await Promise.all([
      PF.validateForm(CONSTANTS.EMAIL, username),
      PF.validateForm(CONSTANTS.PASSWORD, password),
    ]);
    setUsernameError(validation[0]);
    setPasswordError(validation[1]);
    moveToFocus(validation);
    if ((validation.filter((obj) => obj !== true)).length === 0) {
      const bodyData: IASignInUser = {
        username,
        password,
      };
      dispatch(signInUser(bodyData));
    }
  };

  const validateForm = (name = '', type = '') => {
    switch (type) {
      case CONSTANTS.EMAIL:
        setUsernameError(PF.validateForm(CONSTANTS.EMAIL, name));
        setUsername(name);
        break;

      case CONSTANTS.PASSWORD:
        setPasswordError(PF.validateForm(CONSTANTS.PASSWORD, name));
        setPassword(name);
        break;
      default:
        console.log('default');
    }
  };
  const { login, btnSignIn } = STRINGS;
  return (
    <NativeBaseProvider>
      <Header
        title={login.header}
        handleBackPress={() => props.navigation.goBack()}
      />
      <SafeAreaContainer>
        <View style={[GLOBAL_STYLES.flex, {}]}>
          <View style={GLOBAL_STYLES.flex}>
            <ScrollView scrollEnabled={false}>
              <View style={styles.container}>
                <InputBox
                  placeholder={login.userName}
                  value={username}
                  refInput={userNameRef}
                  returnKeyType="next"
                  onChangeText={text => validateForm(text, CONSTANTS.EMAIL)}
                  onSubmitEditing={() => passwordRef.current?.focus()} />
                {usernameError !== true &&
                  <Text style={styles.errorText}>{usernameError}</Text>
                }
                <View style={[styles.inputContainer]}>
                  <InputBox
                    placeholder={login.password}
                    value={password}
                    refInput={passwordRef}
                    returnKeyType="done"
                    onChangeText={text => validateForm(text, CONSTANTS.PASSWORD)}
                    onSubmitEditing={handleSignIn}
                  />
                  {passwordError !== true &&
                    <Text style={styles.errorText}>{passwordError}</Text>}
                </View>
                <TouchableOpacity onPress={onPressForgotPassword} style={[styles.forgotPasswordView]}>
                  <Text style={styles.footerText}>{login.forgotPassword}</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View style={styles.buttonStyle}>
              <MainButton
                title={btnSignIn}
                onPress={handleSignIn}
                loading={signInReducer.loading}
                disabled={signInReducer.loading}
                loaderColor={theme.colors.buttonLoaderColor}
              />
            </View>
          </View>
        </View>
      </SafeAreaContainer>

    </NativeBaseProvider>
  );
};

export default SignInScreen;
