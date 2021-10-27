import axios from 'axios';

export const getData = (textInput)=>{
    return axios.get(`http://localhost:8080/iecho`,{params:{text:textInput}});
}

