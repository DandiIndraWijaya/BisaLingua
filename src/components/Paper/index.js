import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import MontserratText from '../MontserratText';

const Paper = ({children}) => {
  return (
    <>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingBottom: 80,
        }}>
        <View style={styles.paper}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <MontserratText
              style={{flex: 1, top: 10, backgroundColor: 'white'}}>
              Logo
            </MontserratText>
            <MontserratText
              style={{
                flex: 1,
                top: 10,
                backgroundColor: 'white',
                textAlign: 'right',
              }}>
              Dandi Indra Wijaya
            </MontserratText>
          </View>
          {children}
        </View>
      </View>
    </>
  );
};

export default Paper;

const styles = StyleSheet.create({
  paper: {
    marginTop: 10,
    width: '95%',
    minHeight: 700,
    borderWidth: 1,
    borderColor: 'gainsboro',
    borderStyle: 'solid',
    borderRadius: 20,
    padding: 10,
    position: 'relative',
  },
});
