import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  useDeleteAllTasks,
  useDeleteTask,
  useFetchTasks,
} from "../../hooks/task";

const Tasks = () => {
  const history = useHistory();
  const { items, getTasks } = useFetchTasks();
  const { deleteAllTasks } = useDeleteAllTasks();
  const { deleteTask } = useDeleteTask();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="section1">
      <h1 className="heading">Tasks</h1>
      <div className="mt-6">
        {items?.length === 0 ? (
          <div className="text-center">No Task Created</div>
        ) : (
          <>
            <div className="flex mb-3 items-center p-1">
              <p className="mr-6 w-1/12">ID</p>
              {/* <p className="mr-6 w-1/4">Status</p> */}
              <p className="mr-6 w-full">Task Name</p>
              <p className="">Actions</p>
            </div>
            {items?.map((item) => (
              <div key={item.id} className="list">
                <p className="w-1/12 mr-7">{item.id}</p>
                {/* <p className="w-1/4 mr-10">{item.isCompleted === true ? "Complete" : "Not Completed"}</p> */}
                <p className="w-full capitalize">{item.title}</p>

                <button
                  className="iconBtn mr-2"
                  onClick={() => history.push(`/viewtask/${item.id}`)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>

                <button
                  className="iconBtn mr-2"
                  onClick={() => history.push(`/edittask/${item.id}`)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>

                <button
                  className="iconBtn"
                  onClick={() => deleteTask(item.id!).then(() => getTasks())}
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
                </button>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button className="button" onClick={() => history.push("/createtask")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Task
        </button>

        {items?.length !== 0 ? (
          <button
            className="button"
            onClick={() => {
              deleteAllTasks().then(() => getTasks());
            }}
          >
            <svg
              className="h-5 w-5 mr-1"
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
            <span>Remove All</span>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Tasks;
