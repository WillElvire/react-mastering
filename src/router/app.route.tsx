import { useRoutes } from "react-router-dom";
import App from "../pages/App";
import Todo from "../pages/Todo/Todo";
import Login from "src/pages/Login/Login";

const AppRouting  = () => {
    let routes = useRoutes([
        { path: "/", element: <App /> },
        { path: "todo", element: <Todo /> },
        { path: "login",element : <Login/>}
      ]);
      return routes;
}
export default AppRouting;