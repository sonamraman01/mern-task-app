import { Entities } from "../types/Types";

export const BASEURL = "http://localhost:5000";

export const TODOURL = "http://localhost:5000/todo"
export const USERURL = "http://localhost:5000/user";
export const PROJECTURL = "http://localhost:5000/project"
export const TASKURL = "http://localhost:5000/task"

export const token = localStorage.getItem("token")



const entity = localStorage.getItem("entities");

// export const entities = JSON.parse(entity) as Entities