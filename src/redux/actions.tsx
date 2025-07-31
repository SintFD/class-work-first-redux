import { createAction } from "@reduxjs/toolkit";
import type { Task } from "./store";

export const addTask = createAction<Task>("task/addTask");

export const removeTask = createAction<number>("task/removeTask");

export const editTask = createAction<string>("task/editTask");

export const searchTask = createAction<string>("filters/searchTask");
