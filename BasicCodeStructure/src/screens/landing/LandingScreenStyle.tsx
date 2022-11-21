import { StyleSheet } from 'react-native';
import { ITheme } from '../../interface';

import GLOBAL_STYLES from '../../utils/globalStyles';

const styles = (theme: ITheme) => StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.flex,
    ...GLOBAL_STYLES.justifyCenter,
    ...GLOBAL_STYLES.marginHorizontal,
    backgroundColor: theme.colors.background,
  },
  subContainer: {
    ...GLOBAL_STYLES.flex,
    justifyContent: 'flex-end',
  },
  view: {
    height: theme.isPortrait ? 10 : 5,
  },
  textStyle: {
    ...GLOBAL_STYLES.style_15_16,
    ...GLOBAL_STYLES.textAlignCenter,
    color: theme.colors.text,
    marginTop: 20,
  },
});

export default styles;
