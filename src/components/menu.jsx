import React, { Component } from "react";
import styles from "./menu.module.css";
import Slider from "react-slick";

class Menu extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className={styles.menuContainer}>
        <Slider {...settings}>
          <div className={styles.menuItem}>
            <img src="./menu/course-1.png" alt="menu" className={styles.menu} />
          </div>
          <div className={styles.menuItem}>
            <img src="./menu/menu-1.png" alt="menu" className={styles.menu} />
          </div>
          <div className={styles.menuItem}>
            <img src="./menu/menu-2.png" alt="menu" className={styles.menu} />
          </div>
          <div className={styles.menuItem}>
            <img src="./menu/menu-3.png" alt="menu" className={styles.menu} />
          </div>
          <div className={styles.menuItem}>
            <img src="./menu/menu-4.png" alt="menu" className={styles.menu} />
          </div>
          <div className={styles.menuItem}>
            <img src="./menu/menu-5.png" alt="menu" className={styles.menu} />
          </div>
          <div className={styles.menuItem}>
            <img src="./menu/menu-6.png" alt="menu" className={styles.menu} />
          </div>
          <div className={styles.menuItem}>
            <img src="./menu/menu-7.png" alt="menu" className={styles.menu} />
          </div>
          <div className={styles.menuItem}>
            <img src="./menu/menu-8.png" alt="menu" className={styles.menu} />
          </div>
          <div className={styles.menuItem}>
            <img src="./menu/drink-3.png" alt="menu" className={styles.menu} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Menu;
