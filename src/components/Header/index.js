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
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import color from '../../style/color';

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
        <Text style={styles.title}>
          {title}{' '}
          {subtitle !== undefined && (
            <Text
              style={{
                color: '#000',
                fontSize: 14,
              }}>
              {subtitle}
            </Text>
          )}
        </Text>
        {/* {isSearch && (
          <TouchableOpacity onPress={onPressSearch}>
            <ILSearch />
          </TouchableOpacity>
        )} */}
        {avatar && (
          <View style={{position: 'absolute', right: 20}}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('User')}> */}
            <Image
              source={require('./5.jpg')}
              style={{width: 40, height: 40, borderRadius: 20}}
            />
            {/* </TouchableOpacity> */}
          </View>
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
