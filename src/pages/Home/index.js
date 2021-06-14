import React, {useEffect} from 'react';
import {
  View,
  BackHandler,
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Paper from '../../components/Paper';
import MontserratText from '../../components/MontserratText';
import Header from '../../components/Header';
import {Card} from 'react-native-elements';
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

  // BackHandler.addEventListener('hardwareBackPress', handleBackButton);
  let {width} = Dimensions.get('window');

  return (
    <>
      {/* <Header icon="none" navigation={navigation} /> */}
      <Paper>
        <ScrollView>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              flexDirection: 'row',
            }}>
            <Image
              style={{width: width * 0.5, height: 110}}
              source={require('../../assets/icons/icon2.png')}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('ChooseCourse')}>
            <Card containerStyle={styles.cardItem}>
              <Card.Image
                style={{borderRadius: 20}}
                source={{
                  uri: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                }}
              />
              <View style={styles.cardText}>
                <MontserratText
                  style={{
                    color: '#ffff',
                    lineHeight: 25,
                  }}>
                  Belajar bahasa dari berbagai dunia melalui guru :)
                </MontserratText>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('PilihBahasa')}>
            <Card containerStyle={styles.cardItem}>
              <Card.Image
                style={{borderRadius: 20}}
                source={{
                  uri: 'https://images.unsplash.com/photo-1555431189-0fabf2667795?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
                }}
              />
              <View style={styles.cardText}>
                <MontserratText
                  style={{
                    margin: 5,
                    color: '#ffff',
                    lineHeight: 25,
                  }}>
                  Belajar pengucapan
                </MontserratText>
              </View>
            </Card>
          </TouchableOpacity>
          <Card containerStyle={styles.cardItem}>
            <Card.Image
              style={{borderRadius: 20}}
              source={{
                uri: 'https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=838&q=80',
              }}
            />
            <View style={styles.cardText}>
              <MontserratText
                style={{
                  margin: 5,
                  color: '#ffff',
                  lineHeight: 25,
                }}>
                Atur akun anda
              </MontserratText>
            </View>
          </Card>
          <Card containerStyle={styles.cardItem}>
            <Card.Image
              style={{borderRadius: 20}}
              source={{
                uri: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
              }}
            />
            <View style={styles.cardText}>
              <MontserratText
                style={{
                  margin: 5,
                  color: '#ffff',
                  lineHeight: 25,
                }}>
                Tentang BisaLingua
              </MontserratText>
            </View>
          </Card>
          <View style={{margin: 20}} />
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
