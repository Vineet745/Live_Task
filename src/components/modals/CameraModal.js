import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {color, fonts, sizes} from '../../constants/theme';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';

const CameraModal = ({open, closeModal, openGallery, openCamera}) => {

    
  //handleGallery

  const handleGallery = async () => {
    await openGallery();
    closeModal();
  };

  //   handleCamera

  const handleCamera = async () => {
    await openCamera();
    closeModal();
  };

  return (
    <Modal transparent={true} animationType="fade" visible={open}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={closeModal}
        style={styles.modalBackground}>
        <View style={styles.innerModal}>
          <TouchableOpacity onPress={handleCamera}>
            <Image
              style={{width: 60, height: 60}}
              source={require('../../assets/images/camera.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleGallery}
            style={{marginLeft: horizontalScale(30)}}>
            <Image
              style={{width: 60, height: 60}}
              source={require('../../assets/images/gallery.png')}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  innerModal: {
    backgroundColor: color.white,
    width: '100%',
    paddingVertical: verticalScale(30),
    paddingHorizontal: horizontalScale(10),
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
  },
  Button: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  confirmButton: {
    width: horizontalScale(60),
    alignItems: 'center',
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  cancelButton: {
    width: horizontalScale(60),
    alignItems: 'center',
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: fonts.semiBold,
    color: color.black,
  },
});

export default CameraModal;
