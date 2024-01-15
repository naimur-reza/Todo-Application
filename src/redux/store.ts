import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
import { todosApi } from "./api/api";

const reducer = {
  [todosApi.reducerPath]: todosApi.reducer,
  todoReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
