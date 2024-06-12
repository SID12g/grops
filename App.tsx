import React from 'react';

import {ScrollView, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Login from './src/screens/login';
import Explore from '@app/screens/explore';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <StatusBar backgroundColor="black" barStyle="light-content" />
          {/* <Login /> */}
          <Explore />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
  },
});

export default App;
