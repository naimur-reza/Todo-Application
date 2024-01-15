import { useAppSelector } from "@/redux/hooks";
import { AddTodoModal } from "./AddTodo";
import TodoCard from "./TodoCard";
import { TodoFilter } from "./TodoFilter";
import { useGetAllTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // from local state
  // const { todos } = useAppSelector((state) => state.todoReducer);

  // from server state

  const { data: todos, isLoading, isError } = useGetAllTodosQuery();

  return (
    <div>
      <h1 className="text-center my-5">My Todo</h1>
      <div className="flex justify-between my-3 ">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className=" bg-primary-gradient p-0.5 rounded">
        <div className="bg-black/80 p-2 space-y-2">
          {todos && todos.map((todo) => <TodoCard key={todo.id} {...todo} />)}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
