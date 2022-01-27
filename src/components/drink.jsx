import React, { useEffect } from "react";
import styles from "./drink.module.css";

const Drink = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <img
        src="./menu/drink-1.png"
        alt="drink menu"
        className={styles.drinkImg}
      />
      <img
        src="./menu/drink-2.png"
        alt="drink menu"
        className={styles.drinkImg}
      />
    </div>
  );
};

export default Drink;
