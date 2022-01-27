import React, { useEffect } from "react";
import styles from "./reservation.module.css";

const Reservation = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <h1>RESERVATION</h1>
      <p className={styles.desc}>
        You can enjoy great tasting menu items in a warm and friendly
        atmosphere.
        <br />
        Please call us to reserve in advance at 416-599-8828.
        <br />
      </p>
      <p> We need the following information to make a reservation.</p>
      <ul className={styles.reservationList}>
        <li>Your Name</li>
        <li>Phone Number</li>
        <li>Date</li>
        <li>The number of guests</li>
      </ul>
      <p>
        We are not able to hold your reserved table no longer than 15 minutes.
      </p>
      <div className={styles.bar}></div>
      <h1>SERVICES OVERVIEW</h1>
      <h3>DINE IN</h3>
      <p>
        For the complete KINOYA SUSHI experience, we suggest dinning in and let
        our excellent servers pamper you. We offer cozy table and private booth.
      </p>
      <h3>TAKE-OUT</h3>
      <p>
        If you prefer to order from the comfort of your own home and avoid
        waiting in the restaurant please call 416-599-8828 to place your order.
      </p>
      <h3>PROMOTION</h3>
      <p>15% off on all kinds of Take out order over $20</p>
      <div className={styles.bar}></div>
    </div>
  );
};

export default Reservation;
