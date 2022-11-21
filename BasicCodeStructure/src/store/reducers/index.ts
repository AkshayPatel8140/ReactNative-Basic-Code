import AsyncStorage from '@react-native-async-storage/async-storage';

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import signInReducer from './signIn';
import signUpReducer from './signUp';
import commonReducer from './common';
import forgotPassword from './forgotPassword';
import changePassword from './changePassword';

// Persists Configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['commonReducer', 'signInReducer'], // will be persisted
  // blacklist: [], // will not be persisted
};

// Nested Persists Configuration
const sigInPersistConfig = {
  key: 'signInReducer',
  storage: AsyncStorage,
  whitelist: ['authToken'],
};

const commonPersistConfig = {
  key: 'commonReducer',
  storage: AsyncStorage,
  whitelist: ['language', 'isDarkMode'],
};

const rootReducer = combineReducers({
  commonReducer: persistReducer(commonPersistConfig, commonReducer),
  signInReducer: persistReducer(sigInPersistConfig, signInReducer),
  signUpReducer: signUpReducer,
  forgotPasswordReducer: forgotPassword,
  changePasswordReducer: changePassword,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export {
  rootReducer,
  persistedReducer,
};


