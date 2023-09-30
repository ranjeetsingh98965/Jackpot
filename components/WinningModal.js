import React from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const WinningModal = props => {
  return (
    <Modal visible={props.showWinningModal} transparent={true}>
      <View style={styles.modal}>
        <LottieView
          source={require('../lottie/animation_ln5q9ezi.json')}
          autoPlay
          loop
          style={{width: '100%', height: '100%'}}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WinningModal;
