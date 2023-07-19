import React from "react";
import "./Zakaz.scss";
import Footer from "./Footer"

const Zakaz = () => {
  return (
    <div className="zakaz">
      <div className="container">
        <div className="row">
          <div className="zakaz-title">
            <h2>Как оформить заказ</h2>
          </div>
          <div className="zakaz-content d-flex">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <i class="fa-solid fa-cart-shopping"></i>
              <span>
                Добавляем нужный товар <br /> в корзину. <br />
                Все что есть на сайте, <br /> то в наличии.
              </span>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <i class="fa-solid fa-truck"></i>
              <span>
                Переходим в Корзину, <br /> выбираем способ доставки, <br />{" "}
                жмем “Оформить заказ”.
              </span>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <i class="fa-solid fa-file"></i>
              <span>
                Вводим ФИО, ваш e-mail (на <br /> него придут реквизиты для{" "}
                <br /> оплаты), вводим адрес <br /> доставки, жмем “Подтвердить
                заказ”.
              </span>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <i class="fa-solid fa-envelope"></i>
              <span>
                Далее ждем обработки заказа <br /> и письмо с реквизитами для{" "}
                <br /> оплаты на ваш e-mail.
              </span>
            </div>
          </div>
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>
              По всем вопросам пишите на почту rumassa13@gmail.com или телеграм
              @Rumassa или в чате на сайте
            </strong>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Zakaz;
