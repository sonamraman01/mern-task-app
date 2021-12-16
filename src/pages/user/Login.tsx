import { useState, useContext } from "react";
import HeaderContext from "../../context/headerContext";
import { BASEURL } from "../../hooks/Constants";
import { Entities } from "../../types/Types";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const {setShowModal, setIsLoggedIn} = useContext(HeaderContext)
  
  const handleSubmit = async(e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await fetch(BASEURL, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (response && response.ok) {
      const data = await response.json();
      console.log(data);
      localStorage.setItem("entities", JSON.stringify(data?.payload as Entities));
      localStorage.token = data?.payload.token;
      setIsLoggedIn(true);
      setShowModal(false);
    }else{
      setErr("Invalid Email or Password")
    } 
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
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

        <div className="mt-6">
          <h1 className=" font-bold">Email</h1>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-6">
          <h1 className=" font-bold">Password</h1>
          <input
            type="password"
            className="input"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-1 text-red-500">{err}</div>

        <button
          className="bg-gray-600 mx-auto text-white flex justify-center rounded shadow-lg py-2 px-5 mt-6"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
