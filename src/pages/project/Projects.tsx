import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  useDeleteAllProjects,
  useDeleteProject,
  useFetchProjects,
} from "../../hooks/project";

const Projects = () => {
  const history = useHistory();
  const { items, getProjects } = useFetchProjects();
  const { deleteAllProjects } = useDeleteAllProjects();
  const { deleteProject } = useDeleteProject();

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="bg-gray-600 rounded shadow p-6 m-10 w-full lg:w-3/4 lg:max-w-lg mx-auto">
      <h1 className="text-white text-2xl text-center font-bold underline">
        Projects
      </h1>
      <div className="mt-6 text-white ">
        {items.length === 0 ? (
          "No Project Created"
        ) : (
          <>
            <div className="flex mb-3 items-center p-1">
              <p className="mr-6 w-1/6">ID</p>
              <p className="mr-6 w-full">Project Name</p>
              <p className="">Actions</p>
            </div>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex mb-4 items-center bg-gray-800 rounded p-2"
              >
                <p className="w-1/6 mr-6">{item.id}</p>
                <p className="w-full text-white">{item.title}</p>

                <button
                  className="iconBtn mr-2 "
                  onClick={() => history.push(`/viewproject/${item.id}`)}
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
                  className="iconBtn mr-2 "
                  onClick={() => history.push(`/editproject/${item.id}`)}
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
                  onClick={() =>
                    deleteProject(item.id!).then(() => getProjects())
                  }
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
        <button
          className="button"
          onClick={() => history.push("/createproject")}
        >
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
          Project
        </button>

        {items.length !== 0 ? (
          <button
            className="button"
            onClick={() => {
              deleteAllProjects().then(() => getProjects());
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

export default Projects;
