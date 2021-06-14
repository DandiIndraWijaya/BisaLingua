import React from 'react';
import Header from '../../../components/Header';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import MontserratText from '../../../components/MontserratText';
import Input from '../../../components/Input/TextInput';
import {Card} from 'react-native-elements';
import color from '../../../style/color';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    name: 'Randi',
    languageTeach: 'Bahasa Inggris',
    description: 'Belajar bahasa Inggris Menyenangkan',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    price: 'Rp. 1.000.000',
  },
  {
    name: 'Sinta Okta',
    languageTeach: 'Bahasa Mandarin',
    description: 'Belajar bahasa Mandarin skuy :)',
    image:
      'https://images.unsplash.com/photo-1510832198440-a52376950479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
    price: 'Rp. 2.000.000',
  },
  {
    name: 'Ferdy',
    languageTeach: 'Bahasa Jerman',
    description: '"Let\'s Learn Germany"',
    image:
      'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80',
    price: 'Rp. 3.000.000',
  },
  {
    name: 'Claudia',
    languageTeach: 'Bahasa Rusia',
    description: 'Belajar bahasa Rusia menyenangkan',
    image:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    price: 'Rp. 2.000.000',
  },
];

const PaidCourse = ({navigation}) => {
  return (
    <>
      <Header onPress={() => navigation.goBack()} subtitle="Daftar Guru" />
      <View
        style={{
          backgroundColor: color.white,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingVertical: 15,
        }}>
        <View style={{flexBasis: '80%'}}>
          <Input placeholder="Cari berdasar nama atau bahasa" width="100%" />
        </View>
        <View style={{flexBasis: '10%', padding: 5}}>
          <TouchableOpacity>
            <FontAwesomeIcon
              size={32}
              color={color.secondary}
              icon={faSearch}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{backgroundColor: color.white}}>
        {data.map((d, i) => {
          return (
            <TouchableOpacity
              key={i}
              activeOpacity={0.7}
              onPress={() => {
                if (i === 0) {
                  navigation.navigate('ListPaidCourse');
                }
              }}>
              <Card containerStyle={styles.cardItem}>
                <Card.Image source={{uri: d.image}} />
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
                  <MontserratText style={styles.price}>
                    {d.price}
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

export default PaidCourse;

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
  price: {
    backgroundColor: color.fontPrimary,
    padding: 5,
    borderRadius: 20,
    color: color.white,
    textAlign: 'center',
    fontSize: 18,
  },
});
