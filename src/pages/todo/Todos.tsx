import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  useDeleteAllTodos,
  useDeleteTodo,
  useFetchTodos,
} from "../../hooks/todos";

const Todos = () => {
  const history = useHistory();
  const { items, getTodos } = useFetchTodos();
  const { deleteAllTodos } = useDeleteAllTodos();
  const { deleteTodo } = useDeleteTodo();
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);

  // useEffect(()=>{
  //   if(items){
  //     setIsCompleted(items?.isCompleted ?? false)
  //   }
  // },[items])

  // const editItem = useCallback(
  //   async (id) => {
  //     setIsCompleted(!isCompleted)
  //     const dataObj: ISendTodoData = {
  //       isCompleted: isCompleted,
  //     };

  //     const response = await fetch(`${TODOURL}/isComplete/${id}`, {
  //       method: "PATCH",
  //       body: JSON.stringify(dataObj),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     });
  //     const res = await response.json();
  //     console.log(res);
  //   },
  //   [isCompleted]
  // );

  return (
    <div className="section">
      <h1 className="heading">
        Todos
      </h1>
      <div className="mt-6">
        {items?.length === 0 ? (
          <div className="text-center">No Todo Created</div>
        ) : (
          <>
            <div className="flex mb-3 items-center p-1">
              {/* <p className="mr-6 w-1/4">Status</p> */}
              <p className="mr-6 w-full"> Todo Name </p>
              <p className="">Actions</p>
            </div>
            {items?.map((item) => (
              <div
                key={item.id}
                className="list"
              >
                {/* <div className="w-1/4 mr-7">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      checked={isCompleted}
                      onChange={()=>editItem(item.id)}
                    />
                  </label>
                </div> */}

                <p className="w-full capitalize">{item.title}</p>
                <button
                  className="iconBtn mr-2 "
                  onClick={() => history.push(`/edit/${item.id}`)}
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
                  onClick={() => deleteTodo(item.id!).then(() => getTodos())}
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
      <div className="flex items-center justify-between ">
        <button className="button" onClick={() => history.push("/createtodo")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <span>Create Todo</span>
        </button>
        {items?.length !== 0 ? (
          <button
            className="button"
            onClick={() => {
              deleteAllTodos().then(() => getTodos());
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

export default Todos;
