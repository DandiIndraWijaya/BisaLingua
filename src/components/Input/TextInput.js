import React, {useState} from 'react';
import {TextInput, StyleSheet, TouchableOpacity, View} from 'react-native';
import color from '../../style/color';

const Input = ({type, placeholder, onChangeText, width}) => {
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
          style={styles.basic(border, width)}
          secureTextEntry={true}
          placeholder="Password"
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChangeText}
        />
      </View>
    );
  }

  return (
    <TextInput
      style={styles.basic(border, width)}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  basic: (border, width) => ({
    borderWidth: 1,
    borderColor: border ? color.primary : 'gainsboro',
    borderRadius: 8,
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    padding: 10,
    color: '#333333',
    width: width === undefined ? '100%' : width,
  }),
  inputStyle: border => ({
    borderWidth: 1,
    borderColor: border ? color.primary : 'gainsboro',
    borderRadius: 8,
  }),
  input: width => ({
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    padding: 10,
    color: '#333333',
  }),
});

export default Input;
