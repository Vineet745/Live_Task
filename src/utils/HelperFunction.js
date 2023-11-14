import {modalOpen} from '../redux/slice/modalSlice';


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


// Camera Open

