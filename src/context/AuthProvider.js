import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();
//using context
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  //   const allContext = "useFirebase()";
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;