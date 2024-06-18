import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ProfileImages() {
  return (
    <View style={{backgroundColor: 'blue', height: 500}}>
      <Text style={styles.text}>Images</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
  },
});
