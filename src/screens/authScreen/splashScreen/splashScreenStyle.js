import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {color, fonts} from '../../../constants/theme';
import {verticalScale} from '../../../constants/dimension';

export const splashScreenStyle = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontFamily: fonts.medium,
    fontSize: RFValue(28, 667),
    color: color.black,
    marginTop: verticalScale(10),
  },
});
