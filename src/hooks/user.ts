import { useState, useCallback } from "react";
import { IUserData } from "../types/Types";
import { token, USERURL } from "./Constants";

export const useFetchUsers = () => {
  const [users, setUsers] = useState<IUserData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getUsers = useCallback(() => {
    setLoading(true);
    fetch(USERURL,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.payload);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);
  return { users, loading, getUsers };
};

export const useDeleteUser = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const deleteUser = useCallback((id: number) => {
      setLoading(true);
      return fetch(`${USERURL}/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          setLoading(false);
        });
    }, []);
    return { loading, deleteUser };
  };
  

// export const useSetUsers = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState<boolean>(false);

//   const dataObj: IUserData = {
//     username: username,
//     email: email,
//     password: password,
//   };

//   const setUser = useCallback(() => {
//     setLoading(true);
//     fetch(USERURL, {
//       method: "POST",
//       body: JSON.stringify(dataObj),
//     })
//       .then((res) => res.json())
//       .then(() => {
//         setLoading(false);
//       });
//   }, []);
//   return {
//     username,
//     email,
//     password,
//     setUsername,
//     setEmail,
//     setPassword,
//     loading,
//     setUser,
//   };
// };
