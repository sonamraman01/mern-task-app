import { createContext, SetStateAction, Dispatch } from "react";

export interface IHeaderContext {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  setAlert: React.Dispatch<SetStateAction<boolean>>;
  setIsLoggedIn: React.Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
  isLoggedIn: boolean;
  showAlert: boolean;
}

const HeaderContext = createContext<IHeaderContext>({
  isLoggedIn: false,
  showAlert: false,
  showModal: false,
  setAlert: () => console.log(),
  setIsLoggedIn: () => console.log(),
  setShowModal: () => console.log(),
});

export default HeaderContext;
