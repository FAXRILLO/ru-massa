import React from "react";
import "./Login.scss"
import Footer from "./Footer"

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="login-dialog">
            <div className="login-title d-flex">
              <img src="./images/logo.png" alt="img" />
              <h5>
                Интернет-магазин <br /> RU-massa
              </h5>
            </div>
              <h1>Вход</h1>
            <div className="login-enter d-flex align-items-center">
              <span>Нет аккаунта?</span>
              <a href="/register">Зарегистрируйтесь</a>
            </div>
            <div className="login-content d-flex justify-content-between">
              <div className="e-mail">
                <h5>Ваша почта</h5>
                <input type="text" placeholder="Введите e-mail" />
              </div>
              <div className="password">
                <h5>Пароль</h5>
                <input type="text" placeholder="Введите ваш пароль" />
              </div>
            </div>
            <div className="login-p">
                <a className="remember" href="#">Запомнить меня</a>
                <a className="forgot" href="#">Забыли пароль?</a>
            </div>
            <div className="btn">
            <button>Войти</button>
            </div>
            <hr />
            <div className="login-click">
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

export default Login;
