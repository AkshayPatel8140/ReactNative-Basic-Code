import React, { useContext } from 'react';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';


import STYLES from './SafeAreaContainerStyle';
import ContextData from '@app/data/context';

type IProps = {
  children: JSX.Element | JSX.Element[] | undefined,
  containerStyle?: StyleProp<ViewStyle>
}

const DefaultProps = {
  children: undefined,
};

const SafeAreaContainer = ({ children, ...props }: IProps): JSX.Element => {

  const context = useContext(ContextData);
  const { theme } = context;
  const styles = STYLES(theme);

  const { containerStyle } = props;

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      {children}
    </SafeAreaView>
  );
};


export default SafeAreaContainer;

SafeAreaContainer.defaultProps = DefaultProps;
