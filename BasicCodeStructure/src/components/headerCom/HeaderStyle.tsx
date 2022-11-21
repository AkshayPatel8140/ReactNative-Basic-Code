import { StyleSheet } from 'react-native';

import COLORS from '@app/data/colors';
import PF from '@app/utils/functions';
import GLOBAL_STYLES from '@app/utils/globalStyles';

const styles = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.flexRow,
    ...GLOBAL_STYLES.flex,
    marginHorizontal: 15,
  },
  leftContainer: {
    ...GLOBAL_STYLES.flex,
    ...GLOBAL_STYLES.justifyCenter,
  },
  leftImageContainer: {
    ...GLOBAL_STYLES.image40,
    ...GLOBAL_STYLES.justifyCenter,
    ...GLOBAL_STYLES.alignItemCenter,
  },
  centerContainer: {
    flex: 3,
    ...GLOBAL_STYLES.justifyCenter,
    ...GLOBAL_STYLES.alignItemCenter,
  },
  rightContainer: {
    ...GLOBAL_STYLES.alignItemFlexEnd,
    ...GLOBAL_STYLES.flex,
    ...GLOBAL_STYLES.justifyCenter,
  },
  rightImageContainer: {
    height: PF.setValuesByDevice(28, 44, 36, 40),
    width: PF.setValuesByDevice(28, 44, 36, 40),
    borderRadius: PF.setValuesByDevice(28, 44, 36, 40),
    borderWidth: 1.5,
    borderColor: COLORS.white,
    overflow: 'hidden',
  },
  titleStyle: {
    ...GLOBAL_STYLES.style_15_16,
    color: COLORS.white,
  },

});

export default styles;
