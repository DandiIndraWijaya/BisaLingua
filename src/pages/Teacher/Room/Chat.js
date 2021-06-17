import React, {useState, useEffect} from 'react';
import Header from '../../../components/Header';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import MontserratText from '../../../components/MontserratText';
import Input from '../../../components/Input/TextInput';
import Paper from '../../../components/Paper';
import {Card} from 'react-native-elements';
import color from '../../../style/color';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';

const Chat = ({navigation}) => {
  const [myChat, setMyChat] = useState([]);
  const [input, setIntput] = useState('');

  useEffect(() => {
    setIntput('');
  }, [myChat]);
  return (
    <>
      <Header
        onPress={() => navigation.goBack()}
        subtitle="Chat Randi"
        avatar={true}
      />
      <Paper>
        <View style={{height: '80%'}}>
          {myChat.map((chat, i) => {
            return (
              <View
                style={{
                  backgroundColor: color.primary,
                  padding: 10,
                  marginVertical: 5,
                  alignSelf: 'flex-start',
                  borderRadius: 10,
                }}>
                <MontserratText
                  style={{color: color.fontPrimary, fontSize: 18}}>
                  {chat.chat}
                </MontserratText>
                <View>
                  <MontserratText
                    style={{
                      color: color.fonstSecondary,
                      fontSize: 10,
                      marginTop: 5,
                    }}>
                    {chat.time}
                  </MontserratText>
                </View>
              </View>
            );
          })}
        </View>
        <View
          style={{
            backgroundColor: color.white,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            paddingVertical: 15,
            bottom: 70,
            position: 'absolute',
          }}>
          <View style={{flexBasis: '90%'}}>
            <Input
              placeholder="Tulis pesan"
              width="100%"
              onChangeText={value => setIntput(value)}
              value={input}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              let array = [...myChat];
              array.push({
                time: 'Baru saja',
                chat: input,
              });
              setMyChat(array);
            }}>
            <View style={{flexBasis: '10%', padding: 5}}>
              <FontAwesomeIcon
                size={42}
                color={color.fonstSecondary}
                icon={faTelegram}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Paper>
    </>
  );
};

export default Chat;
