import React from "react";
import "./Dostavka.scss";
import Footer from "./Footer";

const Dostavka = () => {
  return (
    <div className="dostavka">
      <div className="container">
        <div className="row">
          <div className="dostavka-title">
            <h2>Доставка</h2>
          </div>
          <div className="dostavka-russia">
            <h4>Заказы отправляем почтой России:</h4>
          </div>
          <div className="dostavka-content d-flex">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <i class="fa-sharp fa-solid fa-cube"></i>
              <span>
                Посылка 5-14 дней с момента отправки в зависимости от региона,
                обычно не более 10 дней.
              </span>
              <br />
              <img src="./images/money.png" alt="img" />
              <b>Цена сейчас 650 руб.</b>
              <p>
                (на заказы меньше 1500 рублей идет надбавка за доставку в
                размере 200 руб.)
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <img src="./images/ems.png" alt="img" />
              <span>
                ЕМС ускоренная (можно до двери), сроки 2-7 дней с момента
                отправки.
              </span>
              <br />
              <img src="./images/money.png" alt="img" />
              <b>Цена 1 500 руб.</b>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <i class="fa-solid fa-truck"></i>
              <span>
              Отправка заказа происходит в течении 1-9 дней с момента оплаты.
              </span>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dostavka;
