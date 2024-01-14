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
  },
});

export default todoSlice.reducer;

export const { addTodo, removeTodo } = todoSlice.actions;
