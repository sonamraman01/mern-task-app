import {
  HashRouter as Router,
  Route,
  Redirect,
  useLocation,
  Switch,
} from "react-router-dom";
import Header from "../pages/Header";
import Home from "../pages/Home";
import CreateProject from "../pages/project/CreateProject";
import EditProject from "../pages/project/EditProject";
import Projects from "../pages/project/Projects";
import ViewProject from "../pages/project/ViewProject";
import CreateTask from "../pages/task/CreateTask";
import EditTask from "../pages/task/EditTask";
import Tasks from "../pages/task/Tasks";
import ViewTask from "../pages/task/ViewTask";
import Create from "../pages/todo/Create";
import EditTodo from "../pages/todo/EditTodo";
import Todos from "../pages/todo/Todos";
import Login from "../pages/user/Login";
import Signup from "../pages/user/Signup";
import Users from "../pages/user/Users";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function MySwitch() {
  const location = useLocation();
  return (
    <Switch location={location}>
      <PrivateRoute path="/user">
        <Users />
      </PrivateRoute>

      <PrivateRoute path="/todo">
        <Todos />
      </PrivateRoute>

      <PrivateRoute path="/createtodo">
        <Create />
      </PrivateRoute>

      <PrivateRoute path="/edit/:id">
        <EditTodo />
      </PrivateRoute>

      <PrivateRoute path="/project">
        <Projects />
      </PrivateRoute>

      <PrivateRoute path="/createproject">
        <CreateProject />
      </PrivateRoute>

      <PrivateRoute path="/editproject/:id">
        <EditProject />
      </PrivateRoute>

      <PrivateRoute path="/viewproject/:id">
        <ViewProject />
      </PrivateRoute>

      <PrivateRoute path="/task">
        <Tasks />
      </PrivateRoute>

      <PrivateRoute path="/createtask">
        <CreateTask />
      </PrivateRoute>

      <PrivateRoute path="/edittask/:id">
        <EditTask />
      </PrivateRoute>

      <PrivateRoute path="/viewtask/:id">
        <ViewTask />
      </PrivateRoute>

      <PublicRoute path="/">
        <Home />
      </PublicRoute>

      {/* <PublicRoute path="/signup">
        <SignupScreen />
      </PublicRoute> */}

      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

const Routes = () => {
  return (
    <Router>
      <Header />
      <MySwitch/>
    </Router>
  );
};

export default Routes;
