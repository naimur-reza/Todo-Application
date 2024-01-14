import { AddTodoModal } from "./AddTodo";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <>
      <h1 className="text-center my-5">My Todo</h1>
      <div className="flex justify-between my-3 ">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className=" bg-primary-gradient p-0.5 rounded">
        <div className="bg-white p-2 space-y-2">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </>
  );
};

export default TodoContainer;
