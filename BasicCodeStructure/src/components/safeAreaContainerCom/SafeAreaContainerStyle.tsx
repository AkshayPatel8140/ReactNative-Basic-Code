import { StyleSheet } from 'react-native';

import { ITheme } from '@app/interface';
import GLOBAL_STYLES from '@app/utils/globalStyles';


const styles = (theme: ITheme) => StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.flex,
    backgroundColor: theme.colors.background,
  },
});

export default styles;
