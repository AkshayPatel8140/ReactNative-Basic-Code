import ContextData from '@root/src/data/context';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { Input, InputProps } from 'react-native-elements';
import { IContext } from '@app/interface';
import STYLES from './InputBoxStyle';
interface InputBoxProps extends InputProps {
  refInput?: any,
}

const propsDefaultData: InputBoxProps = {
  placeholder: 'Strings',
};

const InputBox = (props: InputBoxProps) => {
  const context: IContext = useContext(ContextData);
  const { theme } = context;
  const styles = STYLES({ ...theme });
  return (
    <View>
      <Input
        {...props}
        ref={props.refInput}
        autoCompleteType={undefined}
        value={props.value}
        autoCorrect={false}
        style={{}}
        containerStyle={[styles.containerStyle, props.containerStyle]}
        inputContainerStyle={[styles.inputContainerStyle, props.inputContainerStyle]}
        inputStyle={[styles.inputStyle, props.inputStyle]}
      />
    </View>
  );
};

InputBox.defaultProps = propsDefaultData;

export default InputBox;
