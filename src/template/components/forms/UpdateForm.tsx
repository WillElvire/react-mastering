
import { Button } from "src/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "src/components/ui/dialog";
import TodoForm from "./TodoForm";
import { updateTask } from "src/core/services/firebase/firestore";
import { useToast } from "src/components/ui/use-toast";

function UpdateForm(props : any) {
  const todo = props.todo;
  const {toast} = useToast();
  
  async function getTodo(event : any) {
    console.log(event);
    const newTodo = {
       name : event.name , 
       description : event.description,
       createdAt : todo.createdAt,
       id : todo.id
    }
    console.log(newTodo)
    const response =  updateTask(newTodo,todo.docId);
    response.then((success)=>{})
    .catch((error)=> {
        toast({
            title: "Error",
            description: error.message,
            variant : "destructive",
            duration : 1000
          })
    })
    console.log(response);
  }
  
  return (
    <Dialog>
    <DialogTrigger>
    <Button className="ml-2">Modifier</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Modify your task now</DialogTitle>
        <DialogDescription>
           <TodoForm type={"modify"} todo={todo} onSubmit={getTodo}></TodoForm>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default UpdateForm;