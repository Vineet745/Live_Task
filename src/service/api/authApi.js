import instance from '../instance';

// -----------------------  Register User -------------------//

export const RegisterUser = async({userData})=>{
    try {
        const res = await instance.post('auth/register',userData)
        return res;
    } catch (error) {
        console.log("error",error)
        throw error;
    }
}

//------------------------- Login User ----------------------//

export const loginUser = async ({userData}) => {
  try {
    const res = await instance.post('auth/login', userData);
    return res;
  } catch (error) {
    console.log('Error while Login', error);
    throw error;
  }
};

// -------------------- Forgot Password -----------------//

export const forgotPassword = async({userData})=>{

    try {
        const res = await instance.post('auth/forgot-password',userData)
        return res;
        
    } catch (error) {
        console.log("error",error)
        throw error;
    }
}


// -------------------- handle Verification ------------//

export const otpVerification = async({userData})=>{
    try {
        const res = await instance.post('auth/verify-otp',userData)
        return res;
    } catch (error) {
        console.log("error",error)
        throw error;
    }
}

// ---------------------handle Change Password -----------//

export const changePassword = async({userData})=>{
    try {
        const res = await instance.post("auth/set-newpassword",userData)
        return res;
    } catch (error) {
        console.log("error",error)
        throw error;
    }
}