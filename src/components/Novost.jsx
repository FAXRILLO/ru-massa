import React from "react";
import "./Novost.scss";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Novost = () => {
  return (
    <div className="novost">
      <div className="container">
        <div className="novost__title">
          <h2>Новости</h2>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-10">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                  <img src="./images/gym.png" class="card-img-top" alt="img" />
                  <button className="img__news">Без рубрики</button>
                  <div class="card-body">
                    <h5 class="card-title">Смена домена</h5>
                    <div class="card-text d-flex justify-content-between">
                      <div className="calendar">
                        <i class="fa-solid fa-calendar"></i>
                        <span>17.02.2022</span>
                      </div>
                      <div className="avtor">
                        <span>Автор:</span>
                        <img src="./images/icon.png" alt="img" />
                        <span>Гена</span>
                      </div>
                    </div>
                    <div className="card-p">
                      <p>Новый адрес ru-massa.info</p>
                    </div>
                    <div className="card-share">
                      <div className="my__message">
                        <i class="fa-solid fa-message"></i>
                      </div>
                      <div className="my__nodes">
                        <i class="fa-solid fa-share-nodes"></i>
                      </div>
                    </div>
                    <button>Читать</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                  <img src="./images/gym1.png" class="card-img-top" alt="img" />
                  <Link to={"/addings"} className="img__news object">
                    Пополнение товара
                  </Link>
                  <div class="card-body">
                    <h5 class="card-title">Товары</h5>
                    <div class="card-text d-flex justify-content-between">
                      <div className="calendar">
                        <i class="fa-solid fa-calendar"></i>
                        <span>17.02.2022</span>
                      </div>
                      <div className="avtor">
                        <span>Автор:</span>
                        <img src="./images/icon.png" alt="img" />
                        <span>Гена</span>
                      </div>
                    </div>
                    <div className="card-p">
                      <p>+ Товары к ассортименту</p>
                    </div>
                    <div className="card-share">
                      <div className="my__message">
                        <i class="fa-solid fa-message"></i>
                      </div>
                      <div className="my__nodes">
                        <i class="fa-solid fa-share-nodes"></i>
                      </div>
                    </div>
                    <button>Читать</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                  <img src="./images/gym.png" class="card-img-top" alt="img" />
                  <button className="img__news">Без рубрики</button>
                  <div class="card-body">
                    <h5 class="card-title">Смена домена</h5>
                    <div class="card-text d-flex justify-content-between">
                      <div className="calendar">
                        <i class="fa-solid fa-calendar"></i>
                        <span>17.02.2022</span>
                      </div>
                      <div className="avtor">
                        <span>Автор:</span>
                        <img src="./images/icon.png" alt="img" />
                        <span>Гена</span>
                      </div>
                    </div>
                    <div className="card-p">
                      <p>Новый адрес ru-massa.info</p>
                    </div>
                    <div className="card-share">
                      <div className="my__message">
                        <i class="fa-solid fa-message"></i>
                      </div>
                      <div className="my__nodes">
                        <i class="fa-solid fa-share-nodes"></i>
                      </div>
                    </div>
                    <button>Читать</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                  <img src="./images/gym1.png" class="card-img-top" alt="img" />
                  <Link to={"/addings"} className="img__news object">
                    Пополнение товара
                  </Link>
                  <div class="card-body">
                    <h5 class="card-title">Товары</h5>
                    <div class="card-text d-flex justify-content-between">
                      <div className="calendar">
                        <i class="fa-solid fa-calendar"></i>
                        <span>17.02.2022</span>
                      </div>
                      <div className="avtor">
                        <span>Автор:</span>
                        <img src="./images/icon.png" alt="img" />
                        <span>Гена</span>
                      </div>
                    </div>
                    <div className="card-p">
                      <p>+ Товары к ассортименту</p>
                    </div>
                    <div className="card-share">
                      <div className="my__message">
                        <i class="fa-solid fa-message"></i>
                      </div>
                      <div className="my__nodes">
                        <i class="fa-solid fa-share-nodes"></i>
                      </div>
                    </div>
                    <button>Читать</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                  <img src="./images/gym1.png" class="card-img-top" alt="img" />
                  <Link to={"/addings"} className="img__news object">
                    Пополнение товара
                  </Link>
                  <div class="card-body">
                    <h5 class="card-title">Товары</h5>
                    <div class="card-text d-flex justify-content-between">
                      <div className="calendar">
                        <i class="fa-solid fa-calendar"></i>
                        <span>17.02.2022</span>
                      </div>
                      <div className="avtor">
                        <span>Автор:</span>
                        <img src="./images/icon.png" alt="img" />
                        <span>Гена</span>
                      </div>
                    </div>
                    <div className="card-p">
                      <p>+ Товары к ассортименту</p>
                    </div>
                    <div className="card-share">
                      <div className="my__message">
                        <i class="fa-solid fa-message"></i>
                      </div>
                      <div className="my__nodes">
                        <i class="fa-solid fa-share-nodes"></i>
                      </div>
                    </div>
                    <button>Читать</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                  <img src="./images/gym.png" class="card-img-top" alt="img" />
                  <button className="img__news">Без рубрики</button>
                  <div class="card-body">
                    <h5 class="card-title">Смена домена</h5>
                    <div class="card-text d-flex justify-content-between">
                      <div className="calendar">
                        <i class="fa-solid fa-calendar"></i>
                        <span>17.02.2022</span>
                      </div>
                      <div className="avtor">
                        <span>Автор:</span>
                        <img src="./images/icon.png" alt="img" />
                        <span>Гена</span>
                      </div>
                    </div>
                    <div className="card-p">
                      <p>Новый адрес ru-massa.info</p>
                    </div>
                    <div className="card-share">
                      <div className="my__message">
                        <i class="fa-solid fa-message"></i>
                      </div>
                      <div className="my__nodes">
                        <i class="fa-solid fa-share-nodes"></i>
                      </div>
                    </div>
                    <button>Читать</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                  <img src="./images/gym1.png" class="card-img-top" alt="img" />
                  <Link to={"/addings"} className="img__news object">
                    Пополнение товара
                  </Link>
                  <div class="card-body">
                    <h5 class="card-title">Товары</h5>
                    <div class="card-text d-flex justify-content-between">
                      <div className="calendar">
                        <i class="fa-solid fa-calendar"></i>
                        <span>17.02.2022</span>
                      </div>
                      <div className="avtor">
                        <span>Автор:</span>
                        <img src="./images/icon.png" alt="img" />
                        <span>Гена</span>
                      </div>
                    </div>
                    <div className="card-p">
                      <p>+ Товары к ассортименту</p>
                    </div>
                    <div className="card-share">
                      <div className="my__message">
                        <i class="fa-solid fa-message"></i>
                      </div>
                      <div className="my__nodes">
                        <i class="fa-solid fa-share-nodes"></i>
                      </div>
                    </div>
                    <button>Читать</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                  <img src="./images/gym.png" class="card-img-top" alt="img" />
                  <button className="img__news">Без рубрики</button>
                  <div class="card-body">
                    <h5 class="card-title">Смена домена</h5>
                    <div class="card-text d-flex justify-content-between">
                      <div className="calendar">
                        <i class="fa-solid fa-calendar"></i>
                        <span>17.02.2022</span>
                      </div>
                      <div className="avtor">
                        <span>Автор:</span>
                        <img src="./images/icon.png" alt="img" />
                        <span>Гена</span>
                      </div>
                    </div>
                    <div className="card-p">
                      <p>Новый адрес ru-massa.info</p>
                    </div>
                    <div className="card-share">
                      <div className="my__message">
                        <i class="fa-solid fa-message"></i>
                      </div>
                      <div className="my__nodes">
                        <i class="fa-solid fa-share-nodes"></i>
                      </div>
                    </div>
                    <button>Читать</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                  <img src="./images/gym.png" class="card-img-top" alt="img" />
                  <button className="img__news">Без рубрики</button>
                  <div class="card-body">
                    <h5 class="card-title">Смена домена</h5>
                    <div class="card-text d-flex justify-content-between">
                      <div className="calendar">
                        <i class="fa-solid fa-calendar"></i>
                        <span>17.02.2022</span>
                      </div>
                      <div className="avtor">
                        <span>Автор:</span>
                        <img src="./images/icon.png" alt="img" />
                        <span>Гена</span>
                      </div>
                    </div>
                    <div className="card-p">
                      <p>Новый адрес ru-massa.info</p>
                    </div>
                    <div className="card-share">
                      <div className="my__message">
                        <i class="fa-solid fa-message"></i>
                      </div>
                      <div className="my__nodes">
                        <i class="fa-solid fa-share-nodes"></i>
                      </div>
                    </div>
                    <button>Читать</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                  <img src="./images/gym1.png" class="card-img-top" alt="img" />
                  <Link to={"/addings"} className="img__news object">
                    Пополнение товара
                  </Link>
                  <div class="card-body">
                    <h5 class="card-title">Товары</h5>
                    <div class="card-text d-flex justify-content-between">
                      <div className="calendar">
                        <i class="fa-solid fa-calendar"></i>
                        <span>17.02.2022</span>
                      </div>
                      <div className="avtor">
                        <span>Автор:</span>
                        <img src="./images/icon.png" alt="img" />
                        <span>Гена</span>
                      </div>
                    </div>
                    <div className="card-p">
                      <p>+ Товары к ассортименту</p>
                    </div>
                    <div className="card-share">
                      <div className="my__message">
                        <i class="fa-solid fa-message"></i>
                      </div>
                      <div className="my__nodes">
                        <i class="fa-solid fa-share-nodes"></i>
                      </div>
                    </div>
                    <button>Читать</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                  <img src="./images/gym.png" class="card-img-top" alt="img" />
                  <button className="img__news">Без рубрики</button>
                  <div class="card-body">
                    <h5 class="card-title">Смена домена</h5>
                    <div class="card-text d-flex justify-content-between">
                      <div className="calendar">
                        <i class="fa-solid fa-calendar"></i>
                        <span>17.02.2022</span>
                      </div>
                      <div className="avtor">
                        <span>Автор:</span>
                        <img src="./images/icon.png" alt="img" />
                        <span>Гена</span>
                      </div>
                    </div>
                    <div className="card-p">
                      <p>Новый адрес ru-massa.info</p>
                    </div>
                    <div className="card-share">
                      <div className="my__message">
                        <i class="fa-solid fa-message"></i>
                      </div>
                      <div className="my__nodes">
                        <i class="fa-solid fa-share-nodes"></i>
                      </div>
                    </div>
                    <button>Читать</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                  <img src="./images/gym1.png" class="card-img-top" alt="img" />
                  <Link to={"/addings"} className="img__news object">
                    Пополнение товара
                  </Link>
                  <div class="card-body">
                    <h5 class="card-title">Товары</h5>
                    <div class="card-text d-flex justify-content-between">
                      <div className="calendar">
                        <i class="fa-solid fa-calendar"></i>
                        <span>17.02.2022</span>
                      </div>
                      <div className="avtor">
                        <span>Автор:</span>
                        <img src="./images/icon.png" alt="img" />
                        <span>Гена</span>
                      </div>
                    </div>
                    <div className="card-p">
                      <p>+ Товары к ассортименту</p>
                    </div>
                    <div className="card-share">
                      <div className="my__message">
                        <i class="fa-solid fa-message"></i>
                      </div>
                      <div className="my__nodes">
                        <i class="fa-solid fa-share-nodes"></i>
                      </div>
                    </div>
                    <button>Читать</button>
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
                  <img src="./images/image 50.png" alt="img" />
                  <div className="gonadot__title">
                    <div className="gonadot__span">
                      <span>Gonadotropin 1000iu, 1 флакон - Olymp Labs</span>
                    </div>
                    <h5>704 ₽</h5>
                  </div>
                </div>
                <hr />
                <div className="gonadot__item">
                <img src="./images/image 50.png" alt="img" />
                  
                  <div className="gonadot__title">
                    <div className="gonadot__span">
                      <span>Gonadotropin 1000iu, 1 флакон - Olymp Labs</span>
                    </div>
                    <h5>704 ₽</h5>
                  </div>
                </div>
                <hr />
                <div className="gonadot__item">
                <img src="./images/image 50.png" alt="img" />
                  
                  <div className="gonadot__title">
                    <div className="gonadot__span">
                      <span>Gonadotropin 1000iu, 1 флакон - Olymp Labs</span>
                    </div>
                    <h5>704 ₽</h5>
                  </div>
                </div>
                <hr />
                <div className="gonadot__item">
                <img src="./images/image 50.png" alt="img" />
                  
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
      <hr />
      <Footer />
    </div>
  );
};

export default Novost;
