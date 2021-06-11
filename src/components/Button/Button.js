import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 58,
    width: '100%',
  },
  title: {
    fontSize: 18,
    marginLeft: 12,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
  },
});
