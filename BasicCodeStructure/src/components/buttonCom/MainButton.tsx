import React, { useContext } from 'react';
import { ActivityIndicator, ColorValue, StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

import GLOBAL_STYLES from '@app/utils/globalStyles';
import styleMain from './MainButtonStyle';

import { IContext } from '@app/interface';
import ContextData from '@app/data/context';

type IProps = {
  children?: JSX.Element | undefined,
  title: string,
  titleDisable?: string,
  disabled?: boolean,
  loading?: boolean,
  loaderColor?: ColorValue | undefined
  mainStyle?: StyleProp<ViewStyle> | undefined
  titleTextStyle?: StyleProp<TextStyle> | undefined
  containerStyle?: StyleProp<TextStyle> | undefined
  onPress: (() => void),
}

const DefaultProps = {
  disabled: false,
  loading: false,
  onPress: () => { },
  children: undefined,
};

const MainButton = ({ children, ...props }: IProps): JSX.Element => {

  const context: IContext = useContext(ContextData);
  const { theme } = context;
  const STYLES = styleMain(theme);

  const {
    title,
    titleDisable,
    disabled,
    loading,
    loaderColor,
    mainStyle,
    titleTextStyle,
    containerStyle,
    onPress,
  } = props;

  const buttonText = disabled ? titleDisable || title : title;

  return (
    <View style={[containerStyle, {}]}>
      <View style={[STYLES.mainStyle, mainStyle, { opacity: disabled ? 0.5 : 1 }]}>
        <TouchableOpacity style={GLOBAL_STYLES.flex}
          onPress={onPress}
          disabled={disabled}>
          <View style={GLOBAL_STYLES.flex}>
            {children ? children :
              <View style={[STYLES.viewStyle]}>
                {loading ?
                  <ActivityIndicator color={loaderColor || theme.colors.buttonLoaderColor} />
                  :
                  <Text style={[STYLES.textStyle, titleTextStyle]}>{buttonText}</Text>
                }
              </View>
            }
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default MainButton;

MainButton.defaultProps = DefaultProps;
