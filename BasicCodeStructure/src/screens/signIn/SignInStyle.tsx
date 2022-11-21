import { StyleSheet } from 'react-native';

import COLORS from '@app/data/colors';
import { ITheme } from '@app/interface';
import GLOBAL_STYLES from '@root/src/utils/globalStyles';

const styles = (theme: ITheme) => StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  inputContainer: {
    marginTop: theme.isPortrait ? 15 : 10,
  },
  forgotPasswordView: {
    ...GLOBAL_STYLES.alignItemFlexEnd,
    marginTop: theme.isPortrait ? 15 : 10,
  },
  footerText: {
    ...GLOBAL_STYLES.style_18_20,
    color: theme.colors.text,
    textDecorationLine: 'underline',
  },
  buttonStyle: {
    marginHorizontal: 15,
  },
  errorText: {
    color: COLORS.red,
  },
});

export default styles;
