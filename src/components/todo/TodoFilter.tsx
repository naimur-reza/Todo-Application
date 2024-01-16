import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

// import { filterTodo } from "@/redux/features/todoSlice";
// import { useAppDispatch } from "@/redux/hooks";

type TParams = {
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
};

export function TodoFilter({ priority, setPriority }: TParams) {
  // const dispatch = useAppDispatch();

  return (
    <Select value={priority} onValueChange={(e) => setPriority(e)}>
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
