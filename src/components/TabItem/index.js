import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faClock,
  faCalendar,
  faUser,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const [titleTab, setTitleTab] = useState(title);

  useEffect(() => {
    console.log(titleTab);
  }, [title, active]);

  useEffect(() => {
    if (title === 'KategoriProduk') {
      setTitleTab('Produk');
    }
  }, []);

  const Icon = () => {
    if (title == 'Home') {
      return <FontAwesomeIcon icon={faClock} />;
    }
    if (title == 'Settings') {
      return <FontAwesomeIcon icon={faCalendar} />;
    }
    return <FontAwesomeIcon icon={faUser} />;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.2}
      style={styles.container}
      onPress={onPress}
      onPressIn={() => (title == 'Info' ? setBadge(0) : null)}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.title(active)}>{titleTab}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: active => ({
    fontSize: 10,
    color: active ? 'black' : 'blue',
    marginTop: 4,
  }),
  icon: {
    width: 22,
    height: 22,
  },
});
