import React, {useEffect} from 'react';
import {
  View,
  BackHandler,
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Paper from '../../components/Paper';
import MontserratText from '../../components/MontserratText';
import Header from '../../components/Header';
import {Card} from 'react-native-elements';
import color from '../../style/color';

const PilihBahasa = ({navigation}) => {
  return (
    <>
      <Header
        onPress={() => navigation.goBack()}
        subtitle="Pilih Bahasa Untuk Berlatih"
      />
      <Paper>
        <ScrollView>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('SpeechRecognation')}>
            <Card containerStyle={styles.cardItem}>
              <Card.Image
                style={{borderRadius: 20}}
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png',
                }}
              />
              <View style={styles.cardText}>
                <MontserratText
                  style={{
                    color: '#ffff',
                    lineHeight: 25,
                  }}>
                  Bahasa Inggris
                </MontserratText>
              </View>
            </Card>
          </TouchableOpacity>
          <Card containerStyle={styles.cardItem}>
            <Card.Image
              style={{borderRadius: 20}}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
              }}
            />
            <View style={styles.cardText}>
              <MontserratText
                style={{
                  color: '#ffff',
                  lineHeight: 25,
                }}>
                Jerman
              </MontserratText>
            </View>
          </Card>
          <Card containerStyle={styles.cardItem}>
            <Card.Image
              style={{borderRadius: 20}}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png',
              }}
            />
            <View style={styles.cardText}>
              <MontserratText
                style={{
                  color: '#ffff',
                  lineHeight: 25,
                }}>
                Bahasa Rusia
              </MontserratText>
            </View>
          </Card>
          <Card containerStyle={styles.cardItem}>
            <Card.Image
              style={{borderRadius: 20}}
              source={{
                uri: 'https://img5.goodfon.com/wallpaper/nbig/b/e8/japan-flag-flag-of-japan-japanese-flag-japan-large-flag.jpg',
              }}
            />
            <View style={styles.cardText}>
              <MontserratText
                style={{
                  color: '#ffff',
                  lineHeight: 25,
                }}>
                Bahasa Jepang
              </MontserratText>
            </View>
          </Card>
          <Card containerStyle={styles.cardItem}>
            <Card.Image
              style={{borderRadius: 20}}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/2560px-Flag_of_South_Korea.svg.png',
              }}
            />
            <View style={styles.cardText}>
              <MontserratText
                style={{
                  color: '#ffff',
                  lineHeight: 25,
                }}>
                Bahasa Korea
              </MontserratText>
            </View>
          </Card>
          <View style={{margin: 30}} />
        </ScrollView>
      </Paper>
    </>
  );
};

export default PilihBahasa;

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
