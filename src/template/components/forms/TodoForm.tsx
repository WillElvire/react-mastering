import { useState } from "react";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { Textarea } from "src/components/ui/textarea";
import { useToast } from "src/components/ui/use-toast";

function TodoForm(props : any) {

    const todo = props.todo;
    const  [name, setName] =  useState(!!todo?.name ? todo?.name : '');
    const  [description, setDescription] =  useState(!!todo?.description ? todo?.description : '');
   
    const type = props.type;
   

    const { toast } = useToast();
	const  handleNameChange = (event : any) => {
		setName(event.target.value);
	};

    const  handleDescriptionChange = (event : any) => {
		setDescription(event.target.value);
	};

    const display = (event : any)=>{
        event.preventDefault();
       
        if(!name || !description) {
            return  toast({
                title: "Error",
                description: "Kindly fill all requested fields",
                variant : "destructive",
                duration : 1000
              })
        }
        return props.onSubmit({name, description});
    }
  return (
    <div>
      <Label>Name</Label>
      <Input value={name} onChange={handleNameChange}></Input>
      <Label >Description</Label>
      <Textarea value={description} onChange={handleDescriptionChange}></Textarea>

      <Button type="submit" className="mt-4 w-100" onClick={display}> { !!type && type === 'modify' ? "Modify Todo" : "Add todo"}</Button>
    </div>
  );
}

export default TodoForm;
