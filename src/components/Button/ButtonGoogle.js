import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import GoogleIcon from '../../assets/icons/google.svg';
import color from '../../style/color';

const ButtonGoogle = ({title, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          position: 'absolute',
        }}>
        <GoogleIcon />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonGoogle;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 52,
    flex: 1,
    borderColor: color.old,
    borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 58,
  },
  title: {
    fontSize: 18,
    marginLeft: 12,
    color: color.old,
    fontFamily: 'Montserrat-Regular',
  },
});
