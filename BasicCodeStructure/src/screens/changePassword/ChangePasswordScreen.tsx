import React, { useRef, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';

import SafeAreaContainer from '@app/components/safeAreaContainerCom';
import MainButton from '@app/components/buttonCom';
import Header from '@app/components/headerCom';
import InputBox from '@app/components/inputBoxCom';
import CONSTANTS from '@app/data/constants';
import PF from '@app/utils/functions';
import STRINGS from '@app/data/strings';
import GLOBAL_STYLES from '@app/utils/globalStyles';

import { IAChangePasswordUser, INavigation, IStates } from '@app/interface';
import { changePasswordUser } from '@root/src/store/actions/changePassword';

import styles from './ChangePasswordStyles';

interface IProps {
  navigation: INavigation
}
const ChangePasswordScreen = (props: IProps) => {
  const dispatch = useDispatch();

  const changePasswordReducer = useSelector((state: IStates) => state.changePasswordReducer);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldPasswordError, setOldPasswordError] = useState<string | boolean>(true);
  const [newPasswordError, setNewPasswordError] = useState<string | boolean>(true);
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | boolean>(true);
  const oldPasswordRef = useRef<string | any>();
  const newPasswordRef = useRef<string | any>();
  const confirmPasswordRef = useRef<string | any>();

  const moveToFocus = (validation: Array<any> = []) => {
    if (validation[0] !== true) {
      onFocus(oldPasswordRef);
    } else if (validation[1] !== true) {
      onFocus(newPasswordRef);
    } else if (validation[2] !== true) {
      onFocus(confirmPasswordRef);
    } else {
      onFocus(oldPasswordRef);
    }
  };

  const submit = async () => {
    const validations = await Promise.all([
      PF.validateForm(CONSTANTS.OLD_PASSWORD, oldPassword),
      PF.validateForm(CONSTANTS.NEW_PASSWORD, newPassword),
      PF.validateForm(CONSTANTS.CONFIRM_PASSWORD, confirmPassword),
    ]);
    setOldPasswordError(validations[0]);
    setNewPasswordError(validations[1]);
    setConfirmPasswordError(validations[2]);
    moveToFocus(validations);
    if (PF.validationLengthCheck(validations)) {
      const bodyData: IAChangePasswordUser = {
        currentPassword: oldPassword,
        password: newPassword,
        passwordConfirmation: confirmPassword,
      };
      dispatch(changePasswordUser(bodyData));
    }
  };

  //#region Input Box Methods
  const onFocus = (refFocus: string | any) => {
    refFocus.current?.focus();
  };

  const onChangeText = (password = '', type = '') => {
    switch (type) {
      case CONSTANTS.OLD_PASSWORD:
        setOldPasswordError(PF.validateForm(CONSTANTS.OLD_PASSWORD, password));
        setOldPassword(password);
        break;
      case CONSTANTS.NEW_PASSWORD:
        setNewPasswordError(PF.validateForm(CONSTANTS.NEW_PASSWORD, password));
        setNewPassword(password);
        break;
      case CONSTANTS.CONFIRM_PASSWORD:
        setConfirmPasswordError(PF.validateForm(CONSTANTS.NEW_PASSWORD, password));
        setConfirmPassword(password);
        break;
      default:
        console.log('default');
    }
  };
  //#endRegion

  const { changePassword, btnSubmit } = STRINGS;

  return (
    <NativeBaseProvider>
      <Header
        title={changePassword.header}
        handleBackPress={() => props.navigation.goBack()}
      />
      <SafeAreaContainer>
        <View style={[GLOBAL_STYLES.flex, {}]}>
          <View style={GLOBAL_STYLES.flex}>
            <ScrollView scrollEnabled={false}>
              <View style={styles.container}>
                <InputBox
                  placeholder={changePassword.oldPassword}
                  value={oldPassword}
                  refInput={oldPasswordRef}
                  returnKeyType="next"
                  onChangeText={(text) => onChangeText(text, CONSTANTS.OLD_PASSWORD)}
                  onSubmitEditing={() => onFocus(newPasswordRef)} />
                {oldPasswordError !== true &&
                  <Text style={styles.errorText}>{oldPasswordError}</Text>
                }
                <View style={styles.inputWrapper}>
                  <InputBox
                    placeholder={changePassword.newPassword}
                    value={newPassword}
                    refInput={newPasswordRef}
                    returnKeyType="next"
                    onChangeText={(text) => onChangeText(text, CONSTANTS.NEW_PASSWORD)}
                    onSubmitEditing={() => onFocus(confirmPasswordRef)} />
                  {newPasswordError !== true &&
                    <Text style={styles.errorText}>{newPasswordError}</Text>
                  }
                </View>
                <View style={styles.inputWrapper}>
                  <InputBox
                    placeholder={changePassword.confirmPassword}
                    value={confirmPassword}
                    refInput={confirmPasswordRef}
                    returnKeyType="done"
                    onChangeText={(text) => onChangeText(text, CONSTANTS.CONFIRM_PASSWORD)}
                    onSubmitEditing={submit}
                  />
                  {confirmPasswordError !== true &&
                    <Text style={styles.errorText}>{confirmPasswordError}</Text>
                  }
                </View>
              </View>
            </ScrollView>
            <View style={styles.buttonStyle}>
              <MainButton
                title={btnSubmit}
                onPress={submit}
                loading={changePasswordReducer.loading}
                disabled={changePasswordReducer.loading}
              />
            </View>
          </View>
        </View>
      </SafeAreaContainer>
    </NativeBaseProvider>
  );
};

export default ChangePasswordScreen;

