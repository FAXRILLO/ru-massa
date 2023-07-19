import React from "react";
import "./Reviews.scss";
import Slider from "react-slick";
import { my__Settings } from "./Settings";

const Reviews = () => {
  return (
    <div className="reviews">
        <div className="container">
      <div className="reviews-title">
        <h2>Отзывы</h2>
        <div className="btn">
          <span>Все отзывы</span>
        </div>
      </div>
      <div className="slider-1">
        <Slider {...my__Settings}>
          <div>
            <img src="./images/icon.png" alt="1" />
            <h4>Кирилл</h4>
            
            <p>
              Заказывал 8 мая, сегодня забрал с почты посылку 20 мая. Всё в
              наличии, всё целое. Спасибо за работу. Александр .С. 40 лет.
            </p>
            <div className="btns">
                <a href="#">Читать еще</a>
                <button className="facebook">
                <i class="fa-brands fa-facebook-f"></i>
                </button>
            </div>
          </div>
          <div>
            <img src="./images/icon2.png" alt="1" />
            <h4>Кирилл</h4>
            <p>
              Заказывал 8 мая, сегодня забрал с почты посылку 20 мая. Всё в
              наличии, всё целое. Спасибо за работу. Александр .С. 40 лет.
            </p>
            <div className="btns">
                <a href="#">Читать еще</a>
                <button className="facebook">
                <i class="fa-brands fa-facebook-f"></i>
                </button>
            </div>
          </div>
          <div>
            <img src="./images/icon3.png" alt="1" />
            <h4>Кирилл</h4>
            <p>
              Заказывал 8 мая, сегодня забрал с почты посылку 20 мая. Всё в
              наличии, всё целое. Спасибо за работу. Александр .С. 40 лет.
            </p>
            <div className="btns">
                <a href="#">Читать еще</a>
                <button className="facebook">
                <i class="fa-brands fa-facebook-f"></i>
                </button>
            </div>
          </div>
          <div>
            <img src="./images/icon.png" alt="1" />
            <h4>Кирилл</h4>
            <p>
              Заказывал 8 мая, сегодня забрал с почты посылку 20 мая. Всё в
              наличии, всё целое. Спасибо за работу. Александр .С. 40 лет.
            </p>
            <div className="btns">
                <a href="#">Читать еще</a>
                <button className="facebook">
                <i class="fa-brands fa-facebook-f"></i>
                </button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default Reviews;
