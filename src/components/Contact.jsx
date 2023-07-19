import React from "react";
import "./Contact.scss";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-title">
          <h2>КОнтакты</h2>
          <div className="letters">
            <div className="my__telegram">
              <div className="my__tg">
                <i class="fa-brands fa-telegram"></i>
              </div>
              <div className="my__tg-content">
                <span>
                  Telegram: <b>@Rumassa</b>
                </span>
                <p>Кликай для начала диалога</p>
              </div>
            </div>
            <div className="my__email">
              <div className="my__mail">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="my__mail-content">
                <span>E-mail: rumassa13@gmail.com</span>
                <p>Электронная почта</p>
              </div>
            </div>
          </div>
          <div className="about">
            <div className="about__inputs">
              <div className="name">
                <p>Ваше имя*</p>
                <input type="text" placeholder="Ваше имя" />
              </div>
              <div className="your__email">
                <p>Ваш e-mail*</p>
                <input type="text" placeholder="Ваш e-mail" />
              </div>
              <div className="login">
                <p>Ваш логин telegram</p>
                <input type="text" placeholder="Ваш логин telegram" />
              </div>
            </div>
            <div className="coment">
              <p>Для комментария</p>
              <input type="text" placeholder="Для комментария" />
            </div>
            <div className="my__btn">
              <button>Отправить</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
