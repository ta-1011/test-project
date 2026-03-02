import React from "react";
import { NavLink } from "react-router";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <ul className={`flex justify-between`}>
        <li>
          <NavLink className={`${styles.header_link}`} to="/">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink className={`${styles.header_link}`} to="/contact">
            お問い合わせ
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
