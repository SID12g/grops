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
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <MenuButton navigation={navigation} />
        <ContentSquare />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.profile_wrap}>
          <View style={styles.profile_margin} />
          <ProfileCard
            name="Sungmin"
            tag="@sid12g"
            image={require('@app/../assets/images/profiles/cheese.png')}
          />
          <ProfileCard
            name="Ryo"
            tag="@ryo_yamada"
            image={require('@app/../assets/images/profiles/ryo.png')}
          />
          <ProfileCard
            name="Anya"
            tag="@anya"
            image={require('@app/../assets/images/profiles/anya.png')}
          />
        </ScrollView>
        <View style={styles.contents_wrap}>
          <ContentBar
            title="더욱 건강한 나를 향해서"
            image={require('@app/../assets/images/contents/salad.png')}
          />
          <ContentBar
            title="영어 1등급을 쟁취하라"
            image={require('@app/../assets/images/contents/test.png')}
          />
          <ContentBar
            title="잔디 가꾸기"
            image={require('@app/../assets/images/contents/developer.png')}
          />
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
