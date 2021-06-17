import React from 'react';
import Header from '../../../components/Header';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import MontserratText from '../../../components/MontserratText';
import {Card} from 'react-native-elements';
import color from '../../../style/color';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Input from '../../../components/Input/TextInput';

const data = [
  {
    title: 'PART OF SPEECH - 1',
    durasi: '03:40',
    tingkat: 'Pemula',
    image:
      'https://banner2.cleanpng.com/20180410/uzw/kisspng-flag-of-the-united-kingdom-flag-of-spain-flag-of-e-flag-5acca872879883.1080297015233619065554.jpg',
  },
  {
    title: 'PART OF SPEECH - 2',
    durasi: '12:40',
    tingkat: 'Pemula',
    image:
      'https://banner2.cleanpng.com/20180410/uzw/kisspng-flag-of-the-united-kingdom-flag-of-spain-flag-of-e-flag-5acca872879883.1080297015233619065554.jpg',
  },
  {
    title: 'SPEAKING - 1',
    durasi: '05:50',
    tingkat: 'Pemula',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_-_Union_Flag.jpg',
  },
  {
    title: 'SPEAKING - 2',
    durasi: '07:10',
    tingkat: 'Pemula',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_-_Union_Flag.jpg',
  },
  {
    title: 'SPEAKING 3',
    durasi: '20:40',
    tingkat: 'Pemula',
    image:
      'https://upload.wikimedia.org/wikipedia/id/thumb/0/0d/Bendera-bendera_britania_raya.jpg/300px-Bendera-bendera_britania_raya.jpg',
  },
];

const ListSubjects = ({navigation}) => {
  return (
    <>
      <Header onPress={() => navigation.goBack()} subtitle="Randi's Room" />
      <Card containerStyle={styles.cardItem}>
        <Card.Image
          source={{
            uri: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          }}
        />
        {/* <View style={styles.cardTextContainer}>
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
                </View> */}
      </Card>
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
          <Input placeholder="Cari Pelajaran" width="100%" />
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
              onPress={() => navigation.navigate('Class')}>
              <Card containerStyle={styles.cardItem} key={i}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{width: '40%'}}>
                    <Card.Image
                      source={{
                        uri: d.image,
                      }}
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
