import instance from '../instance';

// Get Home Task

export const getTasks = async (flag) => {
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

  try {
    const response = await instance.get(`tasks/?flag=${query.flag}&reaction=UPV&taskId=${query.id}`);
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

export const toggleButton = async ({query})=>{
  try {
    const response = await instance.post('tasks/toggle',query)
    return response;
  } catch (error) {
    console.log("error",error)
  }
}