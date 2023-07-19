import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3">
            <div className="massa d-flex align-items-center">
              <img src="./images/logo.png" alt="1" />
              <h5>
                Интернет-магазин <br /> RU-massa
              </h5>
            </div>
            <p>
              Магазин спортивной фармакологии с доставкой из России в Москву,
              Санкт-Питербург и другие города. Так же доставляем в любую точку
              мира.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-2">
            <h4>Категории</h4>
            <Link to={"/OralPreparations"}>Оральные препараты</Link>
            <Link to={"/Injectables"}>Инъекционные препараты</Link>
            <Link to={"/Prepations"}>Препараты ПКТ</Link>
            <Link to={"/Hormone"}>Гормоны роста</Link>
            <Link to={"/Sarms"}>Сармы/Sarms</Link>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-2">
            <Link className="zakaz" to={"/zakaz"}>Как оформить заказ</Link>
            <Link to={"/oplata"}>Оплата</Link>
            <Link to={"/dostavka"}>Доставка</Link>
            <Link to={"/obmen"}>Обмен и возрат</Link>
            <Link to={"/otziv"}>Отзывы</Link>
            <Link to={"/sale"}>Скидки</Link>
            <Link to={"/novost"}>Новости</Link>
            <Link to={"/contact"}>Контакты</Link>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-2">
            <h4>Новости</h4>
            <h5 className="footer-f">Смена домена, новый адрес ru-massa.info</h5>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3">
            <h4>Контакты</h4>
            <div className="phone">
            <i className="fa-solid fa-phone"></i>
            <span>7 (567) 439-82-34</span>
            </div>
            <div className="phone">
            <i class="fa-solid fa-envelope"></i>
            <span>E-mail: <b> rumassa13@gmail.com</b></span>
            </div>
            <div className="phone">
            <i class="fa-brands fa-telegram"></i>
            <span> <b>@Rumassa_bot</b> для заказа</span>
            </div>
            <div className="phone">
            <i class="fa-brands fa-telegram"></i>
            <span>Telegram: <b> @consultant_rumassa</b></span>
            <h5>(составление курсов и т.д.)</h5>
            </div>
            <div className="phone">
            <i class="fa-brands fa-telegram"></i>
            <span>Telegram: <b>@Rumassa</b></span>
            </div>
            <div className="phone">
            <i class="fa-brands fa-telegram"></i>
            <b>Новости в телеграм</b>
            </div>
            <div className="phone">
            <i class="fa-brands fa-telegram"></i>
            <b>Чат в телеграм</b>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
