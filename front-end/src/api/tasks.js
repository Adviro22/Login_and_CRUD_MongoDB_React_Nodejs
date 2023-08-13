import axios from "./axios";

export const getTasksrequest = () => axios.get("/tasks");

export const getTaskRequest = (id) => axios.get(`/tasks/${id}`);

export const createtaskRequest = (task) => axios.post("/tasks", task);

export const updatetaskRequest = (task) =>
  axios.put(`/tasks/${task._id}`, task);

export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`);
