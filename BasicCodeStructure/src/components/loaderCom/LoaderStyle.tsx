import { StyleSheet } from 'react-native';

import COLORS from '@app/data/colors';
import GLOBAL_STYLES from '@app/utils/globalStyles';

const styles = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.flex,
    ...GLOBAL_STYLES.justifyCenter,
    ...GLOBAL_STYLES.alignItemCenter,
  },
  absoluteContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.transparentWhite,
  },
  text: {},
});

export default styles;
