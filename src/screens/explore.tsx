import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Arrow from '@app/../assets/svg/arrow-down.svg';

export default function Explore() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menu}>
        <Text style={styles.menu_text}>Explore</Text>
        <Arrow />
      </TouchableOpacity>
      <View style={styles.content}>
        <Image
          style={styles.content_image}
          source={require('@app/../assets/images/salad.png')}
        />
        <Text style={styles.content_text}>샐러드</Text>
      </View>
      <ScrollView horizontal={true} style={styles.profile_wrap}>
        <View style={{width: 20}} />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </ScrollView>
      <View style={styles.contents_wrap}>
        <Contents />
        <Contents />
        <Contents />
        <Contents />
      </View>
    </View>
  );
}

function Profile() {
  return (
    <View style={styles.profile}>
      <Image
        style={styles.profile_image}
        source={require('@app/../assets/images/ryo.png')}
      />
      <Text style={styles.profile_name}>Ryo</Text>
      <Text style={styles.profile_tag}>@ryo_yamada</Text>
      <TouchableOpacity style={styles.follow_button}>
        <Text style={styles.follow_text}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
}

function Contents() {
  return (
    <TouchableOpacity style={styles.contents}>
      <Image
        style={styles.contents_image}
        source={require('@app/../assets/images/salad.png')}
      />
      <Text style={styles.contents_text}>더욱 건강한 나를 향해서</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },

  menu: {
    width: 122,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },

  menu_text: {
    color: '#ffffff',
    fontSize: 28,
    fontFamily: 'WantedSans-Medium',
    marginRight: 4,
  },

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

  profile_wrap: {
    marginTop: 36,
    display: 'flex',
    flexDirection: 'row',
  },

  profile: {
    width: 140,
    height: 204,
    backgroundColor: '#141414',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 30,
    marginRight: 12,
  },

  profile_image: {
    width: 84,
    height: 84,
    borderRadius: 100,
    marginTop: 16,
  },

  profile_name: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'WantedSans-Medium',
    marginTop: 6,
  },

  profile_tag: {
    color: '#d6d6d6',
    fontSize: 12,
    fontFamily: 'WantedSans-Regular',
    marginTop: 6,
  },

  follow_button: {
    backgroundColor: '#ffffff',
    display: 'flex',
    borderRadius: 30,
    marginTop: 10,
  },

  follow_text: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'WantedSans-Medium',
    paddingTop: 10,
    paddingRight: 36,
    paddingBottom: 10,
    paddingLeft: 36,
  },

  contents_wrap: {
    marginTop: 36,
  },

  contents: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 16,
    marginHorizontal: 20,
  },

  contents_image: {
    width: '100%',
    height: 64,
    opacity: 0.6,
    borderRadius: 30,
  },

  contents_text: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'WantedSans-SemiBold',
    position: 'absolute',
    marginHorizontal: 24,
  },
});
