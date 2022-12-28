import axiosMu from "../../utils/axiosInterceptors";


export const getAllSectionsApi = async (storeId)=>{
    try {
        const {data} = await axiosMu.get(`/section/${storeId}`)
        return data
    } catch (error) {
        return error
    }
}

export const createSectionsApi = async (section)=>{
    try {
        const {data} = await axiosMu.post(`/section`, section)
        return data
    } catch (error) {
        return error
    }
}