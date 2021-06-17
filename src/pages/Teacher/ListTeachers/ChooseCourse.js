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
import Paper from '../../../components/Paper';
import MontserratText from '../../../components/MontserratText';
import Header from '../../../components/Header';
import {Card} from 'react-native-elements';
import color from '../../../style/color';

const ChooseCourse = ({navigation}) => {
  let {width} = Dimensions.get('window');

  return (
    <>
      <Header
        onPress={() => navigation.goBack()}
        subtitle="Pilih Tipe Pembelajaran"
      />
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
              // style={{width: width * 0.5, height: 110}}
              source={require('../../../assets/icons/icon2.png')}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('PaidCourse')}>
            <Card containerStyle={styles.cardItem}>
              <Card.Image
                style={{borderRadius: 20}}
                source={{
                  uri: 'https://images.unsplash.com/photo-1524639064490-254e0a1db723?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                }}
              />
              <View style={styles.cardText}>
                <MontserratText
                  style={{
                    color: '#ffff',
                    lineHeight: 25,
                  }}>
                  Belajar bahasa secara intens (Mendapat Sertifikat)
                </MontserratText>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('ListTeachers')}>
            <Card containerStyle={styles.cardItem}>
              <Card.Image
                style={{borderRadius: 20}}
                source={{
                  uri: 'https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=790&q=80',
                }}
              />
              <View style={styles.cardText}>
                <MontserratText
                  style={{
                    margin: 5,
                    color: '#ffff',
                    lineHeight: 25,
                  }}>
                  Belajar bahasa gratis
                </MontserratText>
              </View>
            </Card>
          </TouchableOpacity>
          <View style={{margin: 20}} />
        </ScrollView>
      </Paper>
    </>
  );
};

export default ChooseCourse;

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
