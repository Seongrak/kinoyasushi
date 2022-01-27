import React, { useEffect } from "react";
import styles from "./footer.module.css";

const Footer = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.insideImg}>
        <img src="./images/inside1.jpeg" alt="inside img" />
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerItem}>
          <h1>Find us</h1>
          <p className={styles.footerinfo}>
            KINOYA SUSHI and BAR
            <br />
            293 King St W, Toronto, ON M5V 1J5
            <br />
            416 599 8828 <br />
            <br />
            -<br />
            <div className={styles.btnIcons}>
              <span
                className={styles.icons}
                onClick={() =>
                  window.open(
                    "https://www.order.store/ca/store/kinoya-sushi-and-bar/MTWYkl8_T_6x-2dyydkAsQ?utm_source=web-restaurant-manager",
                    "_blank"
                  )
                }
              >
                <i class="fab fa-uber"></i>
              </span>
              <span
                className={styles.icons}
                onClick={() =>
                  window.open(
                    "https://ritual.co/order/kinoya-sushi-bar-john-king-toronto/d5ce?r=KINOYA",
                    "_blank"
                  )
                }
              >
                <i class="fas fa-walking"></i>
              </span>
              <span
                className={styles.icons}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/kinoyatoronto/?hl=en",
                    "_blank"
                  )
                }
              >
                <i class="fab fa-instagram"></i>
              </span>
            </div>
          </p>
        </div>
        <div className={styles.footerItem}>
          <h1>Store Hours</h1>
          <p className={styles.footerinfo}>
            Monday - Saturday 11:30 AM - 10:00 PM
            <br />
            Sunday CLOSED
            <br />
            - <br />
            Lunch Hour 11:30 AM - 3:30 PM <br />
            Dinner Hour 3:30 PM - 10:00 PM <br />
            - <br />
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
