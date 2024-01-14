import { Button } from "../ui/button";
import { TrashIcon, Pencil1Icon } from "@radix-ui/react-icons";

const TodoCard = () => {
  return (
    <div className="flex justify-between items-center  p-3 rounded bg-white border">
      <input type="checkbox" />
      <p className="font-semibold">Title</p>
      <p>Time</p>
      <p>Description</p>

      <div className="space-x-3">
        <Button className="bg-red-500 hover:bg-red-600">
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
