import { useRoutes } from "react-router-dom";
import App from "../pages/App";
import Todo from "../pages/Todo/Todo";

const AppRouting  = () => {
    let routes = useRoutes([
        { path: "/", element: <App /> },
        { path: "todo", element: <Todo /> },
      ]);
      return routes;
}
export default AppRouting;