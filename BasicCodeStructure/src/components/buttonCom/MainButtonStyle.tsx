import { StyleSheet } from 'react-native';

import GLOBAL_STYLES from '@app/utils/globalStyles';
import { ITheme } from '@app/interface';

const styles = (theme: ITheme) => StyleSheet.create({
  mainStyle: {
    backgroundColor: theme.colors.buttonBackground,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
  },
  viewStyle: {
    ...GLOBAL_STYLES.flex,
    ...GLOBAL_STYLES.justifyCenter,
    ...GLOBAL_STYLES.alignItemCenter,
  },
  textStyle: {
    ...GLOBAL_STYLES.style_15_16,
    ...GLOBAL_STYLES.textUpper,
    color: theme.colors.buttonText,
  },
});

export default styles;
