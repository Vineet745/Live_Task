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
