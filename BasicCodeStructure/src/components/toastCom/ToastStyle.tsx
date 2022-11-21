import COLORS from '@root/src/data/colors';
import GLOBAL_STYLES from '@root/src/utils/globalStyles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tost: {
    ...GLOBAL_STYLES.positionAbsolute,
    ...GLOBAL_STYLES.justifyCenter,
    zIndex: 9999999,
    height: 60,
  },
  toastMsg: {
    ...GLOBAL_STYLES.style_15_16,
    marginLeft: 10,
    color: COLORS.white,
    fontWeight: 'bold',
  },

  container: {
    ...GLOBAL_STYLES.width100Per,
    position: 'absolute',
    top: 0,
    minHeight: 100,
    backgroundColor: COLORS.green,
    zIndex: 1000,
    justifyContent: 'flex-end',
    padding: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6.27,
    elevation: 10,
  },
  message: {
    ...GLOBAL_STYLES.style_15_16,
    marginHorizontal: 10,
  },
  row: {
    ...GLOBAL_STYLES.flexRow,
    ...GLOBAL_STYLES.alignItemCenter,
  },
});

export default styles;
