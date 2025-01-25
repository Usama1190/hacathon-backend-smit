import apiClient from ".";


// get method

const getReq = async (path) => {
    try {
        const response = await apiClient.get(path)
        return response;
    } catch (error) {
        console.log(error);
        
    }
}

// post method

const postReq = async (path, data) => {
    try {
        const response = await apiClient.post(path, data);
        return response;
    } catch (error) {
        console.log(error);
        
    }
}

// delete method

const deleteReq = async (path) => {
    try {
        const response = await apiClient.delete(path)
        return response
    } catch (error) {
        console.log(error);
        
    }
}

// put method

const putReq = async (path, data) => {
    try {
        const response = await apiClient.put(path, data)
        return response;
    } catch (error) {
        console.log(error);
        
    }
}

export { getReq, postReq, deleteReq, putReq };