import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useHistory } from "react-router-dom";
import HeaderContext from "../../context/headerContext";
import { USERURL } from "../../hooks/Constants";
import { IUserData } from "../../types/Types";

const Signup = ({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<string>>;
}) => {
  const history = useHistory();
  const { setShowModal, setIsLoggedIn } = useContext(HeaderContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [errData, setErrData] = useState("");

  const handleSignup = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (cpassword !== password) {
      setErrData("Please Enter The Same Password");
      return;
    }

    const dataObj: IUserData = {
      username: username,
      email: email,
      password: password,
      role: role,
    };
    const response = await fetch(USERURL, {
      method: "POST",
      body: JSON.stringify(dataObj),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const res = await response.json();
    console.log(res);
    setUsername("");
    setEmail("");
    setPassword("");
    setActive("login");
  };

  return (
    <>
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
      <form onSubmit={(e) => handleSignup(e)}>
        <div className="mt-6">
          <h1 className=" font-bold">Username</h1>
          <input
            type="text"
            name="username"
            className="input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mt-6">
          <h1 className=" font-bold">Email</h1>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-6">
          <h1 className=" font-bold">Role</h1>
          <select
            className="border border-gray-800 text-black py-2 px-3  rounded w-full focus:outline-none"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Select</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Client">Client</option>
            <option value="Project Manager">Project Manager</option>
          </select>
        </div>

        <div className="mt-6">
          <h1 className=" font-bold">Password</h1>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-6">
          <h1 className=" font-bold">Confirm Password</h1>
          <input
            type="password"
            name="cpassword"
            className="input"
            placeholder="******"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </div>
        <div className="mt-1 text-red-500">{errData}</div>

        <button
          type="submit"
          className="bg-gray-600 text-white mx-auto flex justify-center rounded shadow-lg py-2 px-5 mt-6"
        >
          Signup
        </button>
      </form>
    </>
  );
};

export default Signup;
