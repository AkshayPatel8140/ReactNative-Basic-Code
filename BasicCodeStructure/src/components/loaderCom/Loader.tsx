import React from 'react';
import { View, Text, ActivityIndicator, ActivityIndicatorProps, StyleProp, ViewStyle, TextStyle } from 'react-native';

import COLORS from '@app/data/colors';
import CONSTANTS from '@app/data/constants';
import PF from '@app/utils/functions';
import styles from './LoaderStyle';

interface IProps extends ActivityIndicatorProps {
  noDataText: string | undefined,
  after: boolean,
  withLoading: boolean,
  containerStyle: StyleProp<ViewStyle> | undefined,
  textStyle: StyleProp<TextStyle> | undefined,
}

const DefaultProps = {
  size: CONSTANTS.LARGE,
  color: COLORS.blue,
  noDataText: '',
  after: false,
  withLoading: false,
  containerStyle: {},
  textStyle: {},
};

const Loader = (props: IProps) => {
  const { size, color, withLoading, after, containerStyle, textStyle, noDataText } = props;

  const getStyle = () => {
    return {
      containerStyle: after ? styles.absoluteContainer : {},
    };
  };

  return (
    <View style={[styles.container, getStyle().containerStyle, containerStyle]}>
      {
        (PF.checkVariable(noDataText) !== '') ?
          withLoading ?
            <View>
              <ActivityIndicator size={size} color={color} />
              <Text style={[styles.text, textStyle]}>{noDataText}</Text>
            </View>
            :
            <Text style={[styles.text, textStyle]}>{noDataText}</Text>
          :
          <ActivityIndicator size={size} color={color} />
      }
    </View>
  );
};

Loader.defaultProps = DefaultProps;

export default Loader;
