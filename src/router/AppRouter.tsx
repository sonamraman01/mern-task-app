import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../pages/Header";
import CreateProject from "../pages/project/CreateProject";
import EditProject from "../pages/project/EditProject";
import Projects from "../pages/project/Projects";
import ViewProject from "../pages/project/ViewProject";
import Tasks from "../pages/task/Tasks";
import Create from "../pages/todo/Create";
import EditTodo from "../pages/todo/EditTodo";
import Todos from "../pages/todo/Todos";
import Login from "../pages/user/Login";
import Signup from "../pages/user/Signup";
import Users from "../pages/user/Users";

const Routes = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-800 min-h-screen font-sans " style={{minHeight: "100vh"}}>
        <Header />
        <Switch>
          <Route exact path="/" component={Todos} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/user" component={Users} />
          <Route exact path="/createtodo" component={Create} />
          <Route exact path="/edit/:id" component={EditTodo} />
          <Route exact path="/project" component={Projects} />
          <Route exact path="/createproject" component={CreateProject} />
          <Route exact path="/editproject/:id" component={EditProject} />
          <Route exact path="/viewproject/:id" component={ViewProject} />
          <Route exact path="/task" component={Tasks} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
