import instance from '../instance';

export const getUserProfile = async () => {
  try {
    const response = await instance.get('settings/profile', {
      headers: {
        role: 'TCH',
      },
    });
    return response;
  } catch (error) {
    console.log('error', error);
  }
};

export const updateUserProfile = async inputValue => {
  const username = inputValue;
  try {
    const response = await instance.post(
      'settings/profile',
      {username},
      {
        headers: {
          role: 'TCH',
        },
      },
    );
    return response;
  } catch (error) {
    console.log('error', error);
  }
};

export const updateUserImage = async userData => {
  try {
    const formData = new FormData();
    if (userData.profile_image) {
      formData.append('profile_image', {
        uri: userData.profile_image.path,
        name: `${new Date().getTime()}.jpeg`,
        type: 'image/jpeg',
      });
    }
    formData.append('username', userData.username);

    const response = await instance.post('settings/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.log('error', error.response);
  }
};
