import React from "react";
import "./Oplata.scss";
import Footer from "./Footer"

const Oplata = () => {
  return (
    <div className="oplata">
      <div className="container">
        <div className="row">
          <div className="oplata-title d-flex">
            <span className="title">Оплата</span>
            <div className="content">
            <span>
              Отправляем заказ после 100% оплаты заказа и доставки, при
              получении посылки доплачивать не нужно. В целях безопастности не
              можем сделать наложенный платеж.
            </span>
            </div>
          </div>
          <div className="oplata-content">
            <div className="visa">
              <h2>Способы оплаты:</h2>
              <img src="./images/yandex.png" alt="img" />
              <span>Яндекс Деньги</span>
              <img src="./images/sber.png" alt="img" />
              <span>Карта Сбербанк</span>
              <img src="./images/garant.png" alt="img" />
              <span>Гарант сервис (на ваш выбор)</span>
            </div>
            <hr />
            <h5>
              Если не знаете как оплатить, пишите консультанту на email,
              telegram или чат на сайте, все расскажем.{" "}
            </h5>
            <div
              class="alert alert-primary alert-dismissible fade show"
              role="alert"
            >
              <strong>Оплачивайте только на те реквизиты, который придут с нашего email или чата на сайте</strong> <br />В telegram вы можете нарваться на мошенника! Мы не выдаем реквизиты через телеграм!
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  );
};

export default Oplata;
