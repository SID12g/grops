import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ProfileRating({
  number,
  title,
}: {
  number: number;
  title: string;
}) {
  return (
    <View style={styles.number_wrap}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  number_wrap: {
    display: 'flex',
    alignItems: 'center',
  },

  number: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'WantedSans-Medium',
  },

  title: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'WantedSans-Medium',
  },
});
