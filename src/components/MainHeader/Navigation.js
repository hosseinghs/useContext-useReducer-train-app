import React, { useContext } from "react";
import AuthContext from "../../context/auth";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const { isLoggedIn, onLogoutFunc } = useContext(AuthContext);
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <nav className={classes.nav}>
            {isLoggedIn && (
              <ul>
                <li>
                  <a href="/">Users</a>
                </li>

                <li>
                  <a href="/">Admin</a>
                </li>

                <li>
                  <button onClick={onLogoutFunc}>Logout</button>
                </li>
              </ul>
            )}
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
