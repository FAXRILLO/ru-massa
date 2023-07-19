import React from "react";
import Slider from "react-slick";
import { my_Settings } from "./Settings";
import "./Reko.scss";
import { Link } from "react-router-dom";

const Reko = () => {
  return (
    <div>
      <section className="reko">
        <div className="container">
          <div className="row">
            <div className="reko-title">
              <h2>РуМасса рекомендует</h2>
              <div className="btn">
                <img src="./images/more 1.png" alt="1" />
                <span>Каталог</span>
              </div>
            </div>
            <div className="slides">
              <Slider {...my_Settings}>
                <div>
                  <img src="./images/group.png" alt="1" />
                  <i className="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-chart-simple"></i>
                  <h4>
                    Metha 10, 10mg/caps,
                    <br /> br 100caps
                  </h4>
                  <p>Оральные препараты, Метандиенон, Chang Pharmaceuticals</p>
                  <h5>880 ₽</h5>
                  <div className="btns">
                    <button className="trash">В корзину</button>
                    <Link to={"/singleProduct"} className="about-reko">
                      Подробнее
                    </Link>
                  </div>
                </div>
                <div>
                  <img src="./images/group.png" alt="1" />
                  <i className="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-chart-simple"></i>
                  <h4>
                    Metha 10, 10mg/caps,
                    <br /> 100caps
                  </h4>
                  <p>Оральные препараты, Метандиенон, Chang Pharmaceuticals</p>
                  <h5>880 ₽</h5>
                  <div className="btns">
                    <button className="trash">В корзину</button>
                    <Link to={"/singleProduct"} className="about-reko">
                      Подробнее
                    </Link>
                  </div>
                </div>
                <div>
                  <img src="./images/group.png" alt="1" />
                  <i className="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-chart-simple"></i>
                  <h4>
                    Metha 10, 10mg/caps,
                    <br /> 100caps
                  </h4>
                  <p>Оральные препараты, Метандиенон, Chang Pharmaceuticals</p>
                  <h5>880 ₽</h5>
                  <div className="btns">
                    <button className="trash">В корзину</button>
                    <Link to={"/singleProduct"} className="about-reko">
                      Подробнее
                    </Link>
                  </div>
                </div>
                <div>
                  <img src="./images/group.png" alt="1" />
                  <i className="fa-regular fa-heart"></i>
                  
                  <i class="fa-solid fa-chart-simple"></i>
                  
                  <h4>
                    Metha 10, 10mg/caps,
                    <br /> 100caps
                  </h4>
                  <p>Оральные препараты, Метандиенон, Chang Pharmaceuticals</p>
                  <h5>880 ₽</h5>
                  <div className="btns">
                    <button className="trash">В корзину</button>
                    <Link to={"/singleProduct"} className="about-reko">
                      Подробнее
                    </Link>
                  </div>
                </div>
                <div>
                  <img src="./images/group.png" alt="1" />
                  <i className="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-chart-simple"></i>
                  
                  <h4>
                    Metha 10, 10mg/caps,
                    <br /> br 100caps
                  </h4>
                  <p>Оральные препараты, Метандиенон, Chang Pharmaceuticals</p>
                  <h5>880 ₽</h5>
                  <div className="btns">
                    <button className="trash">В корзину</button>
                    <Link to={"/singleProduct"} className="about-reko">
                      Подробнее
                    </Link>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reko;
