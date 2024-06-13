import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ProfileCard from '@app/components/profile/card';
import MenuButton from '@app/components/menu/button';
import ContentBar from '@app/components/content/bar';
import ContentSquare from '@app/components/content/square';
import ScreenView from '@app/components/screen/view';

export default function Explore({navigation}) {
  return (
    <ScreenView>
      <ScrollView style={styles.container}>
        <MenuButton navigation={navigation} />
        <ContentSquare />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.profile_wrap}>
          <View style={styles.profile_margin} />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </ScrollView>
        <View style={styles.contents_wrap}>
          <ContentBar />
          <ContentBar />
          <ContentBar />
        </View>
      </ScrollView>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0000000',
  },

  profile_wrap: {
    marginTop: 36,
    display: 'flex',
    flexDirection: 'row',
  },

  profile_margin: {
    width: 20,
  },

  contents_wrap: {
    marginTop: 36,
  },
});
