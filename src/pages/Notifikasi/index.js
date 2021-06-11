import React, {useEffect} from 'react';
import {View, BackHandler, Alert} from 'react-native';
import Paper from '../../components/Paper';
import MontserratText from '../../components/MontserratText';
import Header from '../../components/Header';

const Notifikasi = ({navigation}) => {
  const handleBackButton = () => {
    Alert.alert(
      'Keluar',
      'Keluar dari Aplikasi?',
      [
        {
          text: 'Batal',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      },
    );
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
  }, []);

  return (
    <>
      <Header icon="none" navigation={navigation} />
      <Paper>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <MontserratText style={{color: 'black'}}>Notifikasi!</MontserratText>
        </View>
      </Paper>
    </>
  );
};

export default Notifikasi;
