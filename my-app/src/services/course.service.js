import httpClient from "../http-common";

const getAllcourse = () => {
  return httpClient.get("/allcourse");
};

const getcourse = (id) => {
  return httpClient.get(`/getcourse/${id}`);
};

const createcourse = (data) => {
  return httpClient.post("/insertcourse", data);
};

const updatecourse = (data) => {
  console.log(data);
  console.log(data.id);
  return httpClient.put(`/updatecourse/${parseInt(data.id)}`, data);
};

const removecourse = (id) => {
  return httpClient.delete(`/deletecourse/${id}`);
};

export default { getAllcourse, createcourse, getcourse, updatecourse, removecourse };
