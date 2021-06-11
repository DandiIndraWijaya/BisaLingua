import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonGoogle from '../../components/Button/ButtonGoogle';
import Button from '../../components/Button/Button';
import Paper from '../../components/Paper';
import Input from '../../components/Input/TextInput';
import Gap from '../../components/Gap';
import color from '../../style/color';

const Login = ({navigation}) => {
  return (
    <Paper>
      <View style={styles.container}>
        <View style={{width: '100%'}}>
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
          <Gap heigth={10} />
          <Button title="Masuk" onPress={() => navigation.navigate('Main')} />
        </View>
        <View style={{margin: 20}}>
          <Text style={{fontFamily: 'Montserrat-Regular'}}>Atau</Text>
        </View>
        <View style={{width: '100%'}}>
          <ButtonGoogle title="Masuk melalui Google" />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 16}}>
            Belum punya akun?
            <Text
              onPress={() => {
                navigation.navigate('Register');
              }}
              style={{color: color.old, fontWeight: 'bold'}}>
              {' '}
              Daftar disini
            </Text>
          </Text>
        </View>
      </View>
    </Paper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
