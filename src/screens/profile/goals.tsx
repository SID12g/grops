import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ProfileGoals() {
  return (
    <View style={{backgroundColor: 'red', height: 500}}>
      <Text style={styles.text}>GOASLS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
  },
});
