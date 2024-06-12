import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function ContentSquare() {
  return (
    <View style={styles.content}>
      <Image
        style={styles.content_image}
        source={require('@app/../assets/images/salad.png')}
      />
      <Text style={styles.content_text}>샐러드</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column-reverse',
    marginHorizontal: 20,
  },

  content_image: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1 / 1,
    borderRadius: 30,
  },

  content_text: {
    color: '#ffffff',
    fontSize: 60,
    fontFamily: 'WantedSans-Medium',
    position: 'absolute',
    padding: 20,
  },
});
