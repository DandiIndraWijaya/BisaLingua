import React from 'react';
import {View, ScrollView} from 'react-native';
import {Divider, Card} from 'react-native-elements';
import Header from '../../../components/Header';
import MontserratText from '../../../components/MontserratText';
import Paper from '../../../components/Paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFile} from '@fortawesome/free-solid-svg-icons';
import color from '../../../style/color';

const Sumbission = ({navigation}) => {
  return (
    <>
      <Header onPress={() => navigation.goBack()} subtitle="Submission 1" />
      <Paper>
        <ScrollView>
          <Card>
            <MontserratText style={{marginBottom: 10, fontSize: 16}}>
              Submission 1
            </MontserratText>
            <Divider />
            <MontserratText style={{marginTop: 10}}>
              Buatlah video Perkanalan diri berdurasi minimal 3 menit.
            </MontserratText>
          </Card>
          <Card>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View>
                <FontAwesomeIcon
                  size={32}
                  color={color.secondary}
                  icon={faFile}
                />
              </View>
              <View style={{marginLeft: 20}}>
                <MontserratText>
                  Upload File Submission (.mp4, .mkv)
                </MontserratText>
              </View>
            </View>
          </Card>
          <Card>
            <MontserratText>Nilai :</MontserratText>
            <MontserratText
              style={{textAlign: 'center', fontSize: 30, color: color.primary}}>
              ? / 100
            </MontserratText>
          </Card>
        </ScrollView>
      </Paper>
    </>
  );
};

export default Sumbission;
