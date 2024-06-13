import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Kakao from '@app/../assets/svg/kakao.svg';
import ScreenView from '@app/components/screen/view';

export default function Login({navigation}) {
  return (
    <ScreenView>
      <View style={styles.container}>
        <Text style={styles.logo}>Grops.</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Explore');
          }}
          style={styles.button}>
          <Kakao />
          <Text style={styles.text}>Login with Kakao</Text>
        </TouchableOpacity>
      </View>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
  },

  logo: {
    fontSize: 60,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'WantedSans-Regular',
    letterSpacing: -2.4,
    bottom: 32,
  },

  button: {
    backgroundColor: '#FEE500',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    marginLeft: 20,
    bottom: 32,
  },

  text: {
    color: '#000000',
    fontSize: 16,
    marginLeft: 10,
  },
});
