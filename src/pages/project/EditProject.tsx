import { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  ISendProjectData,
  PROJECTURL,
  useGetProjectDetails,
} from "../../hooks/project";
import DatePicker from "react-datepicker";
import moment from "moment";

const EditProject = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [client, setClient] = useState("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const { getProjectDetail, item } = useGetProjectDetails();

  useEffect(() => {
    getProjectDetail(Number(id));
  }, [id]);

  useEffect(() => {
    if (item?.[0]) {
      setTitle(item[0].title ?? "");
      setClient(item[0].client ?? "");
      setDescription(item[0].description ?? "");
      setStartDate(item[0].start ?? new Date());
      setEndDate(item[0].end ?? new Date());
    }
  }, [item]);

  const editItem = useCallback(async () => {
    const dataObj: ISendProjectData = {
      title: title,
      description: description,
      client: client,
      start: startDate,
      end: endDate,
    };

    const response = await fetch(`${PROJECTURL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(dataObj),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const res = await response.json();
    console.log(res);
    history.push("/project");
  },[title, description, client, startDate, endDate]);

  return (
    <div className="section">
      <div className="mb-4">
        <h1 className="heading">
          Edit Project
        </h1>

        <div className="mt-6">
          <h1 className="font-bold">Title</h1>
          <input
            type="text"
            className="input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <h1 className="font-bold">Start Date</h1>
            <DatePicker
              selected={moment(startDate).toDate()}
              className="input"
              dateFormat="dd/MM/yyyy"
              onChange={(date: Date) => setStartDate(date)}
            />

            {/* <input
              type="date"
              className="input"
              placeholder="Start Date"
              value={moment(startDate).format("L")}
              onChange={(e) => setStartDate(new Date(e.target.value))}
            /> */}
          </div>

          <div className="">
            <h1 className="font-bold">End Date</h1>
            <DatePicker
              selected={moment(endDate).toDate()}
              className="input"
              dateFormat="dd/MM/yyyy"
              onChange={(date: Date) => setEndDate(date)}
            />
          </div>
        </div>

        <div className="mt-4">
          <h1 className="font-bold">Client</h1>
          <input
            type="text"
            className="input"
            placeholder="Client"
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
        </div>

        <div className="mt-6">
          <h1 className="font-bold">Description</h1>
          <textarea
            className="resize-none break-words h-20 input"
            placeholder="Type here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button className="button" onClick={editItem}>
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
            <span>Save Changes</span>
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

export default EditProject;
