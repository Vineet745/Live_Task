import Toast from 'react-native-toast-message';

export const toast = ({type, text1}) => {
  Toast.show({
    type: type,
    position: 'bottom',
    text1: text1,
    visibilityTime: 2500,
    bottomOffset: 50,
  });
};
