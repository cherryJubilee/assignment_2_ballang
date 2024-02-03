const { createContext, useState, useContext } = require("react");

const initialValue = {
  isLoggedIn: false,
  signIn: () => {},
  logOut: () => {},
};

const AuthContext = createContext(initialValue);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const signIn = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  const value = {
    isLoggedIn,
    signIn,
    logOut,
    username,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
