import React from "react";
import "./Otziv.scss";
import Footer from "./Footer"

const Otziv = () => {
  return (
    <div className="otziv">
      <div className="container">
        <div className="row">
          <div className="otziv-title">
            <h2>Отзывы</h2>
          </div>
          <div className="otziv-content d-flex">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <h5>Оставьте отзыв</h5>
              <div className="name__input">
                <h6>Ваше имя*</h6>
                <input type="text" placeholder="Ваше имя" />
              </div>
              <div className="email__input">
                <h6>Ваш e-mail*</h6>
                <input type="text" placeholder="Ваш e-mail" />
              </div>
              <div className="otziv__input">
                <h6>Отзыв*</h6>
                <input type="text" placeholder="Оставьте отзыв" />
              </div>
              <input type="file" />
              <button>Добавить отзыв</button>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="row">
                <div className="my__cart">
                  <div className="my__cart-item">
                    <div className="head__img">
                      <img src="./images/icon.png" alt="/" />
                      <span>Кирилл</span>
                    </div>
                    <div className="body">
                      <p>
                        Заказывал 8 мая, сегодня забрал с почты посылку 20 мая.
                        Всё в наличии, всё целое. Спасибо за работу. Александр
                        .С. 40 лет.
                      </p>
                    </div>
                    <div className="footer">
                      <i class="fa-brands fa-facebook"></i>
                    </div>
                  </div>
                  <div className="my__cart-item">
                    <div className="head__img">
                      <img src="./images/icon2.png" alt="/" />
                      <span>Александр</span>
                    </div>
                    <div className="body">
                      <p>
                        Заказывал 8 мая, сегодня забрал с почты посылку 20 мая.
                        Всё в наличии, всё целое. Спасибо за работу. Александр
                        .С. 40 лет.
                      </p>
                    </div>
                    <div className="footer">
                      <i class="fa-brands fa-facebook"></i>
                    </div>
                  </div>
                </div>
                <div className="my__cart">
                  <div className="my__cart-item">
                    <div className="head__img">
                      <img src="./images/icon4.png" alt="/" />
                      <span>Антон</span>
                    </div>
                    <div className="body">
                      <p>
                        Заказывал 8 мая, сегодня забрал с почты посылку 20 мая.
                        Всё в наличии, всё целое. Спасибо за работу. Александр
                        .С. 40 лет.
                      </p>
                    </div>
                    <div className="footer">
                      <i class="fa-brands fa-facebook"></i>
                    </div>
                  </div>
                  <div className="my__cart-item">
                    <div className="head__img">
                      <img src="./images/icon3.png" alt="/" />
                      <span>Алексей</span>
                    </div>
                    <div className="body">
                      <p>
                        Заказывал 8 мая, сегодня забрал с почты посылку 20 мая.
                        Всё в наличии, всё целое. Спасибо за работу. Александр
                        .С. 40 лет.
                      </p>
                    </div>
                    <div className="footer">
                      <i class="fa-brands fa-facebook"></i>
                    </div>
                  </div>
                </div>
                <div className="my__cart">
                  <div className="my__cart-item">
                    <div className="head__img">
                      <img src="./images/icon.png" alt="/" />
                      <span>Сергей</span>
                    </div>
                    <div className="body">
                      <p>
                        Заказывал 8 мая, сегодня забрал с почты посылку 20 мая.
                        Всё в наличии, всё целое. Спасибо за работу. Александр
                        .С. 40 лет.
                      </p>
                    </div>
                    <div className="footer">
                      <i class="fa-brands fa-facebook"></i>
                    </div>
                  </div>
                  <div className="my__cart-item">
                    <div className="head__img">
                      <img src="./images/icon2.png" alt="/" />
                      <span>Дмитрий</span>
                    </div>
                    <div className="body">
                      <p>
                        Заказывал 8 мая, сегодня забрал с почты посылку 20 мая.
                        Всё в наличии, всё целое. Спасибо за работу. Александр
                        .С. 40 лет.
                      </p>
                    </div>
                    <div className="footer">
                      <i class="fa-brands fa-facebook"></i>
                    </div>
                  </div>
                </div>
              </div>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <i class="fa-solid fa-chevron-left"></i>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <i class="fa-solid fa-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  );
};

export default Otziv;
