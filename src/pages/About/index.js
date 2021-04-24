import React from 'react';
import {View} from 'react-native';
import Paper from '../../components/Paper';
import MontserratText from '../../components/MontserratText';

const About = () => {
  return (
    <Paper>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <MontserratText>About!</MontserratText>
      </View>
    </Paper>
  );
};

export default About;
