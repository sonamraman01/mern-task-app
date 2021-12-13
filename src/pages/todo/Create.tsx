import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { ISendTodoData, TODOURL } from "../../hooks/todos";

const Create = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addItems = useCallback(async()=>{
    const dataObj: ISendTodoData = {
      title: title,
      description: description,
    };

    const response = await fetch(TODOURL, {
      method: "POST",
      body: JSON.stringify(dataObj),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log(response);
    const res = await response.json();
    console.log(res);
    setTitle("");
    setDescription("");
    history.push("/")
  },[title, description ])

  return (
    <div className="section">
      <h1 className="heading">Create Todo</h1>

      <div className="mt-6">
        <h1 className="font-bold">Title</h1>
        <input
          className="input"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mt-6">
        <h1 className="font-bold">Description</h1>
        <textarea
          className="resize-none break-words h-40 input"
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

        <button className="button" onClick={() => history.push("/")}>
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

export default Create;
