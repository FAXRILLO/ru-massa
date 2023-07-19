import React from "react";
import "./Sale.scss"
import Email from "./Email"
import Footer from "./Footer"

const Sale = () => {
  return (
    <div className="sale">
      <div className="container">
        <div className="row">
          <div className="sale-title">
            <h2>Скидки</h2>
          </div>
          <div className="sale-content d-flex">
           <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
           <h5>Чем больше сумма вашего заказа, тем больше вы экономите.</h5>
            <p>
              К примеру, ваш заказ на 19 000 руб, ваша скидка 5%, к оплате 18
              050 руб А если ваш заказ 20 500 руб, ваша скидка 10%, к оплате 18
              000руб
            </p>
            <h6>Платите меньше,а “вкуснях” набрали на 1 500 руб больше</h6>
            <div className="sale-left-content d-flex">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <i class="fa-solid fa-arrow-right"></i>
            <span> <b>5% </b>от 7 000 руб</span>
            <br />
            <i class="fa-solid fa-arrow-right"></i>
            <span> <b>15%  </b>от 35 000 руб</span>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <i class="fa-solid fa-arrow-right"></i>
            <span> <b>10% </b>от 20 000 руб</span>
            <br />
            <i class="fa-solid fa-arrow-right"></i>
            <span> <b>20%  </b> от 50 000 руб</span>
            </div>
            </div>
           </div>
           <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <img src="./images/img-boy.png" alt="img" />
           </div>
          </div>
        </div>
      </div>
        <Email />
        <Footer />
    </div>
  );
};

export default Sale;
