import { StyleSheet } from 'react-native';

import GLOBAL_STYLES from '@app/utils/globalStyles';
import { ITheme } from '@app/interface';

const styles = (theme: ITheme) => StyleSheet.create({
  containerStyle: {
    alignSelf: 'center',
    marginTop: 0,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.borderColor,
  },
  inputContainerStyle: {
    ...GLOBAL_STYLES.height100Per,
    borderBottomWidth: 0,
  },
  inputStyle: {
    color: theme.colors.text,
  },
});

export default styles;
