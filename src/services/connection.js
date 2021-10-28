import axios from "axios";

export const getData = ({ params, addItems }) => {
  return axios
    .get("http://localhost:8080/iecho", { params })
    .then((res) => {
      addItems({ newItem: res.data });
    })
    .catch((error) => {
      console.log(error);
    });
};
