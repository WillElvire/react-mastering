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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Todo() {
  const { toast } = useToast();
  const [todos, setTodos] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useSelector((state: any) => state.auth.value);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    function isUserSingnedIn() {
      if (!!user?.email) {
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
    
    }
   
    const intervalId = setInterval(() => {
      isUserSingnedIn(); // Fetch data every 2 minutes
    }, 10);

    return () => clearInterval(intervalId);
  }, [user?.email]);

  useEffect(() => {
    const fetchTodo = () => {
      getTodos().then((response: any) => {
        setTodos(response);
      });
    };
    fetchTodo();

    const intervalId = setInterval(() => {
      fetchTodo(); // Fetch data every 2 minutes
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getTodo = async (data: any) => {
    const response = await addTodo(data);
    if (!!response) {
      return toast({
        title: "Succcess",
        description: "Task successfully added",
        variant: "default",
        duration: 1000,
        type: "background",
      });
    }
    setRefreshKey((oldKey) => oldKey + 1);
    console.log(response);
  };

  let TodoTemplate = (
    <>
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

  let TodoErrorTemplate = (
    <>
      <div className="text-center mt-[200px]">
        <h1 className="text-3xl">You must be connected</h1>
        <Link to={"/login"}>
          <Button className="mt-5">Sign In</Button>
        </Link>
      </div>
    </>
  );

  return (
    <>
      <BackButton></BackButton>
      {isLoggedIn ? TodoTemplate : TodoErrorTemplate}
    </>
  );
}

export default Todo;
