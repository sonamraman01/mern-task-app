import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../components/Alert";
import Modal from "../components/Modal";
import HeaderContext from "../context/headerContext";

const Header = () => {
  const history = useHistory();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setAlert] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [active, setActive] = useState("home");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token !== null) {
      setIsLoggedIn(true);
    }
  }, [token]);

  return (
    <>
      <HeaderContext.Provider
        value={{
          isLoggedIn,
          showAlert,
          showModal,
          setIsLoggedIn,
          setAlert,
          setShowModal,
        }}
      >
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-gray-600">
          <div className="flex items-center lg:w-auto w-full justify-between text-white">
            <div className="flex items-center mr-6 relative justify-between lg:static lg:justify-start">
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
              <span className="font-semibold text-2xl tracking-tight">
                Todo App
              </span>
            </div>

            <button
              className="text-white text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => {
                setNavbarOpen(!navbarOpen);
              }}
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

          <div className={"md:flex flex-grow" + (navbarOpen ? " " : " hidden")}>
            <div className="md:flex-grow mt-5 md:mt-0 flex flex-col lg:flex-row list-none lg:ml-auto items-center w-auto text-sm">
              {!isLoggedIn ? (
                <button
                  onClick={() => {
                    history.push("/");
                    setActive("home");
                  }}
                  className={`navbar-item ${
                    active === "home" ? "underline" : ""
                  }`}
                >
                  Home
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      history.push("/todo");
                      setActive("todo");
                    }}
                    className={`navbar-item ${
                      active === "todo" ? "underline" : ""
                    }`}
                  >
                    Todos
                  </button>

                  <button
                    onClick={() => {
                      history.push("/user");
                      setActive("user");
                    }}
                    className={`navbar-item ${
                      active === "user" ? "underline" : ""
                    }`}
                  >
                    Users
                  </button>

                  <button
                    onClick={() => {
                      history.push("/project");
                      setActive("project");
                    }}
                    className={`navbar-item ${
                      active === "project" ? "underline" : ""
                    }`}
                  >
                    Projects
                  </button>

                  <button
                    onClick={() => {
                      history.push("/task");
                      setActive("task");
                    }}
                    className={`navbar-item ${
                      active === "task" ? "underline" : ""
                    }`}
                  >
                    Tasks
                  </button>
                </>
              )}
            </div>

            {!isLoggedIn ? (
              <button onClick={() => setShowModal(true)} className="navbar-btn">
                Login
              </button>
            ) : (
              <button onClick={() => setAlert(true)} className="navbar-btn">
                Logout
              </button>
            )}
          </div>
        </nav>

        {showModal ? <Modal /> : null}
        {showAlert ? <Alert /> : null}
      </HeaderContext.Provider>
    </>
  );
};

export default Header;
