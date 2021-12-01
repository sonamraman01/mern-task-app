import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getTodoDetails, ISendTodoData, TODOURL } from "../../hooks/todos";

const EditTodo = () => {
  const { item, getTodoDetail } = getTodoDetails();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  useEffect(() => {
    getTodoDetail(Number(id));
  }, []);

  useEffect(()=>{
    if(item?.[0]){
      setTitle(item[0].title ?? "")
      setDescription(item[0].description ?? "")
    }
  },[item])

  const editItem = async () => {
    const dataObj: ISendTodoData = {
      title: title,
      description: description,
    };

    const response = await fetch(`${TODOURL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(dataObj),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const res = await response.json();
    console.log(res);
    history.push("/")
  };

  return (
    <div className="bg-gray-600 rounded shadow p-6 m-10 w-full lg:w-3/4 lg:max-w-lg md:max-w-2xl mx-auto">
      <div className="mb-4">
        <h1 className="text-white text-2xl text-center font-bold">Edit Todo</h1>

        <div className="mt-6">
          <h1 className="text-white font-bold">Title</h1>
          <input
            className="input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mt-6">
          <h1 className="text-white  font-bold">Description</h1>
          <textarea
            className="resize-none break-words h-40 input "
            placeholder="Type here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="button"
            onClick={editItem}
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
            <span>Save Changes</span>
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
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;