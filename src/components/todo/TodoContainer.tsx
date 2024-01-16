// import { useAppSelector } from "@/redux/hooks";
import { TTodo } from "@/types/TodoType";

import TodoCard from "./TodoCard";
import { TodoFilter } from "./TodoFilter";
import { useGetAllTodosQuery } from "@/redux/api/api";
import { AddTodo } from "./AddTodo";

const TodoContainer = () => {
  // from local state
  // const { todos } = useAppSelector((state) => state.todoReducer);

  // from server state

  const { data: todos, isLoading } = useGetAllTodosQuery(undefined);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-center my-5">My Todo</h1>
      <div className="flex justify-between my-3 ">
        <AddTodo />
        <TodoFilter />
      </div>
      <div className=" bg-primary-gradient p-0.5 rounded">
        <div className="bg-black/80 p-2 space-y-2">
          {todos &&
            todos.map((todo: TTodo) => <TodoCard key={todo._id} {...todo} />)}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
