import instance from '../instance';

// ---------------------GeT Assignment------------------//

export const getAssignments = async () => {
  try {
    const response = await instance.get('assignments', {
      headers: {
        role: 'TCH',
      },
    });
    return response;
  } catch (error) {
    console.log('error', error);
  }
};


// -------------- Add Assignment -----------------------//
export const addAssignment = async ({query}) => {
  try {
    const response = await instance.post('assignments', query ,{
      headers: {
        role: 'TCH',
      },
    });
    return response;
  } catch (error) {
    console.log('error', error);
  }
};


// ---------------Edit Assignment ----------------------/

export const editAssignment = async({query})=>{
try {
  const response = await instance.put("assignments",query)
  return response;
} catch (error) {
  console.log("error",error)
  throw error;
}
}




// AssignmentSingle Detail

export const singleAssignmentDetail = async({id})=>{
  try {
    const response = await instance.get(`/assignments/?assignment_id=${id}`)
    return response;
  } catch (error) {
    console.log("error",error)
  }
}

// ---------------------------- assign Class ----------------------/

export const assignClass = async({query})=>{
  try {
    const response = await instance.post("assignments/assign",query)
    return response;
  } catch (error) {
    console.log("Error",error)
  }
}


// ----------------------------assign Task ------------------------/

export const assignTask = async({query})=>{
  console.log("query",query)
  try {
    const response = await instance.post("assignments/add-task",query)
    return response;
  } catch (error) {
    console.log("Error",error)
  }
}

//----------------------------- View Report ----------------------/

export const viewReport = async(id)=>{
  try {
      const response = await instance.get(`students/report?assignment_id=${id}`)
      return response;
  } catch (error) {
    console.log("error",error)
  }
}

//--------------------------- Conversation -------------------------

export const conversation = async({query})=>{
  try {
    const response = await instance.get(`chats?assignment_id=1&student_id=1`)
    return response;
  } catch (error) {
    console.log("error",error)
  }
}

// -------------------------- Delete Assignment---------------------


export const deleteAssignment = async(id)=>{
  try {
    const response = await instance.delete(`assignments?assignment_id=${id}`,{
      headers:{
        role:"TCH"
      }
    })
    return response;
  } catch (error) {
    console.log("error",error)
  }
}