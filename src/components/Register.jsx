import React from "react";
import "./Register.scss";
import Footer from "./Footer";

const Register = () => {
  return (
    <div className="register">
      <div className="register-dialog">
      <div className="container">
        <div className="row">
          <div className="register-title d-flex">
            <img src="./images/logo.png" alt="img" />
            <h5>
              Интернет-магазин <br /> RU-massa
            </h5>
          </div>
          <h1>Регистрация</h1>
          <div className="register-enter">
            <span>Уже есть аккаунт?</span>
            <a href="/login">Войдите</a>
          </div>
          <div className="register-content">
            <div className="register-now d-flex">
              <div className="pochta">
                <h5>Ваша почта</h5>
                <input type="text" placeholder="Введите e-mail" />
              </div>
              <div className="pov-password">
                <h5>Пароль</h5>
                <input type="text" placeholder="Введите ваш пароль" />
              </div>
            </div>
            <div className="register-name d-flex">
              <div className="pov-password">
                <h5>Повторите пароль</h5>
                <input type="text" placeholder="Повторите пароль" />
              </div>
              <div className="name">
                <h5>Имя</h5>
                <input type="text" placeholder="Имя" />
              </div>
            </div>
            <div className="register-surname d-flex">
              <div className="surname">
                <h5>Фамилия </h5>
                <input type="text" placeholder="Фамилия" />
              </div>
              <div className="phone">
                <h5>Ваш телефон</h5>
                <input type="text" placeholder="Ваш телефон" />
              </div>
            </div>
          </div>
          <div className="btn">
          <button>Зарегистрироваться</button>
          </div>
          <hr />
          <div className="register-click">
            <h5>Вход в один клик:</h5>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-google-plus"></i>
          </div>
        </div>
      </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};
export default Register;
