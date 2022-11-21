import React, { useContext, useRef, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NativeBaseProvider } from 'native-base';

import SafeAreaContainer from '@app/components/safeAreaContainerCom';
import MainButton from '@app/components/buttonCom';
import Header from '@app/components/headerCom';
import InputBox from '@app/components/inputBoxCom';
import CONSTANTS from '@app/data/constants';
import PF from '@app/utils/functions';
import STRINGS from '@app/data/strings';
import GLOBAL_STYLES from '@app/utils/globalStyles';
import ContextData from '@root/src/data/context';

import { forgotPasswordUser } from '@app/store/actions/forgotPassword';
import { IAForgotPasswordUser, IContext, INavigation, IStates } from '@app/interface';

import styles from './ForgotPasswordStyles';


interface IProps {
  navigation: INavigation
}
const ForgotPasswordScreen = (props: IProps) => {
  const dispatch = useDispatch();

  const context: IContext = useContext(ContextData);
  const { theme } = context;

  const forgotPasswordReducer = useSelector((state: IStates) => state.forgotPasswordReducer);

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState<string | boolean>(true);
  const userNameRef = useRef<string | any>();

  const submit = async () => {
    if (PF.validateForm(CONSTANTS.EMAIL, username) === true) {
      const bodyData: IAForgotPasswordUser = {
        username,
      };
      dispatch(forgotPasswordUser(bodyData));
    } else {
      setUsernameError(PF.validateForm(CONSTANTS.EMAIL, username));
      userNameRef.current.focus();
    }
  };

  const validateForm = (name = '', type = '') => {
    if (type === CONSTANTS.EMAIL) {
      setUsernameError(PF.validateForm(CONSTANTS.EMAIL, name));
      setUsername(name);
    }
  };

  const { forgotPassword, btnSubmit } = STRINGS;

  return (
    <NativeBaseProvider>
      <Header
        title={forgotPassword.header}
        handleBackPress={() => props.navigation.goBack()}
      />
      <SafeAreaContainer>
        <View style={[GLOBAL_STYLES.flex, {}]}>
          <View style={GLOBAL_STYLES.flex}>
            <ScrollView scrollEnabled={false}>
              <View style={styles.container}>
                <InputBox
                  placeholder={forgotPassword.userName}
                  value={username}
                  refInput={userNameRef}
                  returnKeyType="next"
                  onChangeText={text => validateForm(text, CONSTANTS.EMAIL)}
                  onSubmitEditing={submit} />
                {usernameError !== true &&
                  <Text style={styles.errorText}>{usernameError}</Text>
                }
              </View>
            </ScrollView>
            <View style={styles.buttonStyle}>
              <MainButton
                title={btnSubmit}
                onPress={submit}
                loading={forgotPasswordReducer.loading}
                disabled={forgotPasswordReducer.loading}
                loaderColor={theme.colors.buttonLoaderColor}
              />
            </View>
          </View>
        </View>
      </SafeAreaContainer>
    </NativeBaseProvider>
  );
};

export default ForgotPasswordScreen;
