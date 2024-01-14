import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { filterTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";

export function TodoFilter() {
  const dispatch = useAppDispatch();
  return (
    <Select onValueChange={(e) => dispatch(filterTodo(e))}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter " />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
