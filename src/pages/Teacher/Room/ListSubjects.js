import React from 'react';
import Header from '../../../components/Header';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import MontserratText from '../../../components/MontserratText';
import {Card} from 'react-native-elements';
import color from '../../../style/color';

const data = [
  {
    title: 'Belajar Huruf dasar 1',
    durasi: '03:40',
    tingkat: 'Pemula',
  },
  {
    title: 'Belajar Huruf dasar 2',
    durasi: '03:40',
    tingkat: 'Pemula',
  },
  {
    title: 'Belajar Speech Dasar 1',
    durasi: '03:40',
    tingkat: 'Pemula',
  },
  {
    title: 'Belajar Speech Dasar 2',
    durasi: '03:40',
    tingkat: 'Pemula',
  },
  {
    title: 'Belajar Speech Dasar 3',
    durasi: '03:40',
    tingkat: 'Pemula',
  },
];

const ListSubjects = ({navigation}) => {
  return (
    <>
      <Header
        onPress={() => navigation.goBack()}
        subtitle="Sinta Okta's Room"
      />
      <ScrollView style={{backgroundColor: color.white}}>
        {data.map((d, i) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Class')}>
              <Card containerStyle={styles.cardItem} key={i}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{width: '40%'}}>
                    <Card.Image
                      source={require('../../../assets/images/japan5.jpg')}
                      style={{width: '100%'}}
                    />
                  </View>
                  <View>
                    <View style={styles.cardTextContainer}>
                      <View>
                        <MontserratText style={styles.cardText}>
                          {d.title}
                        </MontserratText>
                      </View>
                      <View>
                        <MontserratText style={styles.cardTextSub}>
                          {d.tingkat}
                        </MontserratText>
                      </View>
                      <View style={styles.languageCategory}>
                        <MontserratText style={{color: color.white}}>
                          {d.durasi}
                        </MontserratText>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};

export default ListSubjects;

const styles = StyleSheet.create({
  cardItem: {
    marginTop: 5,
    padding: 0,
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
  cardTextContainer: {
    padding: 5,
    shadowColor: color.fontPrimary,
  },
  cardText: {
    marginTop: 5,
    marginBottom: 0,
    marginHorizontal: 5,
    color: color.fontPrimary,
    lineHeight: 25,
  },
  languageCategory: {
    margin: 5,
    backgroundColor: color.old,
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 20,
  },
  cardTextSub: {
    marginBottom: 5,
    marginHorizontal: 5,
    color: color.fonstSecondary,
    lineHeight: 25,
    fontSize: 12,
  },
});
