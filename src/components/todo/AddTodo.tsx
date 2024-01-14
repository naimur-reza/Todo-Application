import { Button } from "@/components/ui/button";
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
import { addTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
import { FormEvent, useState } from "react";

export function AddTodoModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const id = Math.ceil(Math.random() * 1000);

    const taskDetails = {
      id,
      title,
      description,
    };

    dispatch(addTodo(taskDetails));
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
