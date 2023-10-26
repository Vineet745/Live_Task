import {View, Text, Modal, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

const Loader = ({loading}) => {
  return (
    <Modal transparent={true} animationType="fade" visible={loading}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color="#FDA2C4" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
