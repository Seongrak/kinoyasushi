import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./contents.module.css";

class Contents extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={styles.container}>
        <Slider {...settings}>
          <div className={styles.items}>
            <img
              src="./images/food_1.png"
              alt="food img"
              className={styles.itemImg}
            />
          </div>
          <div className={styles.items}>
            <img
              src="./images/food_2.png"
              alt="food img"
              className={styles.itemImg}
            />
          </div>
          <div className={styles.items}>
            <img
              src="./images/food_3.png"
              alt="food img"
              className={styles.itemImg}
            />
          </div>
          <div className={styles.items}>
            <img
              src="./images/food_4.png"
              alt="food img"
              className={styles.itemImg}
            />
          </div>
          <div className={styles.items}>
            <img
              src="./images/food_5.png"
              alt="food img"
              className={styles.itemImg}
            />
          </div>
        </Slider>
        <div className={styles.content}>
          <h1 className={styles.title}>FRESH FISH, That's our business </h1>
          <p className={styles.desc}>
            Kinoya sushi is located at the heart of downtown Toronto, the
            District of Entertainment. Kinoya Sushi opened its door to the
            customers since 2019 and has became a place where attracts
            neighbourhood families as well as hungry travellers around the
            world. Owner/Chef Sung has been working as a professional sushi chef
            since 1979. Over 35 years experience, he has been making fresh and
            high-quality food for customers with love. Kinoya sushi serves
            classic fare (sushi and sashimi) including rolls, noodles, and
            tempura dishes in a low-key setting with decorative fish. Come and
            eat at “Kinoya” the famous Japanese Restaurant Today!
          </p>
        </div>
      </div>
    );
  }
}

export default Contents;
