import React from "react";
import "./Addings.scss";
import Email from "./Email";
import Next from "./Next";

const Addings = () => {
  return (
    <div className="addings">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-10">
            <div className="get__things">
              <div className="get__things-title">
                <span>Пополнение товара</span>
              </div>
              <div className="get__things-sp">
                <h2>Пополнение товара Balkan, SP, Tesla, Pharmacom и тд!</h2>
              </div>
              <div className="main__author">
                <div className="add__author">
                  <span>Автор:</span>
                  <img src="./images/icon.png" alt="img" />
                  <span>Гена</span>
                </div>
                <div className="add__date">
                  <i class="fa-solid fa-calendar-days"></i>
                  <span>17.02.2022</span>
                </div>
                <div className="add__coment">
                  <i class="fa-regular fa-comment-dots"></i>
                </div>
              </div>
              <div className="things__title">
                <p>
                  <h6>
                    <span>Balkan Pharmaceuticals:</span> Danabol 10mg, Danabol
                    50mg, Esculap, Parabolan, Primobol, Halotest, Turanabol,
                    Strombaject, Testosterona U, Apollo, Parabolan 10ml флакон,
                    Primobol 10ml флакон, Nandrolona D 10ml флакон, Testosterona
                    C 10ml флакон.
                  </h6>
                  <h6>
                    <span>SP Laboratories:</span> Masteron (propionate) 10ml,
                    Nandrolone-F 10ml, Primobol 10ml, Methandriol 10ml (жидкий
                    турик).
                  </h6>
                  <h6>
                    <span>Tesla:</span> Test P 10ml, Test E 10ml, Test Mix 10ml
                    (суст), Nan Phenyl 10ml, Methan 20mg 50tab, Stan 20mg 50tab,
                    Oxymetholone 50mg 50tab.
                  </h6>
                  <h6>
                    <span>Pharmacom:</span> Pharma Sust 300, Pharma Bold 500.{" "}
                  </h6>
                  <h6>
                    <span>Magnus:</span> Magnyl 5000iu гонадотропин.
                  </h6>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                <div className="add__card">
                  <div className="card__head">
                    <img src="images/main-medicine.png" alt="img" />
                  </div>
                  <div className="card__body">
                    <span>Oxymethalone 20mg/tab, 100tab – ERGO</span>
                    <h6>1360 ₽</h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                <div className="add__card">
                  <div className="card__head">
                    <img
                      className="second__head"
                      src="images/bottle.png"
                      alt="img"
                    />
                  </div>
                  <div className="card__body span__title">
                    <p>Gonadotropin 1000iu, 1 флакон – Olymp Labs</p>
                    <h5>704 ₽</h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                <div className="add__card">
                  <div className="card__head">
                    <img
                      className="second__head"
                      src="images/bottle.png"
                      alt="img"
                    />
                  </div>
                  <div className="card__body">
                    <p>Gonadotropin 2000iu, 1 флакон – Olymp Labs</p>
                    <h5>1280 ₽</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                <div className="add__card">
                  <div className="card__head">
                    <img
                      className="second__head"
                      src="images/bottle.png"
                      alt="img"
                    />
                  </div>
                  <div className="card__body">
                    <p>Gonadotropin 5000iu, 1 флакон – Olymp Labs</p>
                    <h5>2480 ₽</h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                <div className="add__card">
                  <div className="card__head">
                    <img src="images/mask.png" alt="img" />
                  </div>
                  <div className="card__body">
                    <span>Provirol-25 25mg/tab, 40tab – Lyka</span>
                    <h6>1320 ₽</h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                <div className="add__card">
                  <div className="card__head">
                    <img src="images/mask1.png" alt="img" />
                  </div>
                  <div className="card__body">
                    <span>Methenolone Enanthate 100mg/ml, 10ml – ERGO</span>
                    <h6>4880 ₽</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                <div className="add__card">
                  <div className="card__head">
                    <img src="images/mask2.png" alt="img" />
                  </div>
                  <div className="card__body">
                    <span>Bold 250mg/ml, 1amp – Hydrabolic</span>
                    <h6>220 ₽</h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                <div className="add__card">
                  <div className="card__head">
                    <img src="images/mask2.png" alt="img" />
                  </div>
                  <div className="card__body">
                    <span>Deca F 100mg/ml, 1ml – Hydra</span>
                    <h6>264 ₽</h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                <div className="add__card">
                  <div className="card__head">
                    <img src="images/mask2.png" alt="img" />
                  </div>
                  <div className="card__body">
                    <span>Deca D 250mg/ml, 1ml – Hydra</span>
                    <h6>352 ₽</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                <div className="add__card">
                  <div className="card__head">
                    <img src="images/mask3.png" alt="img" />
                  </div>
                  <div className="card__body">
                    <span>Mesterolone 25mg/tab, 40tab – Ultra </span>
                    <h6>1320 ₽</h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                <div className="add__card">
                  <div className="card__head">
                    <img src="images/mask1.png" alt="img" />
                  </div>
                  <div className="card__body">
                    <span>Testosterone P 100mg/ml, 1ml – Qpharm</span>
                    <h6>1056 ₽</h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                <div className="add__card">
                  <div className="card__head">
                    <img src="images/mask2.png" alt="img" />
                  </div>
                  <div className="card__body">
                    <span>Test P 100mg/ml, 1ml – Hydrabolic</span>
                    <h6>88 ₽</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-2">
            <div className="new__products">
              <div className="my__prod">
                <h4>Продукты</h4>
              </div>
              <div className="new__gonadot">
                <div className="gonadot__item">
                  <img src="./images/medicine.png" alt="img" />
                  <div className="gonadot__title">
                    <div className="gonadot__span">
                      <span>Gonadotropin 1000iu, 1 флакон - Olymp Labs</span>
                    </div>
                    <h5>704 ₽</h5>
                  </div>
                </div>
                <hr />
                <div className="gonadot__item">
                  <img src="./images/medicine.png" alt="img" />
                  <div className="gonadot__title">
                    <div className="gonadot__span">
                      <span>Gonadotropin 1000iu, 1 флакон - Olymp Labs</span>
                    </div>
                    <h5>704 ₽</h5>
                  </div>
                </div>
                <hr />
                <div className="gonadot__item">
                  <img src="./images/medicine.png" alt="img" />
                  <div className="gonadot__title">
                    <div className="gonadot__span">
                      <span>Gonadotropin 1000iu, 1 флакон - Olymp Labs</span>
                    </div>
                    <h5>704 ₽</h5>
                  </div>
                </div>
                <hr />
                <div className="gonadot__item">
                  <img src="./images/medicine.png" alt="img" />
                  <div className="gonadot__title">
                    <div className="gonadot__span">
                      <span>Gonadotropin 1000iu, 1 флакон - Olymp Labs</span>
                    </div>
                    <h5>704 ₽</h5>
                  </div>
                </div>
              </div>
              <div className="my__prod">
                <h4 className="new__category">Категории</h4>
              </div>
              <div className="new__gonadot">
                <a href="#">"Сан Фармасьютикалс Индастриз Лтд", Индия</a>
                <a href="#">Balkan Pharmaceuticals</a>
                <a href="#">Baries Pharm</a>
                <a href="#">Bayer</a>
                <a href="#">Body Pharm</a>
                <a href="#">British Dispensary</a>
                <a href="#">British Dragon</a>
                <a href="#">Chang Pharmaceuticals</a>
                <a href="#">Cygnus</a>
                <a href="#">EGIS</a>
                <a href="#">EPF</a>
                <a href="#">ERGO</a>
                <a href="#">Golden Dragon</a>
                <a href="#">Golden Pills</a>
                <a href="#">Hangzhou Gaofeng</a>
                <a href="#">Indian Herbal Pills</a>
                <a href="#">Jera Labs</a>
                <a href="#">Lyka Labs</a>
                <a href="#">Lyka Pharmaceuticals</a>
                <a href="#">Magnus</a>
                <a href="#">Neo Labs</a>
                <a href="#">Olymp Labs</a>
                <a href="#">Pharmacom Labs</a>
                <a href="#">Pharmalabs</a>
                <a href="#">Radjay</a>
                <a href="#">SP Laboratories</a>
                <a href="#">Tesla Pharmacy</a>
                <a href="#">Ultra Pharm</a>
                <a href="#">Uncategorized</a>
                <a href="#">Vermodje</a>
                <a href="#">Watson</a>
                <a href="#">Zhengzhou Pharmaceutical</a>
                <a href="#">Гормон роста</a>
                <a href="#">Готовые курсы</a>
                <a href="#">Инъекционные препараты</a>
                <a href="#">Оральные препараты</a>
                <a href="#">Препараты ПКТ</a>
                <a href="#">Сармы / Sarms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Email />
      <Next />
    </div>
  );
};

export default Addings;
