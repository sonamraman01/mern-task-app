import {useContext } from "react";
import HeaderContext from "../context/headerContext";

const Alert = () => {
  const {setAlert, setIsLoggedIn} = useContext(HeaderContext)

  const handleLogout=()=>{
    setAlert(false)
    setIsLoggedIn(false);
    // window.location.href = "/";
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative  my-6 mx-auto max-w-3xl w-2/5">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
              <div className=" flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className="h-6 w-6 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold ml-3">Alert</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setAlert(false)}
              >
                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-4 flex-auto">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                Are you sure you want to logout?
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-4 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="alertBtn px-6 mr-2"
                type="button"
                onClick={() => setAlert(false)}
              >
                No
              </button>
              <button className="alertBtn" onClick={handleLogout}>
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export default Alert;
