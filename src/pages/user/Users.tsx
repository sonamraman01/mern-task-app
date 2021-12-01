import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDeleteUser, useFetchUsers } from "../../hooks/user";

const Users = () => {
  const history = useHistory();
  const { users, getUsers } = useFetchUsers();
  const { deleteUser } = useDeleteUser();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="bg-gray-600 rounded shadow p-6 m-10 w-full lg:w-3/4 lg:max-w-lg mx-auto">
      <h1 className="text-white text-2xl text-center font-bold underline">
        Users
      </h1>
      <div className="mt-6 text-white ">
        {users.length === 0 ? (
          "No User"
        ) : (
          <>
            <div className="flex mb-3 items-center p-1">
              <p className="mr-6 w-1/6">ID</p>
              <p className="mr-6 w-full">Users</p>
              {/* <p className="">Actions</p> */}
            </div>
            {users.map((item) => (
              <div
                key={item.id}
                className="flex mb-4 items-center bg-gray-800 rounded p-2"
              >
                <p className="w-1/6 mr-6">{item.id}</p>
                <p className="w-full text-white">{item.username}</p>

                {/* <button
                  className="iconBtn"
                  onClick={() => deleteUser(item.id!).then(() => getUsers())}
                >
                  <svg
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                    style={{ transform: "rotate(360deg)" }}
                  >
                    <path d="M12 12h2v12h-2z" fill="currentColor"></path>
                    <path d="M18 12h2v12h-2z" fill="currentColor"></path>
                    <path
                      d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
                      fill="currentColor"
                    ></path>
                    <path d="M12 2h8v2h-8z" fill="currentColor"></path>
                  </svg>
                </button> */}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Users;
