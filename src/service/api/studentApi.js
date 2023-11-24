import axios from 'axios';
import instance from '../instance';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

//--------------------- Add Student Via Csv File----------------------

export const addStudentViaCsvFile = async query => {
  console.log('query', query.studentfile);
  const token = await AsyncStorage.getItem('Token');
  try {
    const formData = new FormData();
    if (query.studentfile) {
      formData.append('studentfile', {
        uri: query.studenturi,
        type: 'application/csv',
        name: query.studentfile,
      });
    }
    formData.append('multiple', query.multiple);
    formData.append('is_fake', query.is_fake);
    const response = await axios.post(
      'https://livetask-ai.hackerkernel.co/api/students',
      formData,
      {
        headers: {
          role: 'TCH',
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token}`,
        },
      },
    );
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
