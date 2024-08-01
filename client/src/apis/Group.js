import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKENDURL;


export const getAllGroupsByDeviceId = async (device) => {
    try{
       const response = await axios.get(`${backendUrl}group/getAllGroupsByDeviceId/${device}`,);
       return response.data.groups;
    }catch(error){
        console.log(error);
    }
}

export const createNotes = async ({groupId,text}) => {
    try{
       const response = await axios.post(`${backendUrl}group/createNotes`,{groupId,text});
       return response.data.group.content;
    }catch(error){
        console.log(error);
    }
}