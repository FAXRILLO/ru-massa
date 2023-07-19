import React from "react";
import "./Adres.scss";
import Page from "../components/Page";
import Footer from "./Footer";

const Adres = () => {
  return (
    <div className="adres">
      <div className="container">
        <Page />
        <div className="adres-title">
          <h1>Адрес доставки</h1>
        </div>
        <div className="kupon">
          <span>
            Есть купон? <b> Нажмите, чтобы ввести</b>
          </span>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-7">
            <div className="adres-content">
              <h2>Оплата и доставка</h2>
              <div className="name">
                <h5>ФИО*</h5>
                <input type="text" placeholder="ФИО" />
              </div>
              <h5>E-mail*</h5>
              <input type="text" placeholder="E-mail" />
              <div className="d-flex justify-content-between region">
                <div>
                  <h5>Страна/регион*</h5>
                  <input
                    className="input__region"
                    type="text"
                    placeholder="Выберите страну/регион..."
                  />
                </div>
                <div>
                  <h5>Область*</h5>
                  <input
                    className="input__region"
                    type="text"
                    placeholder="Область"
                  />
                </div>
              </div>
              <h5>Город*</h5>
              <input type="text" placeholder="Город*" />
              <h5>Индекс*</h5>
              <input type="text" placeholder="Индекс*" />
              <h5>Страна/регион*</h5>
              <input type="text" placeholder="Выберите страну/регион..." />
              <h2>Детали</h2>
              <h5>Примечание (необязательно)</h5>
              <input
                className="input__mobile"
                type="text"
                placeholder="Мобильный пишите сюда, если выбрали EMS доставку"
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5">
            <div className="order">
              <h2>Ваш заказ</h2>
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
                <div className="order__title">
                  <p>
                    Ваши личные данные будут использоваться для обработки ваших
                    заказов, упрощения вашей работы с сайтом и для других целей,
                    описанных в нашей <h5> политика конфиденциальности.</h5>
                  </p>
                </div>
                <div className="check">
                  <input type="checkbox" />
                  <span>Хочу подписаться на новости!</span>
                </div>
                <button>Подтвердить заказ</button>
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

export default Adres;