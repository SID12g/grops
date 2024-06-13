import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function ScreenView({children}) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {paddingTop: Platform.OS === 'ios' ? insets.top : insets.top + 20},
      ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#000000',
  },
});
