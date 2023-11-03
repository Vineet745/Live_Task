import instance from "../instance"





export const getInitalChartData = async()=>{
    try {
        const response = await instance.get('transactions/billings',{
            headers:{
                role:"TCH"
            }
        })
        return response;
    } catch (error) {
        console.log("error",error)
    }
}

// Date Picker

export const getDateWiseChart = async(selectedData)=>{
    try {
        const response = await instance.get(`transactions/billings?startdate=${selectedData.showStartDate}&enddate=${selectedData.showEndDate}`,{
            headers:{
                role:"TCH"
            }
        });
        return response;
        
    } catch (error) {
        console.log("error",error.message)
    }
}

