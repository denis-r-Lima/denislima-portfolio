import { UserCredential } from "@firebase/auth";
import { createContext, useContext } from "react";
import useFirebaseAuth from "../utils/hooks/useFirebaseAuth";

type AuthUserType = {
  uid: string;
  email: string;
};

type AuthUserContextType = {
  authUser: AuthUserType | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signOut: () => Promise<void>;
};

const authUserContext = createContext({} as AuthUserContextType);

const AuthUserProvider: React.FC = ({ children }) => {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
};

export const useAuth = () => useContext(authUserContext);

export default AuthUserProvider;
