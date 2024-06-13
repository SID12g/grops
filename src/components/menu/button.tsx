import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Arrow from '@app/../assets/svg/arrow-down.svg';

export default function MenuButton({navigation}) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [nowScreen, setNowScreen] = React.useState('Explore');
  const screens = ['Main', 'Explore', 'Profile', 'Keep'];
  const [modalBackgroundVisible, setModalBackgroundVisible] = React.useState(
    styles.close,
  );
  return (
    <TouchableOpacity
      onPress={() => {
        setModalBackgroundVisible(styles.close);
        setModalVisible(!modalVisible);
      }}
      style={styles.menu}>
      <Text style={styles.menu_text}>{nowScreen}</Text>
      <Arrow />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <TouchableOpacity
            style={modalBackgroundVisible}
            onPress={() => {
              setModalBackgroundVisible(null);
              setModalVisible(!modalVisible);
            }}
          />
          <View style={styles.modal_container}>
            {screens.map((screen, index) => (
              <ModalButton
                key={index}
                navigation={navigation}
                screen={screen}
                nowScreen={nowScreen}
              />
            ))}
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
}

function ModalButton({navigation, screen, nowScreen}) {
  return (
    <TouchableOpacity
      style={screen === nowScreen ? styles.button_selected : styles.button}
      onPress={() => {
        navigation.navigate(screen);
      }}>
      <Text
        style={
          screen === nowScreen
            ? styles.button_selected_text
            : styles.button_text
        }>
        {screen}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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

  close: {
    width: '100%',
    backgroundColor: '#000000',
    opacity: 0.9,
    height: '100%',
    justifyContent: 'flex-end',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  modal_container: {
    width: '100%',
    backgroundColor: '#000000',
    borderColor: '#202020',
    borderWidth: 2,
    borderRadius: 30,
    alignItems: 'center',
    padding: 35,
    elevation: 5,
    position: 'absolute',
  },

  button: {
    width: '100%',
    borderRadius: 30,
    paddingVertical: 12,
    marginBottom: 4,
  },

  button_text: {
    fontSize: 20,
    fontFamily: 'WantedSans-Medium',
    textAlign: 'center',
    color: '#ffffff',
  },

  button_selected: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 30,
    paddingVertical: 12,
    marginBottom: 4,
  },

  button_selected_text: {
    fontSize: 20,
    fontFamily: 'WantedSans-Medium',
    textAlign: 'center',
  },

  buttonOpen: {
    backgroundColor: '#F194FF',
  },

  button_close: {
    backgroundColor: '#2196F3',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    textAlign: 'center',
    color: '#ffffff',
  },
});
