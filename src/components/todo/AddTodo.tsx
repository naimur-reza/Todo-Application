import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { addTodo, removeTodo } from "@/redux/features/todoSlice";
// import { useAppDispatch } from "@/redux/hooks";
import { FormEvent, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useAddTodoMutation, useDeleteTodoMutation } from "@/redux/api/api";

export function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  // ==> for local state management
  // const dispatch = useAppDispatch();

  const [addTodo] = useAddTodoMutation();
  // const [deleteTodo] = useDeleteTodoMutation(undefined)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const taskDetails = {
      title,
      description,
      priority,
    };

    addTodo(taskDetails);

    toast(`${title} has been created.`, {
      description: new Date().toLocaleString(),
      action: {
        label: "Undo",
        onClick: () => "deleteTodo(_id)",
      },
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={onSubmit} className="grid gap-4 py-4">
          <DialogHeader>
            <DialogTitle>Add new Todo </DialogTitle>
            <DialogDescription>
              Add new todo by fill-up these empty fields.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              onBlur={(e) => setTitle(e.target.value)}
              id="name"
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              onBlur={(e) => setDescription(e.target.value)}
              id="description"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Priority
            </Label>
            <Select onValueChange={(e) => setPriority(e)}>
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
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Add</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
