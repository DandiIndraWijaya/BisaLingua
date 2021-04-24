import React from 'react';
import {View} from 'react-native';
import Paper from '../../components/Paper';
import MontserratText from '../../components/MontserratText';

const User = () => {
  return (
    <Paper>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <MontserratText>User!</MontserratText>
      </View>
    </Paper>
  );
};

export default User;
