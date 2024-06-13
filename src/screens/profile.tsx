import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import MenuButton from '@app/components/menu/button';

import ScreenView from '@app/components/screen/view';

export default function Profile({navigation}) {
  return (
    <ScreenView>
      <ScrollView style={styles.container}>
        <MenuButton navigation={navigation} />
        <Text style={{color: 'white'}}>Profile</Text>
      </ScrollView>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0000000',
  },
});
