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

const SpeechRecognation = ({navigation}) => {
  return (
    <>
      <Header
        onPress={() => navigation.goBack()}
        subtitle="Games belajar Bahasa Inggris"
      />
      <Paper>
        <ScrollView />
      </Paper>
    </>
  );
};

export default SpeechRecognation;

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
