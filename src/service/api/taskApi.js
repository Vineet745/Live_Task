import instance from '../instance';

export const getAllTasks = async () => {
  try {
    const response = await instance.get('tasks/?flag=explore&reaction=RMX');
  } catch (error) {
    console.log('error', error);
  }
};

export const deleteTask = async id => {
  try {
    const response = await instance.delete(`tasks?taskId=${id}`);
    return response;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

export const editTask = async ({query}) => {
  const formData = new FormData();
  formData.append('subject_id', query.subject_id);
  formData.append('task_id', query.task_id);
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
    const response = await instance.put('tasks', formData, {
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
