import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = ({ setShowSidebar }) => {
    
  return (
    <div>
      <aside>
        <li>
          <div className="d-flex align-items-center">
            <div>
              <img src="./images/logo.png" alt="" />
            </div>
            <div>
              <span>Интернет-магазин RU-massa</span>
            </div>
            <div onClick={() => setShowSidebar(false)}>
              <i class="fa-sharp fa-solid fa-xmark"></i>
            </div>
          </div>
        </li>
        <li>
          <div className="d-flex align-items-center">
            <div>
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="link">
              <Link to={"/login"}> Войти или</Link>
              <Link to={"/register"}>Зарегистрироваться</Link>
            </div>
          </div>
        </li>
        <li>
          <div className="d-flex">
            <i class="fa-solid fa-ellipsis"></i>
            <Link to={"/"}>Каталог</Link>
          </div>
        </li>
        <li>
          <i class="fa-solid fa-list"></i>
          <span>Мои заказы</span>
        </li>
        <li>
          <div className="d-flex">
            <i class="fa-solid fa-cart-shopping"></i>
            <Link to={"/korzina"}>Корзина</Link>
          </div>
        </li>
        <li>
          <i class="fa-regular fa-heart"></i>
          <span>Списки желаний</span>
        </li>
        <li>
          <a href="">
            <i class="fa-sharp fa-solid fa-chart-simple"></i>
            <span>Сравнение</span>
          </a>
        </li>
      <div className="show">
        <Link to={"/OralPreparations"}>Оральные препараты</Link>
        <Link to={"/Injectables"}>Инъекционные препараты</Link>
        <Link to={"/Prepations"}>Препараты ПКТ</Link>
        <Link to={"Hormone"}> Гормон роста</Link>
        <Link to={"/Sarms"}>Сармы/Sarms</Link>
        <i class="fa-solid fa-envelope"></i>
        <i className="fa-brands fa-telegram"></i>
      </div>
      </aside>
    </div>
  );
};

export default Sidebar;
