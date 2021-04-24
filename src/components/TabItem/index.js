import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import color from '../../style/color';
import {
  faClock,
  faCalendar,
  faUser,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const [titleTab, setTitleTab] = useState(title);

  useEffect(() => {
    if (title === 'KategoriProduk') {
      setTitleTab('Produk');
    }
  }, []);

  const Icon = () => {
    if (title === 'Todos') {
      return <FontAwesomeIcon size={32} color="#4c4c4c" icon={faClock} />;
    }
    if (title === 'Schedule') {
      return <FontAwesomeIcon size={32} color="#4c4c4c" icon={faCalendar} />;
    }
    if (title === 'About') {
      return <FontAwesomeIcon size={32} color="#4c4c4c" icon={faBook} />;
    }
    return <FontAwesomeIcon size={32} color="#4c4c4c" icon={faUser} />;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.2}
      style={styles.container}
      onPress={onPress}
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
    fontSize: 14,
    color: active ? color.secondary : color.primary,
    marginTop: 4,
    backgroundColor: active ? color.primary : color.secondary,
    padding: 5,
    borderRadius: 8,
  }),
  icon: {
    width: 22,
    height: 22,
  },
});
