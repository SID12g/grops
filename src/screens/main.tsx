import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import MenuButton from '@app/components/menu/button';
import ContentBar from '@app/components/content/bar';
import ScreenView from '@app/components/screen/view';

export default function Main({navigation}) {
  return (
    <ScreenView>
      <ScrollView style={styles.container}>
        <MenuButton navigation={navigation} />
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

  contents_wrap: {
    marginTop: 36,
  },
});
