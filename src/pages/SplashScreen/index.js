import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import SplashLogo from '../../assets/logo/splash_logo.svg';
import color from '../../style/color';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      checkSession();
    }, 3000);
  }, []);

  const checkSession = async () => {
    // await SessionManager.RemoveValue('@location');
    // const dataRepository = await SessionManager.GetAsObject('@user');
    // if (dataRepository != null) {
    //   navigation.replace('Main');
    // } else {
    //   navigation.replace('Login');
    navigation.replace('Login');
  };

  return (
    <View
      style={{
        backgroundColor: color.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SplashLogo />
      <Text
        style={{
          fontSize: 20,
          textTransform: 'uppercase',
        }}
      />
      <ActivityIndicator color={'#ffff'} size={40} />
    </View>
  );
};

export default SplashScreen;
