import { useState, useCallback } from "react";

export const TASKURL = "http://localhost:5000/task"

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

export const useFetchTasks = () => {
    const [items, setItems] = useState<ITaskData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const getTasks = useCallback(() => {
      setLoading(true);
      fetch(TASKURL)
        .then((res) => res.json())
        .then((data) => {
          setItems(data.payload);
        })
        .then(() => {
          setLoading(false);
        });
    }, []);
    return { items, loading, getTasks };
  };

  export const useGetTaskDetails = () => {
    const [item, setItem] = useState<ITaskData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const getTaskDetail = useCallback((id: number) => {
      setLoading(true);
      fetch(`${TASKURL}/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setItem(data.payload);
        })
        .then(() => {
          setLoading(false);
        });
    }, []);
    return { item, loading, getTaskDetail };
  };
  
  export const useDeleteAllTasks = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const deleteAllTasks = useCallback(() => {
      setLoading(true);
      return fetch(TASKURL, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          setLoading(false);
        });
    }, []);
    return { loading, deleteAllTasks };
  };
  
  export const useDeleteTask = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const deleteTask = useCallback((id: number) => {
      setLoading(true);
      return fetch(`${TASKURL}/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          setLoading(false);
        });
    }, []);
    return { loading, deleteTask };
  };