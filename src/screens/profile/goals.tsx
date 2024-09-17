import ContentBar from '@app/components/content/bar';
import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function ProfileGoals() {
  return (
    <View style={{backgroundColor: '#000000', height: '100%'}}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
  },

  contents_wrap: {
    marginTop: 36,
  },
});
