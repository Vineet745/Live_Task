import {modalOpen} from '../redux/slice/modalSlice';
import { toast } from '../service/ToastMessage';


// Email Validation

export const isEmailValid = email => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};


// Password Validation

export const isPasswordValid = password => {
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordPattern.test(password);
};

// handleModal Open

export const handleOpen = dispatch => {
  dispatch(modalOpen(true));
};

// handle Modal Close

export const handleClose = dispatch => {
  dispatch(modalOpen(false));
};

// Validation Input
export const handleInputValidation = ({newValue,limit,error,setValue}) => {
  if(newValue.length <= limit){
    setValue(newValue);
  }else{
    toast({type: 'error', text1: `${error} can't bigger than ${limit} Words`});
  }
};


// New password and Confirm password Validation

export const handlePasswordValidation = (newPassword,confirmPassword)=>{
  if(!newPassword && !confirmPassword){
    toast({type: 'error', text1:"New password and Confirm password should be Same"});
    return;
  }
}