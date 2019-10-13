import React from "react";
import isAuth from "../services/auth";

import "./Header.css";

export default function Header(props) {
  const ref = props.param;
  let redirect;
  const onButtonClick = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  if (!isAuth()) {
    redirect = `/login`;
  } else if (isAuth()) {
    redirect = "/dashboard";
  }
  const logout = () => {
    localStorage.removeItem("user");
  };
  return (
    <header>
      <a className="Home" href="/">
        Secure medical records
      </a>
      {!props.loged && (
        <>
          <nav>
            <ul className="nav_links">
              <li>
                <a className="About" href="#about" onClick={onButtonClick}>
                  About
                </a>
              </li>
            </ul>
          </nav>

          <a className="Login" href={redirect}>
            <button className="login-button">Log in</button>
          </a>
        </>
      )}
      {props.loged && (
        <a className="Login" href="/">
          <button className="logout-button" onClick={logout}>
            Log out
          </button>
        </a>
      )}
    </header>
  );
}
