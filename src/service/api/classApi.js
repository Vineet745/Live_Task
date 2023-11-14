import instance from '../instance';

//--------------------- Get Classes ----------------------

export const getClasses = async () => {
  try {
    const response = await instance.get('classes');
    return response;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

// --------Get Single Class ------------

export const getSingleClass = async id => {
  try {
    const response = await instance.get(`classes?classId=${id}`, {
      headers: {
        role: 'TCH',
      },
    });
    return response;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

// ------------Add Clas-----------------

export const addClass = async ({query}) => {
  console.log('query', query);
  try {
    const response = await instance.post('classes', query, {
      headers: {
        role: 'TCH',
      },
    });
    return response;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

// ------------------Edit Class -----------------

export const editClass = async ({id, query}) => {
  try {
    const response = await instance.put(`classes?classId=${id}`, query, {
      headers: {
        role: 'TCH',
      },
    });
    return response;
  } catch (error) {
    console.log('error', error);
  }
};


// -------------Delete Class ---------------

export const deleteClass = async id => {
  try {
    const response = await instance.delete(`classes?classId=${id}`, {
      headers: {
        role: 'TCH',
      },
    });
    return response;
  } catch (error) {
    console.log('error');
    throw error;
  }
};


// ----------------------Add Class Student -------------------//

export const addClassStudent = async ({query}) => {
  try {
    const response = await instance.post('students/class-students', query, {
      headers: {
        role: 'TCH',
      },
    });
    return response;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};


// ---------------------- Delete Student --------------------//

// export const deleteClassStudent = async ({query})=>{
//   try {
//     const response = await instance.delete(`remove-class-student?classId=${query.classId}&studentId=${query.studentId}`,{
//       headers:{
//         role:"TCH"
//       }
//     })
//     return response;
//   } catch (error) {
//     console.log("error",error)
//     throw error;
//   }
// }