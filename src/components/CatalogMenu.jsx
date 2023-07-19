import React from "react";
import { Link } from "react-router-dom";
import "./CatalogMenu.scss"

const CatalogMenu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-light catalog-menu">
        <div className="container">
          <div className="catalog-img">
          <img src="./images/more 1.png" alt="img" />
          <Link to={"/"}>Каталог</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav catalog-content">
              <li className="nav-item">
                <Link to="/OralPreparations" className="nav-link" aria-current="page" href="#">
                  Оральные препараты
                  <i className="fa-solid fa-arrow-down-to-line"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Injectables" className="nav-link" href="#">
                  Инъекционные препараты
                  <i className="fa-solid fa-arrow-down-to-line"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Prepations" className="nav-link" href="#">
                  Препараты ПКТ
                  <i className="fa-solid fa-arrow-down-to-line"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Hormone" className="nav-link" href="#">
                  Гормон роста
                  <i className="fa-solid fa-arrow-down-to-line"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Sarms" className="nav-link" href="#">
                  Сармы/Sarms
                  <i className="fa-solid fa-arrow-down-to-line"></i>
                </Link>
              </li>
            </ul>
            <div className="icons">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-user"></i>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link to={"/login"} class="dropdown-item" href="#">
                        Log In
                      </Link>
                    </li>
                    <li>
                      <Link to={"/register"} class="dropdown-item" href="#">
                        Register
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div><i className="fa-solid fa-chart-simple"></i></div>
              <div><i className="fa-regular fa-heart"></i></div>
              <div><div className="my__cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="cart__count">
                <h6>0 ₽</h6>
                <span>0 товаров</span>
                </div>
              </div></div>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CatalogMenu;
