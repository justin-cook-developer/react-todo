import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getTodos = async () => {
  const { data } = await axios.get(`${BASE_URL}/todos`);
  return data;
};

export const createTodo = async (title, completed = false) => {
  if (!title) {
    return null;
  }

  const { data } = await axios.post(`${BASE_URL}/todos`, {
    title,
    completed,
  });

  return data;
};

export const deleteTodo = async (todoId) => {
  if (!todoId) return false;

  await axios.delete(`${BASE_URL}/todos/${todoId}`);

  return true;
};
