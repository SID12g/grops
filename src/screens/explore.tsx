import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ProfileCard from '@app/components/profile/card';
import MenuButton from '@app/components/menu/button';
import ContentBar from '@app/components/content/bar';
import ContentSquare from '@app/components/content/square';

export default function Explore() {
  return (
    <View style={styles.container}>
      <MenuButton />
      <ContentSquare />
      <ScrollView horizontal={true} style={styles.profile_wrap}>
        <View style={{width: 20}} />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </ScrollView>
      <View style={styles.contents_wrap}>
        <ContentBar />
        <ContentBar />
        <ContentBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },

  profile_wrap: {
    marginTop: 36,
    display: 'flex',
    flexDirection: 'row',
  },

  contents_wrap: {
    marginTop: 36,
  },
});
