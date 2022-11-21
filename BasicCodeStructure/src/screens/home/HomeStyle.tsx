import { StyleSheet } from 'react-native';

import GLOBAL_STYLES from '@app/utils/globalStyles';

import { ITheme } from '@app/interface';

const styles = (theme: ITheme) => StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.flex,
    ...GLOBAL_STYLES.justifyCenter,
    ...GLOBAL_STYLES.marginHorizontal,
    backgroundColor: theme.colors.background,
  },
  titleView: {
    backgroundColor: 'green',
  },
  textStyle: {
    color: theme.colors.text,
  },
  languageContainer: {
    ...GLOBAL_STYLES.flexRow,
    marginTop: 20,
  },
  languageView: {
    padding: 20,
  },
  switchContainer: {
    ...GLOBAL_STYLES.alignItemCenter,
    ...GLOBAL_STYLES.flexRow,
    marginVertical: theme.isPortrait ? 20 : 10,
  },
  switchText: {
    color: theme.colors.text,
    marginRight: 10,
  },
  buttonContainer: {
    ...GLOBAL_STYLES.flex,
    justifyContent: 'flex-end',
    marginVertical: 15,
  },
});

export default styles;
