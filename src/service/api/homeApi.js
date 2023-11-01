import instance from '../instance';

// Get Home Task

export const getHomeTask = async () => {
  try {
    const response = await instance.get(`tasks/?flag=explore&reaction=UPV`, {
      headers: {
        role: 'TCH',
      },
    });
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

export const getSingleTask = async id => {
  try {
    const response = await instance.get(
      `tasks/?flag=explore&reaction=UPV&taskId=${id}`,
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
  console.log("query",query)
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
