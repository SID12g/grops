import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function ContentBar({
  title,
  image,
}: {
  title: string;
  image: ImageSourcePropType;
}) {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <TouchableOpacity
      style={styles.content}
      onPress={() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'Goal'}],
        });
      }}>
      <Image style={styles.content_image} source={image} />
      <Text style={styles.content_text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 16,
    marginHorizontal: 20,
  },

  content_image: {
    width: '100%',
    height: 64,
    opacity: 0.6,
    borderRadius: 30,
  },

  content_text: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'WantedSans-SemiBold',
    position: 'absolute',
    marginHorizontal: 24,
  },
});
