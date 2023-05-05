import { useRoutes } from "react-router-dom";
import MainRoutes from "./mainRoutes";

function Routes() {
  return useRoutes([MainRoutes]);
}

export default Routes;
