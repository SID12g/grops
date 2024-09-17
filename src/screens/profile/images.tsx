import {imageData} from '@app/utils/database';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function ProfileImages() {
  return (
    <View style={styles.images_wrap}>
      {imageData.map((data, index) => (
        <TouchableOpacity key={index} style={styles.image}>
          <Image style={styles.image} source={data.data} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  images_wrap: {
    height: (screenWidth / 3) * 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#000000',
  },

  image: {
    width: screenWidth / 3,
    height: screenWidth / 3,
  },
});
