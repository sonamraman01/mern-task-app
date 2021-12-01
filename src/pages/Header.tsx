import { useState } from "react";
import { useHistory } from "react-router-dom";
import Login from "./user/Login";

const Header = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-gray-600">
      <div className="flex-grow-0 flex items-center text-white mr-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mr-2"
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
        <span className="font-semibold text-xl tracking-tight">Todo App</span>

        <button
          className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="flex-grow flex items-center w-auto text-sm">
        <button
          onClick={() => history.push("/")}
          className=" inline-block text-teal-200 text-white mr-4 font-bold"
        >
          Todos
        </button>

        <button
          onClick={() => history.push("/user")}
          className=" inline-block  text-teal-200 text-white mr-4 font-bold"
        >
          Users
        </button>

        <button
          onClick={() => history.push("/project")}
          className=" inline-block text-teal-200 text-white mr-4 font-bold"
        >
          Projects
        </button>

        <button
          onClick={() => history.push("/task")}
          className=" inline-block text-teal-200 text-white mr-4 font-bold"
        >
          Tasks
        </button>
      </div>

      <div className="flex-grow-0">
        <button  onClick={() => history.push("/login")} className="bg-gray-500 text-white rounded shadow-lg py-2 px-5 mr-3">
          Login
        </button>

        <button  onClick={() => history.push("/signup")} className="bg-gray-500 text-white rounded shadow-lg py-2 px-5">
          Signup
        </button>
      </div>
    </nav>
    </>
  );
};

export default Header;