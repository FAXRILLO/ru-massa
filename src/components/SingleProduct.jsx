import React from "react";
import Slider from "react-slick";
import "./SingleProduct.scss";
import { my_Settings } from "./Settings";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="single">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div className="single-img">
              <img src="./images/tablet.png" alt="img" />
              <div className="pos d-flex align-items-center">
                <i className="fa-regular fa-circle-check"></i>
                <span>В наличии</span>
              </div>
              <div className="heart">
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="grafh">
                <i className="fa-solid fa-chart-simple"></i>
              </div>
              <div className="slider">
                <Slider {...settings}>
                  <div>
                    <img
                      className="img-fluid"
                      src="./images/tablet.png"
                      alt="img"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid"
                      src="./images/tablet.png"
                      alt="img"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid"
                      src="./images/tablet.png"
                      alt="img"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid"
                      src="./images/tablet.png"
                      alt="img"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid"
                      src="./images/tablet.png"
                      alt="img"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid"
                      src="./images/tablet.png"
                      alt="img"
                    />
                  </div>
                </Slider>
              </div>
              <div className="quetion">
                <i className="fa-solid fa-question"></i>
                <button>Как оформить заказ</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-5">
            <div className="single-title">
              <h2>Stanozolol 10mg/tab, 100tab</h2>
            </div>
            <div className="single-cart">
              <h5>880 ₽</h5>
              <button>
                <i className="fa-solid fa-minus"></i>
              </button>
              <span>1</span>
              <button>
                <i className="fa-solid fa-plus"></i>
              </button>
              <button className="shop">В корзину</button>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-chart-simple"></i>
            </div>
            <hr />
            <div className="single-content">
              <h5>Категории:</h5>
              <p>ERGO, Оральные препараты, Станозолол</p>
              <hr />
              <h5>Отзывы (0):</h5>
              <p>Отзывов пока нет.</p>
              <hr />
              <h5 className="single-h">
                Будьте первым, кто оставил отзыв на “Stanozolol 10mg/tab,
                100tab”
              </h5>
              <p>
                Для отправки отзыва вам необходимо{" "}
                <span className="author"> авторизоваться.</span>
              </p>
            </div>
            <hr />
            <div className="single-share">
              <h5>Поделиться :</h5>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-pinterest"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-telegram"></i>

              <img src="./images/single.png" alt="img" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="single-dostavka-title">
              <h2>Доставка</h2>
              <h5>Заказы отправляем почтой России:</h5>
            </div>
            <div className="single-dostavka-content">
              <p>
                Посылка 5-14 дней с момента отправки в зависимости от региона,
                обычно не более 10, цена сейчас 650р (на заказы меньше 1500
                рублей идет надбавка за доставку в размере 200р.)
              </p>
              <hr />
              <p>
                ЕМС ускоренная (можно до двери), сроки 2-7 дней с момента
                отправки, цена 1500р
              </p>
              <hr />
              <p>
                Отправка заказ происходит в течении 1-9 дней с момента оплаты.
              </p>
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                <strong>Доставка только с территории России!</strong>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className="alert alert-primary alert-dismissible fade show"
                role="alert"
              >
                <strong>Внимание!</strong>
                Обязательно снимайте видео распаковки посылки, для подстраховки!
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div className="single-oplata-title">
              <h2>Оплата</h2>
              <p>
                Отправляем заказ только после 100% оплаты заказа и доставки, при
                получении посылки ничего доплачивать не нужно. В целях
                безопасности не можем сделать наложенный платеж.
              </p>
            </div>
            <div className="single-oplata-content">
              <h5>Способы оплаты:</h5>
              <hr />
              <div className="single-oplata">
                <img src="./images/yandex.png" alt="img" />
                <span>Яндекс Деньги</span>
              </div>
              <div className="single-oplata">
                <img src="./images/sber.png" alt="img" />
                <span>Карта Сбербанк</span>
              </div>
              <div className="single-oplata">
                <img src="./images/garant.png" alt="img" />
                <span>Гарант сервис (на ваш выбор)</span>
              </div>
              <hr />
              <p>
                Если не знаете как оплатить, пишите консультанту на email,
                telegram или чат на сайте, все расскажем.{" "}
              </p>
              <div
                className="alert alert-primary alert-dismissible fade show"
                role="alert"
              >
                <strong>
                  Оплачивайте только на те реквизиты, который придут с нашего
                  email или чата на сайте
                </strong>{" "}
                В telegram вы можете нарваться на мошенника! Мы не выдаем
                реквизиты через телеграм!
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <section className="new">
            <div className="container">
              <div className="row">
                <div className="new-title">
                  <h2>Похожие товары</h2>
                  <div className="btn">
                    <img src="./images/more 1.png" alt="1" />
                    <span>Каталог</span>
                  </div>
                </div>
                <div className="slides">
                  <Slider {...my_Settings}>
                    <div>
                      <img src="./images/group2.png" alt="1" />
                      <button className="heart">
                        <i className="fa-regular fa-heart"></i>
                      </button>
                      <button className="grafh">
                        <i className="fa-solid fa-chart-simple"></i>
                      </button>
                      <h4>
                        Metha 10, 10mg/caps,
                        <br /> br 100caps
                      </h4>
                      <p>
                        Оральные препараты, Метандиенон, Chang Pharmaceuticals
                      </p>
                      <h5>880 ₽</h5>
                      <div className="btns">
                        <button className="trash">В корзину</button>
                        <Link to={"/singleProduct"} className="about-reko">
                          Подробнее
                        </Link>
                      </div>
                    </div>
                    <div>
                      <img src="./images/group2.png" alt="1" />
                      <button className="heart">
                        <i className="fa-regular fa-heart"></i>
                      </button>
                      <button className="grafh">
                        <i className="fa-solid fa-chart-simple"></i>
                      </button>
                      <h4>
                        Metha 10, 10mg/caps,
                        <br /> 100caps
                      </h4>
                      <p>
                        Оральные препараты, Метандиенон, Chang Pharmaceuticals
                      </p>
                      <h5>880 ₽</h5>
                      <div className="btns">
                        <button className="trash">В корзину</button>
                        <Link to={"/singleProduct"} className="about-reko">
                          Подробнее
                        </Link>
                      </div>
                    </div>
                    <div>
                      <img src="./images/group2.png" alt="1" />
                      <button className="heart">
                        <i className="fa-regular fa-heart"></i>
                      </button>
                      <button className="grafh">
                        <i className="fa-solid fa-chart-simple"></i>
                      </button>
                      <h4>
                        Metha 10, 10mg/caps,
                        <br /> 100caps
                      </h4>
                      <p>
                        Оральные препараты, Метандиенон, Chang Pharmaceuticals
                      </p>
                      <h5>880 ₽</h5>
                      <div className="btns">
                        <button className="trash">В корзину</button>
                        <Link to={"/singleProduct"} className="about-reko">
                          Подробнее
                        </Link>
                      </div>
                    </div>
                    <div>
                      <img src="./images/group2.png" alt="1" />
                      <button className="heart">
                        <i className="fa-regular fa-heart"></i>
                      </button>
                      <button className="grafh">
                        <i className="fa-solid fa-chart-simple"></i>
                      </button>
                      <h4>
                        Metha 10, 10mg/caps,
                        <br /> 100caps
                      </h4>
                      <p>
                        Оральные препараты, Метандиенон, Chang Pharmaceuticals
                      </p>
                      <h5>880 ₽</h5>
                      <div className="btns">
                        <button className="trash">В корзину</button>
                        <Link to={"/singleProduct"} className="about-reko">
                          Подробнее
                        </Link>
                      </div>
                    </div>
                    <div>
                      <img src="./images/group2.png" alt="1" />
                      <button className="heart">
                        <i className="fa-regular fa-heart"></i>
                      </button>
                      <button className="grafh">
                        <i className="fa-solid fa-chart-simple"></i>
                      </button>
                      <h4>
                        Metha 10, 10mg/caps,
                        <br /> br 100caps
                      </h4>
                      <p>
                        Оральные препараты, Метандиенон, Chang Pharmaceuticals
                      </p>
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
        <hr />
        <Footer />
      </div>
    </div>
  );
};
export default SingleProduct;
