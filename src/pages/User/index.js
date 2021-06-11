import React from 'react';
import {View, Button, TouchableOpacity, Text} from 'react-native';
import Paper from '../../components/Paper';
import MontserratText from '../../components/MontserratText';

const User = ({navigation}) => {
  return (
    <Paper>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <MontserratText>User!</MontserratText>
        <TouchableOpacity onPress={() => navigation.navigate('CekStack')}>
          <Text>Tekan</Text>
        </TouchableOpacity>
      </View>
    </Paper>
  );
};

export default User;
