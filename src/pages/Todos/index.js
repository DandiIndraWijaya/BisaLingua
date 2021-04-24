import React from 'react';
import {View} from 'react-native';
import Paper from '../../components/Paper';
import MontserratText from '../../components/MontserratText';

const Todos = () => {
  return (
    <>
      <View>
        <Paper>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <MontserratText>Todos!</MontserratText>
          </View>
        </Paper>
      </View>
    </>
  );
};

export default Todos;
