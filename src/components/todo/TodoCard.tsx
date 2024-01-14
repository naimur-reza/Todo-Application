import { TTodo } from "@/types/TodoType";
import { Button } from "../ui/button";
import { TrashIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { useAppDispatch } from "@/redux/hooks";
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";
import { Badge } from "../ui/badge";

const TodoCard = ({ id, title, description, isCompleted }: TTodo) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex  justify-between items-center  p-3 rounded  border">
      <input type="checkbox" onChange={() => dispatch(toggleComplete(id))} />
      <p className="font-semibold">{title}</p>

      {!isCompleted ? (
        <Badge variant="destructive">Pending</Badge>
      ) : (
        <Badge variant="secondary">Done</Badge>
      )}

      <p>{description}</p>

      <div className="space-x-3">
        <Button
          onClick={() => dispatch(removeTodo(id))}
          className="bg-red-500 hover:bg-red-600">
          <TrashIcon />
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Pencil1Icon />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
