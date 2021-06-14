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
      <Header onPress={() => navigation.goBack()} subtitle="Pilih Bahasa" />
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
