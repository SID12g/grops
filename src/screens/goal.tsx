import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Goal() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content_container}>
      <View style={styles.image_container}>
        <ImageBackground
          style={styles.represent_image}
          source={require('@app/../assets/images/contents/salad.png')}>
          <LinearGradient
            colors={['transparent', 'rgba(0, 0, 0, 1)']}
            style={styles.gradient}
          />
          <View style={styles.information}>
            <Text style={styles.user}>@ryo_yamada</Text>
            <Text style={styles.title}>더욱 건강한 나를 향해서</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.mission_wrap}>
        <Mission
          day={3}
          image={require('@app/../assets/images/contents/salad3.png')}
        />
        <Mission
          day={2}
          image={require('@app/../assets/images/contents/salad2.png')}
        />
        <Mission
          day={1}
          image={require('@app/../assets/images/contents/salad1.png')}
        />
      </View>
    </ScrollView>
  );
}

function Mission({day, image}: {day: number; image: any}) {
  return (
    <TouchableOpacity style={styles.mission_container}>
      <Image style={styles.mission_image} source={image} />
      <Text style={styles.mission_text}>Day {day}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },

  content_container: {
    paddingTop: 0,
  },

  image_container: {
    position: 'relative',
  },

  represent_image: {
    width: screenWidth,
    height: screenHeight * 0.4,
    resizeMode: 'cover',
  },

  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
  },

  information: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: 20,
    bottom: 32,
  },

  user: {
    color: '#D6D6D6',
    fontSize: 12,
    fontFamily: 'WantedSans-Regular',
  },

  title: {
    color: '#ffffff',
    fontSize: 32,
    fontFamily: 'WantedSans-SemiBold',
    marginTop: 4,
  },

  mission_wrap: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  mission_container: {
    marginBottom: 20,
  },

  mission_image: {
    width: '100%',
    height: 130,
    borderRadius: 16,
    opacity: 0.6,
    position: 'relative',
  },

  mission_text: {
    color: '#ffffff',
    fontSize: 32,
    fontFamily: 'WantedSans-Medium',
    position: 'absolute',
    left: 16,
    bottom: 16,
  },
});
