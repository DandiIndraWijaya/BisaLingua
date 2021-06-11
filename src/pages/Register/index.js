import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Paper from '../../components/Paper';
import Header from '../../components/Header';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/TextInput';
import Gap from '../../components/Gap';

const Register = ({navigation}) => {
  return (
    <>
      <Header onPress={() => navigation.goBack()} />
      <Paper>
        <View>
          <View style={styles.container}>
            <View style={{width: '100%'}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  marginVertical: 5,
                  marginLeft: 5,
                }}>
                Nama Anda
              </Text>
              <Input placeholder="Nama" />
              <Gap heigth={5} />
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  marginVertical: 5,
                  marginLeft: 5,
                }}>
                Email Anda
              </Text>
              <Input placeholder="Email" />
              <Gap heigth={5} />
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  marginBottom: 5,
                  marginLeft: 5,
                }}>
                Password
              </Text>
              <Input type="password" />
              <Gap heigth={5} />
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  marginBottom: 5,
                  marginLeft: 5,
                }}>
                Ulangi Password
              </Text>
              <Input type="password" />
              <Gap heigth={10} />
              <Button title="Daftar" onPress={() => navigation.goBack()} />
            </View>
          </View>
        </View>
      </Paper>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
