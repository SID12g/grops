import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function ContentBar() {
  return (
    <TouchableOpacity style={styles.content}>
      <Image
        style={styles.content_image}
        source={require('@app/../assets/images/salad.png')}
      />
      <Text style={styles.content_text}>더욱 건강한 나를 향해서</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 16,
    marginHorizontal: 20,
  },

  content_image: {
    width: '100%',
    height: 64,
    opacity: 0.6,
    borderRadius: 30,
  },

  content_text: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'WantedSans-SemiBold',
    position: 'absolute',
    marginHorizontal: 24,
  },
});
