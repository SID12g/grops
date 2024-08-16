import {imageData} from '@app/utils/database';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function ProfileImages() {
  return (
    <View
      style={{
        backgroundColor: '#30be80',
        height: 1900,
      }}>
      {imageData.map((data, index) => (
        <View key={index} style={{display: 'flex', flexDirection: 'row'}}>
          <TouchableOpacity style={styles.image}>
            <Image
              style={styles.image}
              source={require('@app/../assets/images/contents/salad1.png')}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: screenWidth / 3,
    height: screenWidth / 3,
  },
});
