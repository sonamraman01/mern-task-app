import moment from "moment";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useGetProjectDetails } from "../../hooks/project";

const ViewProject = () => {
  const { item, getProjectDetail } = useGetProjectDetails();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getProjectDetail(parseInt(id));
  }, []);

  return (
    <div className="section">
      <div className="mb-4">
        <h1 className="heading">View Project</h1>

        <div className="mt-9 flex items-center justify-between">
          <div className="">
            <h1 className="font-bold">Title</h1>
            <p className="text-gray-200">{item[0]?.title}</p>
          </div>

          <div className="flex items-center justify-center">
            <div className=" mr-2">
              <h1 className=" font-bold">Start Date</h1>
              <p className="text-gray-200">
                {moment(item[0]?.start).format('L')}
              </p>
            </div>
            <div className=" mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 -mt-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="">
              <h1 className="font-bold">End Date</h1>
              <p className="text-gray-200">
                {moment(item[0]?.end).format('L')}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h1 className=" font-bold">Client</h1>
          <p className="text-gray-200">{item[0]?.client}</p>
        </div>

        <div className="mt-6">
          <h1 className=" font-bold">Description</h1>
          <p className="text-gray-200">{item[0]?.description}</p>
        </div>

        <div className="flex items-center justify-between mt-5">
          <button
            className="button"
            onClick={() => history.push(`/editproject/${id}`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
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
            <span>Edit</span>
          </button>
          <button className="button" onClick={() => history.push("/project")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProject;
