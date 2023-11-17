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

export const getTaskReaction = async userData => {
  try {
    const response = await instance.post('tasks/reactions', userData, {
      headers: {
        role: 'TCH',
      },
    });
  } catch (error) {
    console.log('Error', error.response);
  }
};

// SingleTask

export const getSingleTask = async ({query}) => {
  console.log("queyr",query)
  try {
    const response = await instance.get(
      `tasks/?flag=${query.flag}&reaction=UPV&taskId=${query.id}`,
    );
    return response;
  } catch (error) {
    console.log('error', error);
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
  console.log("qieruye",query)
  try {
    const response = await instance.post('tasks/toggle', query);
    return response;
  } catch (error) {
    console.log('error', error);
  }
};

// Add Task

export const createTask = async ({query}) => {
  console.log("dkjfoieurpoe",query)
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
  if(query.images){
    formData.append("images",{
      uri:query.images,
      name: `${new Date().getTime()}.jpeg`,
      type: 'image/jpeg',
    })
    formData.append("urls",query.urls)

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
