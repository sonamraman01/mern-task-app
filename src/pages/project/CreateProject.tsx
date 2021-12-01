import { useState } from "react";
import { ISendProjectData, PROJECTURL } from "../../hooks/project";
import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";

const CreateProject = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [client, setClient] = useState("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const addItems = async () => {
    const dataObj: ISendProjectData = {
      title: title,
      description: description,
      client: client,
      start: startDate,
      end: endDate,
    };

    const response = await fetch(PROJECTURL, {
      method: "POST",
      body: JSON.stringify(dataObj),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const res = await response.json();
    console.log(res);
    setTitle("");
    setDescription("");
    setClient("");
    setStartDate(new Date());
    setEndDate(new Date());
    history.push("/project")
  };

  return (
    <div className="bg-gray-600 rounded shadow p-6 m-10 w-full lg:w-3/4 lg:max-w-lg md:max-w-2xl mx-auto">
      <h1 className="text-white text-2xl text-center font-bold">
        Create Project
      </h1>

      <div className="mt-6">
        <h1 className="text-white font-bold">Title</h1>
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
          <h1 className="text-white font-bold">Start Date</h1>
          <DatePicker
            selected={startDate}
            className="input"
            dateFormat="dd/MM/yyyy"
            onChange={(date: Date) => setStartDate(date)}
          />
        </div>

        <div className="">
          <h1 className="text-white font-bold">End Date</h1>
          <DatePicker
            selected={endDate}
            className="input"
            dateFormat="dd/MM/yyyy"
            onChange={(date: Date) => setEndDate(date)}
          />
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-white font-bold">Client</h1>
        <input
          type="text"
          className="input"
          placeholder="Client"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
      </div>

      <div className="mt-6">
        <h1 className="text-white  font-bold">Description</h1>
        <textarea
          className="resize-none break-words h-20 input"
          placeholder="Type here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="justify-between items-center flex">
        <button className="button" onClick={addItems}>
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
          Create
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
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CreateProject;
