import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import { ILSearch } from '../../../assets'
// import { colors, fonts, width } from '../../../utils/'
// import { Button } from '../../atom'
import HeaderDark from './HeaderDark';
import HeaderMaps from './HeaderMaps';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const Header = ({
  title,
  onPress,
  icon,
  type,
  color,
  background,
  subtitle,
  isSearch,
  onPressSearch,
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
        {icon != 'none' && <Button type={type} icon={icon} onPress={onPress} />}
        <Text style={styles.title(color)}>
          {title}{' '}
          {subtitle != undefined && (
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
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: background => ({
    backgroundColor: background == undefined ? '#ffff' : background,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: background == undefined ? 3 : 0,
  }),
  title: color => ({
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
    color: color == undefined ? '#0000' : color,
  }),
});
