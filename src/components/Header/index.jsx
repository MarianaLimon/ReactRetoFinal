import React, { useEffect, useState } from "react";

import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import AppButton from "../AppButton";
import AppThemeToggle from "../AppThemeToggle";

import MenuHamburger from "./MenuHamburger";

import "./index.css";
// import Styles from './header.module.css'

export default function Header() {
  const [session, setSession] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token_dev")) {
      setSession(true);
    }
  }, []);
  return (
    <nav className="header d-flex justify-content-between">
      {/* </nav><nav className=´{d-flex ${Styles.Header}}´> */}
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex">
            <MenuHamburger />
            <HeaderLogo />
            <HeaderSearch />
          </div>
          <div className="col-6 d-flex justify-content-end">
            <AppButton
              className={`btn-link d-flex align-items-center justtify-content-center ${
                session ? "d-none" : ""
              }`}
              text="Log in"
              type="anchor"
              url="/login"
            />
            <AppButton
              className={`btn-primary d-flex align-items-center justtify-content-center ${
                session ? "d-none" : ""
              }`}
              text="Create account"
              type="anchor"
              url="/createAccount"
            />
            <AppButton
              className={`btn-primary d-flex align-items-center justify-content-center ${
                !session ? "d-none" : ""
              }`}
              text="Create Post"
              type="anchor"
              url="/createPost"
            />
            <AppThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
