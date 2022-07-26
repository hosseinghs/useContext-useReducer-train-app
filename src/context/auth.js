import { useState, useEffect, createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  onLoginFunc: (email, password) => {},
  onLogoutFunc: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInState = localStorage.getItem("isLoggedIn");
    if (loggedInState === "1") setIsLoggedIn(true);
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLoginFunc: loginHandler,
        onLogoutFunc: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
