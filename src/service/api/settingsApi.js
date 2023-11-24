import instance from "../instance"



export const changePassword = async({query})=>{
    console.log("query",query)
    try {
        const response = await instance.put("/settings/change-password",query)
        return response;
    } catch (error) {
        console.log("error",error)
    }
}