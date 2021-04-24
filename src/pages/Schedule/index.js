import React from 'react';
import {View} from 'react-native';
import Paper from '../../components/Paper';
import MontserratText from '../../components/MontserratText';

const Schedule = () => {
  return (
    <Paper>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <MontserratText>Schedule!</MontserratText>
      </View>
    </Paper>
  );
};

export default Schedule;
