import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import Signup from "../pages/user/Signup";
import Login from "../pages/user/Login";
import HeaderContext from "../context/headerContext";

const Modal = () => {
  const history = useHistory();
  const [active, setActive] = useState("login");
  const {setShowModal} = useContext(HeaderContext)

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative  my-6 mx-auto max-w-3xl w-1/2">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-3 border-b  border-solid border-blueGray-200 rounded-t">
              <div className="flex items-center border-2 border-gray-600 rounded">
                <div
                  role="button"
                  className={`text-xl px-3 py-1 font-semibold ${active === "login" ? "bg-gray-600 text-white" : ""}`}
                  onClick={() => setActive("login")}
                >
                  Login
                </div>
                <div
                  role="button"
                  className={`text-xl px-3 py-1 font-semibold ${active === "signup" ? "bg-gray-600 text-white" : ""}`}
                  onClick={() => setActive("signup")}
                >
                  Signup
                </div>
              </div>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="px-8 pt-4 pb-8">
              {active === "login" ? (
                <Login />
              ) : (
                <Signup setActive = {setActive}/>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
