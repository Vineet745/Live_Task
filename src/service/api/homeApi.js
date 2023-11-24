import instance from '../instance';

// Get Home Task

export const getTasks = async flag => {
  try {
    const response = await instance.get(`tasks/?flag=${flag}&reaction=UPV`);
    return response;
  } catch (error) {
    console.log('error', error);
  }
};

// Like & Dislike

export const getTaskReaction = async (userData) => {
  try {
    const response = await instance.post('tasks/reactions', userData);
    return response;
  } catch (error) {
    console.log('Error', error.response);
  }
};

// SingleTask

export const getSingleTask = async ({query}) => {
  try {
    const response = await instance.get(
      `tasks/?taskId=${query.id}&reaction=RMX`,
    );
    return response;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

// SearchTask

export const searchTask = async userData => {
  try {
    const response = instance.post('tasks/search', userData, {
      headers: {
        role: 'TCH',
      },
    });
    return response;
  } catch (error) {
    console.log('error', error);
  }
};

// Filter

export const filterTask = async query => {
  try {
    const response = await instance.post('tasks/search', query, {
      headers: {
        role: 'TCH',
      },
    });
    return response;
  } catch (error) {
    console.log('error', error);
  }
};

// toogle Button

export const toggleButton = async ({query}) => {
  console.log('qieruye', query);
  try {
    const response = await instance.post('tasks/toggle', query);
    return response;
  } catch (error) {
    console.log('error', error);
  }
};

// Add Task

export const createTask = async ({query}) => {
  const formData = new FormData();
  formData.append('subject_id', query.subject_id);
  formData.append('taskName', query.taskName);
  formData.append('minimum_age', query.minimum_age);
  formData.append('maximum_age', query.maximum_age);
  formData.append('language', query.language);
  formData.append('is_shared', query.is_shared);
  formData.append('description', query.description);
  formData.append('prompt', query.prompt);
  formData.append('voice_only', query.voice_only);
  formData.append('is_advanced', query.is_advanced);
  if (query.images && query.images.length > 0) {
    query.images.forEach((image, index) => {
      formData.append('images', {
        uri: image,
        name: `${new Date().getTime()}_${index}.jpeg`,
        type: 'image/jpeg',
      });
    });
  }
  if (query.urls) {
    formData.append('urls', query.urls);
  }
  if (query.content) {
    formData.append('content', query.content);
  }

  try {
    const response = await instance.post('tasks', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.log('error', error.response);
    throw error;
  }
};
