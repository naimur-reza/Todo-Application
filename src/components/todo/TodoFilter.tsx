import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

const TodoFilter = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={"outline"}>Filter Todo</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuItem>High</DropdownMenuItem>
        <DropdownMenuItem>Medium</DropdownMenuItem>
        <DropdownMenuItem>Low</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
