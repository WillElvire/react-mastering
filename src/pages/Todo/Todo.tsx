import { Button } from "src/components/ui/button";
import BackButton from "../../template/components/buttons/BackButton";
import TodoTable from "src/template/components/table/TodoTable";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "src/components/ui/dialog";
import TodoForm from "src/template/components/forms/TodoForm";
import { addTodo, getTodos } from "src/core/services/firebase/firestore";
import { useToast } from "src/components/ui/use-toast";
import { useEffect, useState } from "react";

function Todo() {
    
    const { toast }  = useToast();
    const [todos,setTodos] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(()=>{
        const fetchTodo = ()=> {
            getTodos().then((response : any)=> {
            setTodos(response )
            })
         }
        fetchTodo()

        const intervalId = setInterval(() => {
            fetchTodo(); // Fetch data every 2 minutes
          }, 1000);
      
          return () => clearInterval(intervalId);
    },[])
    const getTodo    = async (data : any)=>{
        const response   = await addTodo(data);
        if(!!response) {
            return  toast({
                title: "Succcess",
                description: "Task successfully added",
                variant : "default",
                duration : 1000,
                type : 'background'
            })
        }
        setRefreshKey(oldKey => oldKey +1)
        console.log(response);
  }

  
  return (
    <>
      <BackButton></BackButton>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="ml-10 mt-10" variant={"outline"}>
            Add a task
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add task to be done</DialogTitle>
            <DialogDescription>
             Managa your task using amazing taskboard
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
           <TodoForm onSubmit={getTodo}></TodoForm>
          </div>
          
        </DialogContent>
      </Dialog>

      <div className="text-center">
        <TodoTable todos={todos}></TodoTable>
      </div>
    </>
  );
}

export default Todo;
