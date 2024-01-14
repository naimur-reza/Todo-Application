import { TTodo } from "@/types/TodoType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => action.payload !== todo.id);
    },
    toggleComplete: (state, action) => {
      const toggleTodo = state.todos.find((todo) => action.payload === todo.id);
      if (toggleTodo) {
        toggleTodo.isCompleted = !toggleTodo.isCompleted;
        state.todos.sort((a, b) => {
          if (a.isCompleted === undefined || b.isCompleted === undefined) {
            // Handle cases where isCompleted is undefined
            return 0;
          }

          // Sort in ascending order based on the 'isCompleted' property
          return a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? -1 : 1;
        });
      }
    },
    filterTodo: (state, action: PayloadAction<string>) => {
      const filteredTodos = state.todos.filter(
        (todo) => todo.priority === action.payload
      );
      return { ...state, todos: filteredTodos };
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, removeTodo, toggleComplete, filterTodo } =
  todoSlice.actions;
