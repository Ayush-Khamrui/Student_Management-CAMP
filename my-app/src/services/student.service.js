import httpClient from "../http-common";

const getAll = () => {
  return httpClient.get("/allstudent");
};

const get = (id) => {
  return httpClient.get(`/getstudent/${id}`);
};

const create = (data) => {
  return httpClient.post("/save", data);
};

const update = (data) => {
  console.log(data);
  console.log(data.id);
  return httpClient.put(`/updatestudent/${parseInt(data.id)}`, data);
};

const remove = (id) => {
  return httpClient.delete(`/deletestudent/${id}`);
};

export default { getAll, create, get, update, remove };
