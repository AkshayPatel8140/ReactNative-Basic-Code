import AsyncStorage from '@react-native-async-storage/async-storage';

export const TOKEN = 'TOKEN';

export const setToken = (dataString: string | undefined) => {
  AsyncStorage.setItem(TOKEN, `${dataString}`);
};

export const removeToken = () => AsyncStorage.removeItem(TOKEN);

export const getToken = async () => {
  return await AsyncStorage.getItem(TOKEN).then(result => {
    return { token: result, isToken: result ? true : false };
  });
};
