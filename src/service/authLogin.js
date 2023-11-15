import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {authToken} from '../redux/slice/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const onGoogleButtonPress = async dispatch => {
  try {
    GoogleSignin.configure({
      webClientId:
        '35178936416-js1adf66idue7qa3as8151ihh40nmkbs.apps.googleusercontent.com',
      offlineAccess: false,
    });
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const userInfo = await GoogleSignin.signIn();
    dispatch(authToken(userInfo.idToken));
    await AsyncStorage.setItem('Token', userInfo.idToken);
    const {idToken, access_token} = userInfo;
    const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
    const userCredential = await auth().signInWithCredential(googleCredentials);
  } catch (error) {}
};

export const signOutGoogle = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    await auth().signOut();
  } catch (error) {
    console.error('Google Sign-Out Error:', error);
  }
};
