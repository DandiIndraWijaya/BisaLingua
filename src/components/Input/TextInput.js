import React, {useState} from 'react';
import {TextInput, StyleSheet, TouchableOpacity, View} from 'react-native';
import color from '../../style/color';

const Input = ({type, placeholder}) => {
  const [border, setBorder] = useState(false);

  const onFocus = () => {
    setBorder(true);
  };

  const onBlur = () => {
    setBorder(false);
  };

  if (type === 'password') {
    return (
      <View style={styles.inputStyle(border)}>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </View>
    );
  }

  return (
    <TextInput
      style={styles.basic(border)}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

const styles = StyleSheet.create({
  basic: border => ({
    borderWidth: 1,
    borderColor: border ? color.primary : 'gainsboro',
    borderRadius: 8,
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    padding: 10,
    color: '#333333',
  }),
  inputStyle: border => ({
    borderWidth: 1,
    borderColor: border ? color.primary : 'gainsboro',
    borderRadius: 8,
  }),
  input: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    padding: 10,
    color: '#333333',
  },
});

export default Input;
