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
    <div className="section">
      <h1 className="heading">
        Users
      </h1>
      <div className="mt-6">
        {users.length === 0 ? (
          <div className="text-center">No User</div>
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
                className="list"
              >
                <p className="w-1/6 mr-6">{item.id}</p>
                <p className="w-full capitalize">{item.username}</p>

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
