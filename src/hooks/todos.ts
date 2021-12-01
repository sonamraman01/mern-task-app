export const TODOURL = "http://localhost:5000/todo"

import { useState, useCallback } from "react";
export interface ISendTodoData {
  id?:number;
  title: string;
  description?: string;
  isCompleted?: boolean;
}

export const useFetchTodos = () => {
  const [items, setItems] = useState<ISendTodoData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getTodos = useCallback(() => {
    setLoading(true);
    fetch(TODOURL)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.payload);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);
  return { items, loading, getTodos };
};

export const getTodoDetails = () => {
  const [item, setItems] = useState<ISendTodoData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getTodoDetail = useCallback((id: number) => {
    setLoading(true);
    fetch(`${TODOURL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.payload);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);
  return { item, loading, getTodoDetail };
};

export const useDeleteAllTodos = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const deleteAllTodos = useCallback(() => {
    setLoading(true);
    return fetch(TODOURL, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
      });
  }, []);
  return { loading, deleteAllTodos };
};

export const useDeleteTodo = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const deleteTodo = useCallback((id: number) => {
    setLoading(true);
    return fetch(`${TODOURL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
      });
  }, []);
  return { loading, deleteTodo };
};


