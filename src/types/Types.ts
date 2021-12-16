export interface Entities {
  email?: string;
  id?: number;
  password?: string;
  role?: string;
  token?: string;
  username?: string;
}

export interface ISendProjectData {
  id?: number;
  title?: string;
  description?: string;
  start?: Date;
  end?: Date;
  client?: string;
}

export interface ISendTodoData {
  id?: number;
  title?: string;
  description?: string;
  isCompleted?: boolean;
}

export interface ITaskData {
  id?: number;
  title: string;
  description: string;
  start: Date;
  end: Date;
  assigned_to?: number;
  project_id?: number;
  isCompleted?: boolean;
}

export interface IUserData {
  id?: number;
  username: string;
  email: string;
  password: string;
  role?: string;
}
