import React, { useRef, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import InputBox from '@app/components/inputBoxCom';
import MainButton from '@app/components/buttonCom';
import SafeAreaContainer from '@app/components/safeAreaContainerCom';
import Header from '@app/components/headerCom';
import CONSTANTS from '@app/data/constants';
import REGEX from '@app/data/regex';
import STRINGS from '@app/data/strings';
import PF from '@app/utils/functions';
import GLOBAL_STYLES from '@app/utils/globalStyles';

import { useDispatch, useSelector } from 'react-redux';
import { IASignUpUser, INavigation, IStates } from '@app/interface';
import { signUpUser } from '@root/src/store/actions/signUp';

import styles from './SignUpStyle';
interface IProps {
  navigation: INavigation
}
const SignUpScreen = (props: IProps) => {
  const dispatch = useDispatch();

  const signUpReducer = useSelector((state: IStates) => state.signUpReducer);

  const [firstName, setFirstName] = useState('Test');
  const [lastName, setLastName] = useState('Test1');
  const [username, setUsername] = useState('developer@yopmail.com');
  const [password, setPassword] = useState('Test@123');
  const [firstNameError, setFirstNameError] = useState<string | boolean>(true);
  const [lastNameError, setLastNameError] = useState<string | boolean>(true);
  const [usernameError, setUserNameError] = useState<string | boolean>(true);
  const [passwordError, setPasswordError] = useState<string | boolean>(true);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const UserNameRef = useRef(null);
  const passwordRef = useRef(null);

  const onFocus = (refFocus: string | any) => {
    refFocus.current?.focus();
  };

  const onChangeText = (name = '', type = '') => {
    switch (type) {
      case CONSTANTS.FIRST_NAME:
        setFirstNameError(PF.validateForm(CONSTANTS.FIRST_NAME, name));
        setFirstName(name.replace(PF.generateRegExp(REGEX.username), ''));
        break;
      case CONSTANTS.LAST_NAME:
        setLastNameError(PF.validateForm(CONSTANTS.LAST_NAME, name));
        setLastName(name.replace(PF.generateRegExp(REGEX.username), ''));
        break;
      case CONSTANTS.EMAIL:
        setUserNameError(PF.validateForm(CONSTANTS.EMAIL, name));
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

  // const checkEmpty = () => {
  //   if (firstNameError !== '' || lastNameError !== '' || usernameError !== '' || passwordError !== '') { return true; }
  //   return false;
  // };

  const moveToFocus = (validation: Array<any> = []) => {
    if (validation[0] !== true) {
      onFocus(firstNameRef);
    } else if (validation[1] !== true) {
      onFocus(lastNameRef);
    } else if (validation[2] !== true) {
      onFocus(UserNameRef);
    } else if (validation[3] !== true) {
      onFocus(passwordRef);
    } else {
      onFocus(firstNameRef);
    }
  };

  const handleSignUp = async () => {
    const validations = await Promise.all([
      PF.validateForm(CONSTANTS.FIRST_NAME, firstName),
      PF.validateForm(CONSTANTS.LAST_NAME, lastName),
      PF.validateForm(CONSTANTS.EMAIL, username),
      PF.validateForm(CONSTANTS.PASSWORD, password),
    ]);
    setFirstNameError(validations[0]);
    setLastNameError(validations[1]);
    setUserNameError(validations[2]);
    setPasswordError(validations[3]);
    moveToFocus(validations);
    if (PF.validationLengthCheck(validations)) {
      const bodyData: IASignUpUser = {
        username: username,
        password: password,
        first_name: firstName,
        last_name: lastName,
        phone_number: '7203846566',
        country_id: '2',
        zip_code: '123456',
      };
      dispatch(signUpUser(bodyData));
    }
  };
  const { signUp, btnSignUp } = STRINGS;
  return (
    <NativeBaseProvider>
      <Header
        title={signUp.header}
        handleBackPress={() => props.navigation.goBack()}
      />
      <SafeAreaContainer>
        <View style={[GLOBAL_STYLES.flex, {}]}>
          <View style={GLOBAL_STYLES.flex}>
            <KeyboardAvoidingView
              style={[GLOBAL_STYLES.flex, {}]}
              behavior={PF.isIOS() ? 'padding' : 'padding'}
              enabled={PF.isIOS() ? true : false}>
              <ScrollView contentContainerStyle={styles.mainStyle} scrollEnabled={true}>
                <View style={styles.container}>
                  <View>
                    <View style={styles.view0}>
                      <InputBox
                        placeholder={signUp.firstName}
                        value={firstName}
                        refInput={firstNameRef}
                        returnKeyType="next"
                        onChangeText={(text) => onChangeText(text, CONSTANTS.FIRST_NAME)}
                        onSubmitEditing={() => onFocus(lastNameRef)}
                      />
                      {firstNameError !== true &&
                        <Text style={styles.errorStyle}>{firstNameError}</Text>}
                    </View>
                    <View style={styles.view0}>
                      <InputBox
                        placeholder={signUp.lastName}
                        value={lastName}
                        returnKeyType="next"
                        onChangeText={text => onChangeText(text, CONSTANTS.LAST_NAME)}
                        refInput={lastNameRef}
                        onSubmitEditing={() => onFocus(UserNameRef)}
                      />
                      {lastNameError !== true &&
                        <Text style={styles.errorStyle}>{lastNameError}</Text>}
                    </View>
                    <View style={styles.view0}>
                      <InputBox
                        placeholder={signUp.userName}
                        value={username}
                        onChangeText={text => onChangeText(text, CONSTANTS.EMAIL)}
                        returnKeyType="next"
                        refInput={UserNameRef}
                        maxLength={50}
                        onSubmitEditing={() => onFocus(passwordRef)}
                      />
                      {usernameError !== true &&
                        <Text style={styles.errorStyle}>{usernameError}</Text>}
                    </View>
                    <View style={styles.view0}>
                      <InputBox
                        placeholder={signUp.password}
                        value={password}
                        onChangeText={text => onChangeText(text, CONSTANTS.PASSWORD)}
                        returnKeyType="done"
                        onSubmitEditing={handleSignUp}
                        refInput={passwordRef}
                        maxLength={12}
                      />
                      {passwordError !== true &&
                        <Text style={styles.errorStyle}>{passwordError}</Text>}
                    </View>
                  </View>
                </View>
                <View style={styles.buttonStyle}>
                  <MainButton
                    // disabled={!checkEmpty()}
                    title={btnSignUp}
                    loading={signUpReducer?.loading}
                    disabled={signUpReducer?.loading}
                    onPress={handleSignUp}
                  />
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </View>
      </SafeAreaContainer>
    </NativeBaseProvider >
  );
};

export default SignUpScreen;
