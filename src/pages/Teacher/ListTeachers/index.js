import React from 'react';
import Header from '../../../components/Header';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import MontserratText from '../../../components/MontserratText';
import {Card} from 'react-native-elements';
import color from '../../../style/color';

const data = [
  {
    name: 'Sinta Okta',
    languageTeach: 'Bahasa Inggris',
    description: 'Belajar bahasa Inggris Menyenangkan',
  },
  {
    name: 'Sinta Okta',
    languageTeach: 'Bahasa Inggris',
    description: 'Belajar bahasa Inggris Menyenangkan',
  },
  {
    name: 'Sinta Okta',
    languageTeach: 'Bahasa Inggris',
    description: 'Belajar bahasa Inggris Menyenangkan',
  },
  {
    name: 'Sinta Okta',
    languageTeach: 'Bahasa Inggris',
    description: 'Belajar bahasa Inggris Menyenangkan',
  },
  {
    name: 'Sinta Okta',
    languageTeach: 'Bahasa Inggris',
    description: 'Belajar bahasa Inggris Menyenangkan',
  },
  {
    name: 'Sinta Okta',
    languageTeach: 'Bahasa Inggris',
    description: 'Belajar bahasa Inggris Menyenangkan',
  },
  {
    name: 'Sinta Okta',
    languageTeach: 'Bahasa Inggris',
    description: 'Belajar bahasa Inggris Menyenangkan',
  },
];

const ListTeachers = ({navigation}) => {
  return (
    <>
      <Header onPress={() => navigation.goBack()} subtitle="Daftar Guru" />
      <ScrollView style={{backgroundColor: color.white}}>
        {data.map((d, i) => {
          return (
            <TouchableOpacity
              key={i}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('ListSubjects')}>
              <Card containerStyle={styles.cardItem}>
                <Card.Image
                  source={require('../../../assets/images/japan5.jpg')}
                />
                <View style={styles.cardTextContainer}>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <View>
                      <MontserratText style={styles.cardText}>
                        {d.name}
                      </MontserratText>
                    </View>
                    <View style={styles.languageCategory}>
                      <MontserratText style={{color: color.white}}>
                        {d.languageTeach}
                      </MontserratText>
                    </View>
                  </View>
                  <MontserratText style={styles.cardTextSub}>
                    {d.description}
                  </MontserratText>
                </View>
              </Card>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};

export default ListTeachers;

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
    position: 'absolute',
    right: 5,
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
