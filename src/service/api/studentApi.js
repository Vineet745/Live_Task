import instance from '../instance';

// ---------------- Get Students-------------

export const getStudents = async () => {
  try {
    const response = await instance.get('students');
    return response;
  } catch (error) {
    console.log('error', error);
  }
};

// ---------- Add Student ------------------/

export const addStudent = async ({query}) => {
  try {
    const response = await instance.post('students', query);
    return response;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

// ----------------Get Student List On Detail page-------------------------//

export const getStudentClassList = async ({id}) => {
  try {
    const response = await instance.get(
      `/students/student-classes/?studentId=${id}`,
    );
    return response;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

// ---------------Edit Student -----------------------------

export const editStudent = async ({data}) => {
  try {
    const response = await instance.put(`/students/`, data);
    return response;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

// ------------- Delete Student -----------------------------

export const deleteStudent = async ({id}) => {
  try {
    const response = await instance.delete(`/students/?studentId=${id}`);
    return response;
  } catch (error) {
    console.log('error', error);
  }
};
