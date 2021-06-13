import React, {useEffect} from 'react';
import {View, BackHandler, Alert, ScrollView, StyleSheet} from 'react-native';
import Paper from '../../components/Paper';
import MontserratText from '../../components/MontserratText';
import Header from '../../components/Header';
import {Card, Button, Icon} from 'react-native-elements';
import color from '../../style/color';

const Home = ({navigation}) => {
  const handleBackButton = () => {
    Alert.alert(
      'Keluar',
      'Keluar dari Aplikasi?',
      [
        {
          text: 'Batal',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      },
    );
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
  }, []);

  return (
    <>
      {/* <Header icon="none" navigation={navigation} /> */}
      <Paper>
        {/* <View>
          <MontserratText style={{color: 'black'}}>Home!</MontserratText>
        </View> */}
        <ScrollView>
          <Card containerStyle={styles.cardItem}>
            <Card.Image
              style={{borderRadius: 20}}
              source={require('../../assets/images/japan5.jpg')}
            />
            <View style={styles.cardText}>
              <MontserratText
                style={{
                  margin: 5,
                  color: '#ffff',
                  lineHeight: 25,
                }}>
                Belajar bahasa dari berbagai dunia dari guru :)
              </MontserratText>
            </View>
          </Card>
          <Card containerStyle={styles.cardItem}>
            <Card.Image
              style={{borderRadius: 20}}
              source={require('../../assets/images/japan5.jpg')}
            />
            <View style={styles.cardText}>
              <MontserratText
                style={{
                  margin: 5,
                  color: '#ffff',
                  lineHeight: 25,
                }}>
                Belajar bahasa dari berbagai dunia dari guru :)
              </MontserratText>
            </View>
          </Card>
        </ScrollView>
      </Paper>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  cardItem: {
    padding: 0,
    borderRadius: 20,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  cardText: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: color.old,
    borderRadius: 20,
    padding: 5,
    shadowColor: color.fontPrimary,
  },
});
