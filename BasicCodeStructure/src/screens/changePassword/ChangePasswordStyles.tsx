import { StyleSheet } from 'react-native';

import COLORS from '@app/data/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  buttonStyle: {
    marginHorizontal: 15,
  },
  inputWrapper: {
    marginTop: 20,
  },
  errorText: {
    color: COLORS.red,
    marginTop: 10,
  },
});

export default styles;
