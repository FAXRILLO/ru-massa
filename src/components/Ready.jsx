import React from "react";
import "./Ready.scss";
import Page from "./Page";
import Footer from "./Footer";

const Ready = () => {
  return (
    <div className="ready">
      <div className="container">
        <Page />
        <div className="attention">
          <span>
            Внимание! Реквизиты приходят на ваш емайл моментально, если не
            пришли, проверьте спам папку!
          </span>
          <p>
            Для оплаты криптовалютой, запросите кошелек . По всем вопросам
            напишите мне на емайл rumassa13@gmail.com или в телеграм @Rumassa ,
            а так же в чат на сайте.
          </p>
        </div>
        <div className="adopted">
          <h2>Спасибо! </h2>
          <h3>Ваш заказ был принят</h3>
        </div>
        <div className="row about__order d-flex">
          <div className="col-12 col-sm-12 col-md-12 col-sm-4 col-xl-4">
            <div className="order__number">
              <span>Номер заказа: 15255</span>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-sm-4 col-xl-4">
            <div className="order__date">
              <span>Дата: 25.06.2022</span>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-sm-4 col-xl-4">
            <div className="order__overal">
              <span>Итого: 1 440₽</span>
            </div>
          </div>
        </div>
        <div className="order">
          <div className="order__card">
            <div className="order__amount">
              <h2>Информация о заказе</h2>
              <div className="thing">
                <h5>товар</h5>
                <h5>итого</h5>
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
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Ready;