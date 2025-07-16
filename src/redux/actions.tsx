import type { Task } from "./store";

export const addTask = (newTask: Task) => ({
  type: "task/addTask",
  payload: newTask,
});

export const removeTask = (id: number) => ({
  type: "task/removeTask",
  payload: id,
});
