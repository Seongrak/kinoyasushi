import React, { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setMenu] = useState(false);

  const enableNavBtn = () => {
    setMenu((isOpen) => !isOpen);
    console.log("Click!");
  };

  return (
    <nav className={styles.header}>
      <ul
        className={
          isOpen
            ? styles["itemList"] + " " + styles["itemList--active"]
            : styles["itemList"] + " " + styles["itemList--hide"]
        }
      >
        <li className={styles.items}>
          <Link to="/" className={styles.link} onClick={() => enableNavBtn()}>
            HOME
          </Link>
        </li>
        <li className={styles.items}>
          <Link
            to="/menu"
            className={styles.link}
            onClick={() => enableNavBtn()}
          >
            MENU
          </Link>
        </li>
        <li className={styles.items}>
          <Link
            to="/drink"
            className={styles.link}
            onClick={() => enableNavBtn()}
          >
            DRINK
          </Link>
        </li>
        <li className={styles.items}>
          <Link
            to="/contact"
            className={styles.link}
            onClick={() => enableNavBtn()}
          >
            CONTACT
          </Link>
        </li>
        <li className={styles.items}>
          <Link
            to="reservation"
            className={styles.link}
            onClick={() => enableNavBtn()}
          >
            RESERVATION
          </Link>
        </li>
      </ul>
      <button class={styles.navBtn} onClick={() => enableNavBtn()}>
        <i class="fas fa-bars"></i>
      </button>

      <div className={styles.navLogo}>
        <Link to="/" className={styles.link} onClick={() => enableNavBtn()}>
          <img
            src="./images/kinoya_toronto.png"
            alt="logo"
            className={styles.logoImg}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
