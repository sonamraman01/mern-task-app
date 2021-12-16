import { useState, useCallback } from "react";
import { ITaskData } from "../types/Types";
import { TASKURL, token } from "./Constants";

export const useFetchTasks = () => {
    const [items, setItems] = useState<ITaskData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const getTasks = useCallback(() => {
      setLoading(true);
      fetch(TASKURL,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
      fetch(`${TASKURL}/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then(() => {
          setLoading(false);
        });
    }, []);
    return { loading, deleteTask };
  };