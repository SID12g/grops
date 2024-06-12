import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ProfileCard() {
  return (
    <View style={styles.profile}>
      <Image
        style={styles.profile_image}
        source={require('@app/../assets/images/ryo.png')}
      />
      <Text style={styles.profile_name}>Ryo</Text>
      <Text style={styles.profile_tag}>@ryo_yamada</Text>
      <TouchableOpacity style={styles.follow_button}>
        <Text style={styles.follow_text}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    width: 140,
    height: 204,
    backgroundColor: '#141414',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 30,
    marginRight: 12,
  },

  profile_image: {
    width: 84,
    height: 84,
    borderRadius: 100,
    marginTop: 16,
  },

  profile_name: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'WantedSans-Medium',
    marginTop: 6,
  },

  profile_tag: {
    color: '#d6d6d6',
    fontSize: 12,
    fontFamily: 'WantedSans-Regular',
    marginTop: 6,
  },

  follow_button: {
    backgroundColor: '#ffffff',
    display: 'flex',
    borderRadius: 30,
    marginTop: 10,
  },

  follow_text: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'WantedSans-Medium',
    paddingTop: 10,
    paddingRight: 36,
    paddingBottom: 10,
    paddingLeft: 36,
  },
});
