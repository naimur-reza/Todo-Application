import { AddTodoModal } from "../modal/AddTodo";
import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <>
      <h1 className="text-center my-5">My Todo</h1>
      <div className="flex justify-between my-3 ">
        <AddTodoModal />
        <Button variant={"outline"}>Filter</Button>
      </div>
      <div className=" bg-primary-gradient p-[5px] rounded-lg">
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
