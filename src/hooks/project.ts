export const PROJECTURL = "http://localhost:5000/project"

import { useState, useCallback } from "react";
export interface ISendProjectData {
  id?: number;
  title?: string;
  description?: string;
  start?: Date;
  end?: Date;
  client?: string;
}

export const useFetchProjects = () => {
  const [items, setItems] = useState<ISendProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getProjects = useCallback(() => {
    setLoading(true);
    fetch(PROJECTURL)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.payload);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);
  return { items, loading, getProjects };
};

export const useGetProjectDetails = () => {
  const [item, setItem] = useState<ISendProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getProjectDetail = useCallback((id: number) => {
    setLoading(true);
    fetch(`${PROJECTURL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.payload);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);
  return { item, loading, getProjectDetail };
};

export const useDeleteAllProjects = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const deleteAllProjects = useCallback(() => {
    setLoading(true);
    return fetch(PROJECTURL, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
      });
  }, []);
  return { loading, deleteAllProjects };
};

export const useDeleteProject = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const deleteProject = useCallback((id: number) => {
    setLoading(true);
    return fetch(`${PROJECTURL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
      });
  }, []);
  return { loading, deleteProject };
};
