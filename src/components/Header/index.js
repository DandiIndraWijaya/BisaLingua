import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faCircle} from '@fortawesome/free-solid-svg-icons';
import color from '../../style/color';
import MontserratText from '../MontserratText';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const Header = ({
  title,
  onPress,
  icon,
  type,
  background,
  subtitle,
  isSearch,
  onPressSearch,
  navigation,
  avatar,
}) => {
  return (
    <SafeAreaView style={styles.wrapper(background)}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          height: APPBAR_HEIGHT,
        }}>
        {icon !== 'none' && (
          <TouchableOpacity onPress={onPress}>
            <FontAwesomeIcon
              size={32}
              color={color.secondary}
              icon={faArrowLeft}
            />
          </TouchableOpacity>
        )}
        <MontserratText style={styles.title}>
          {title}{' '}
          {subtitle !== undefined && (
            <Text
              style={{
                color: color.fontPrimary,
                fontSize: 14,
              }}>
              {subtitle}
            </Text>
          )}
        </MontserratText>
        {/* {isSearch && (
          <TouchableOpacity onPress={onPressSearch}>
            <ILSearch />
          </TouchableOpacity>
        )} */}
        {avatar && (
          <>
            <View style={{position: 'absolute', right: 70}}>
              <MontserratText
                style={{fontSize: 10, color: color.fonstSecondary}}>
                Online
              </MontserratText>
            </View>
            <View style={{position: 'absolute', right: 20}}>
              {/* <TouchableOpacity onPress={() => navigation.navigate('User')}> */}
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                }}
                style={{width: 40, height: 40, borderRadius: 20}}
              />
              {/* </TouchableOpacity> */}
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: background => ({
    backgroundColor: background === undefined ? '#ffff' : background,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: background === undefined ? 3 : 0,
  }),
  title: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
    color: color === undefined ? '#0000' : color,
  },
});
