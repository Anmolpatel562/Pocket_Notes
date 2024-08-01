import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKENDURL;


export const existingUserCount = async () => {
    try{
       const response = await axios.get(`${backendUrl}user/getExistingUserCount`);
       console.log(response);
       return response.data.response.length;
    }catch(error){
        console.log(error);
    }
}

export const createUser = async (device) => {
    try{
        console.log("device::::::::::",device)
        const response = await axios.post(`${backendUrl}user/createUser`,{device});
        console.log(response)
    }catch(error){
        console.log(error);
    }
}