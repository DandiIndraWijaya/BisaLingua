import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import fonts from '../../utils';

const Paper = ({children}) => {
  return (
    <>
      <ScrollView>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: 'white',
            paddingBottom: 100,
          }}>
          <View style={styles.paper}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{flex: 1, top: 10, backgroundColor: 'white'}}>
                Logo
              </Text>
              <Text
                style={{
                  flex: 1,
                  top: 10,
                  backgroundColor: 'white',
                  textAlign: 'right',
                  fontFamily: fonts.primary.normal,
                }}>
                Dandi Indra Wijaya
              </Text>
            </View>
            {children}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Paper;

const styles = StyleSheet.create({
  paper: {
    marginTop: 10,
    width: '95%',
    minHeight: 650,
    borderWidth: 1,
    borderColor: 'gainsboro',
    borderStyle: 'solid',
    borderRadius: 20,
    padding: 10,
    position: 'relative',
  },
});
