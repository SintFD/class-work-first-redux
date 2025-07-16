import { configureStore } from "@reduxjs/toolkit";

export type Task = { id: number; text: string; completed: boolean };

type TaskState = {
  items: Task[];
};

type FiltersState = {
  status: "all" | "completed" | "active";
};

export type RootStateType = {
  tasks: TaskState;
  filters: FiltersState;
};
const initialState: RootStateType = {
  tasks: {
    items: [
      { id: 0, text: "Learn HTML and CSS", completed: true },
      { id: 1, text: "Get good at JavaScript", completed: true },
      { id: 2, text: "Master React", completed: false },
      { id: 3, text: "Discover Redux", completed: false },
      { id: 4, text: "Build amazing apps", completed: false },
    ],
  },
  filters: {
    status: "all",
  },
};

const rootReducer = (
  state: RootStateType = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "task/addTask":
      return {
        ...state,
        tasks: { items: [...state.tasks.items, action.payload] },
      };

    case "task/removeTask":
      return {
        ...state,
        tasks: { items: [...state.tasks.items] },
      };

    default:
      return state;
  }
};

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
