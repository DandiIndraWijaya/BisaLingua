import React from 'react';
import {Text} from 'react-native';

const MontserratText = ({style, children}) => {
  return (
    <Text style={{...style, fontFamily: 'Montserrat-Regular'}}>{children}</Text>
  );
};

export default MontserratText;
