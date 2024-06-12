import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Arrow from '@app/../assets/svg/arrow-down.svg';

export default function MenuButton() {
  return (
    <TouchableOpacity style={styles.menu}>
      <Text style={styles.menu_text}>Explore</Text>
      <Arrow />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: 122,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },

  menu_text: {
    color: '#ffffff',
    fontSize: 28,
    fontFamily: 'WantedSans-Medium',
    marginRight: 4,
  },
});
