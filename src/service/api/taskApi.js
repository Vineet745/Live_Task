import instance from "../instance";

export const getAllTasks = async()=>{
  try {
    const response = await instance.get("tasks/?flag=explore&reaction=RMX")
    
  } catch (error) {
    console.log("error",error)
  }
}

