import React from "react";
import "./Korzina.scss";
import Page from "./Page";
import Footer from "./Footer";

const Korzina = () => {
  return (
    <div className="korzina">
      <div className="container">
          <Page />
          <div className="korzina-title">
            <h2>Корзина</h2>
          </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-7">
            <div className="box">
              <div className="product">
                <div className="xmark">
                <i class="fa-solid fa-xmark"></i>
                </div>
                <img src="./images/image 52.png" alt="img" />
                <div className="product__title">
                  <p>Oxymethalone 20mg/tab, 100tab – ERGO</p>
                </div>
              </div>
              <div className="price">
                <span>Цена</span>
                <p>880 ₽</p>
              </div>
              <div className="amount">
                  <span>Количество</span>
                  <div className="amout__box">
                    <div className="minus">-</div>
                    <div className="number">1</div>
                    <div className="plus">+</div>
                  </div>
              </div>
              <div className="total">
                <span>Подытог</span>
                <p>880 ₽  </p>
              </div>
            </div>
            <div className="box__input">
              <input type="text" placeholder="Код купона" />
              <button>Применить купон</button>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5">
          <div className="order">
              <h2>Сумма заказов</h2>
              <div className="order__card">
                <div className="order__amount">
                  <div className="thing">
                    <h5>товар</h5>
                    <h5>подытог</h5>
                  </div>
                  <div className="amount">
                    <span>Testosterone Propionate 100mg/ml, 10ml × 1</span>
                    <span>880₽</span>
                  </div>
                  <div className="delivery">
                    <h5>Доставка</h5>
                    <span>
                      Доставка почтой из РФ: <h6>960₽</h6>
                    </span>
                  </div>
                  <div className="all">
                    <h5>Итого</h5>
                    <h5 className="all__amount">1 440 ₽</h5>
                  </div>
                </div>
                <button>Оформить заказ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Korzina;