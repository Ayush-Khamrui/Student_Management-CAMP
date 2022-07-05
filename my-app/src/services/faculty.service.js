import httpClient from "../http-common";

const getAllfaculty = () => {
  return httpClient.get("/allfaculty");
};

const getfaculty = (id) => {
  return httpClient.get(`/getfaculty/${id}`);
};

const createfaculty = (data) => {
  return httpClient.post("/insertfaculty", data);
};

const updatefaculty = (data) => {
  console.log(data);
  console.log(data.id);
  return httpClient.put(`/updatefaculty/${parseInt(data.id)}`, data);
};

const removefaculty = (id) => {
  return httpClient.delete(`/deletefaculty/${id}`);
};

export default { getAllfaculty, createfaculty, getfaculty, updatefaculty, removefaculty };