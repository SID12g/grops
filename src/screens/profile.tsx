import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MenuButton from '@app/components/menu/button';
import ScreenView from '@app/components/screen/view';
import ProfileRating from '@app/components/profile/rating';

const screenWidth = Dimensions.get('window').width;

export default function Profile({navigation}) {
  return (
    <ScreenView>
      <MenuButton navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.profile}>
          <Image
            style={styles.profile_image}
            source={require('@app/../assets/images/profiles/ryo.png')}
          />
          <View>
            <Text style={styles.name}>Ryo</Text>
            <Text style={styles.user_tag}>@ryo_yamada</Text>
          </View>
        </View>
        <View style={styles.rating_container}>
          <ProfileRating number={2} title="Goals" />
          <ProfileRating number={12} title="Keeps" />
          <ProfileRating number={51} title="Followers" />
          <ProfileRating number={26} title="Following" />
        </View>
        <View style={styles.button_wrap}>
          <TouchableOpacity style={styles.button_active}>
            <Text style={styles.button_active_text}>Following</Text>
          </TouchableOpacity>
          <View style={{width: 4}} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>Settings</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0000000',
  },

  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },

  profile_image: {
    width: 80,
    height: 80,
    borderRadius: 200,
  },

  name: {
    color: '#ffffff',
    fontSize: 24,
    fontFamily: 'WantedSans-Medium',
    marginLeft: 12,
    marginBottom: 2,
  },

  user_tag: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'WantedSans-Regular',
    marginLeft: 12,
  },

  rating_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#202020',
    paddingHorizontal: 34,
    paddingVertical: 18,
    borderRadius: 12,
    marginTop: 20,
    marginHorizontal: 20,
  },

  button_wrap: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
  },

  button: {
    width: (screenWidth - 40) / 2 - 2,
    borderColor: '#ffffff',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    borderRadius: 60,
    alignItems: 'center',
  },

  button_text: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'WantedSans-Medium',
  },

  button_active: {
    width: (screenWidth - 40) / 2 - 2,
    borderColor: '#202020',
    borderWidth: 1,
    backgroundColor: '#000000',
    paddingVertical: 10,
    borderRadius: 60,
    alignItems: 'center',
  },

  button_active_text: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'WantedSans-Medium',
  },
});
