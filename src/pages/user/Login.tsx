import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  
  return (
    <>
      <div className="bg-gray-600 text-white rounded shadow p-6 m-10 w-full lg:w-3/4 lg:max-w-lg md:max-w-2xl mx-auto">
        <form className="">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-white text-2xl text-center mt-4 font-bold">Login</h1>

          <div className="mt-6">
            <h1 className=" font-bold">Email</h1>
            <input type="email" className="input" placeholder="Email" />
          </div>

          <div className="mt-6">
            <h1 className=" font-bold">Password</h1>
            <input type="password" className="input" placeholder="******" />
          </div>
         
          <button
            className="bg-gray-500 mx-auto flex justify-center rounded shadow-lg py-2 px-5 mt-6"
            type="submit"
          >
            Login
          </button>

          <div onClick={()=>history.push("/signup")} className="text-center cursor-pointer underline mt-4">Not have an account? Signup</div>
        </form>
      </div>
    </>
  );
};

export default Login;
