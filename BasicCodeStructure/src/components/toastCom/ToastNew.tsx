import COLORS from '@root/src/data/colors';
import CONSTANTS from '@root/src/data/constants';
import PF from '@root/src/utils/functions';
import React, { forwardRef, useRef, useState, useImperativeHandle } from 'react';
import { View, Animated, Text, StatusBar } from 'react-native';
import styles from './ToastStyle';

const ToastNew = forwardRef((props, ref) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [modalShown, setModalShown] = useState(false);
  const [message, setMessage] = useState('Success!');
  const [toastColor, setToastColor] = useState(COLORS.green);
  const [textColor, setTextColor] = useState(COLORS.black);

  const callToast = (messageText: string, type: string) => {
    if (modalShown) { return; }
    setToastType(messageText, type);
    setModalShown(true);
    Animated.sequence([
      Animated.timing(animatedValue, CONSTANTS.Animation_Open),
      Animated.timing(animatedValue, CONSTANTS.Animation_Close),
    ]).start(() => {
      StatusBar.setBarStyle('default');
      setModalShown(false);
    });
  };

  let animation = animatedValue.interpolate({
    inputRange: [0, 0.3, 1],
    outputRange: [-100, -10, 0],
  });

  useImperativeHandle(ref, () => ({
    success(messageText: string) {
      callToast(messageText, 'success');
      StatusBar.setBarStyle('dark-content');
    },
    error(messageText: string) {
      callToast(messageText, 'error');
      StatusBar.setBarStyle('light-content');
    },
  }));

  const setToastType = (messageText: string = 'Success!', type: string = 'success') => {
    const isSuccess: boolean = (type === 'success');
    const color: string = isSuccess ? COLORS.green : COLORS.red;
    const textColorValue: string = isSuccess ? COLORS.black : COLORS.white;

    setMessage(messageText);
    setToastColor(color);
    setTextColor(textColorValue);
  };

  return modalShown ? (
    <Animated.View style={[styles.container, { backgroundColor: toastColor, transform: [{ translateY: animation }] }]}>
      <View style={{ minHeight: PF.setValuesByDevice(100, 50, 50, 30) }} />
      <View style={styles.row}>
        <Text style={[styles.message, { color: textColor }]}>{message}</Text>
      </View>
    </Animated.View>
  ) : null;
});

export default ToastNew;
