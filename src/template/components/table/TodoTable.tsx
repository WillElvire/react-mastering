import { Badge } from "src/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "src/components/ui/table";
import "./TodoTable.css";
import { Button } from "src/components/ui/button";
import { useToast } from "src/components/ui/use-toast";
import { deleteTodoTask } from "src/core/services/firebase/firestore";
import UpdateForm from "../forms/UpdateForm";
const TodoTable = (props: any) => {
  const todos = props.todos;
  const { toast } = useToast();
  async function deleteTodo(event : any)  {
    const id = event.target.value;
    try {
        const response = await deleteTodoTask(id);
        console.log(response)
        toast({
            title: "Success",
            description: "Tache "+ id + " Supprimé",
            duration : 1000
        })
    }
    catch(ex : any) {
        toast({
            title: "Error",
            description: ex.Message,
            variant : "destructive",
            duration : 1000
        })
    }
  }
  return (
    <div className="text-center">
      <h1 className=" text-2xl">
        Task Planned for this week <Badge>{todos.length}</Badge> 🚀
      </h1>
      <Table className="w-[1350px]  ml-10 mt-10 border-solid">
        <TableHeader className="header">
          <TableRow className="text-center">
            <TableHead className="head">Reference</TableHead>
            <TableHead className="head">Name</TableHead>
            <TableHead className="head">Description</TableHead>
            <TableHead className="head">Date</TableHead>
            <TableHead className="head"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo: any) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">{todo.id}</TableCell>
              <TableCell className="font-medium">{todo.name}</TableCell>
              <TableCell>{todo.description}</TableCell>
              <TableCell>{todo.createdAt.toString()}</TableCell>
              <TableCell>
                <div className="grid">
                  <div className="row">
                    <Button variant={"outline"} value={todo.docId} onClick={deleteTodo}> Supprimer</Button>
                    <UpdateForm todo={todo}></UpdateForm>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TodoTable;
