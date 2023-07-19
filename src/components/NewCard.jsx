import React from "react";
import Slider from "react-slick";
import { my_Settings } from "./Settings";
import "./NewCard.scss";

const Reviews = () => {
  return (
    <div className="new-card">
      <div className="container">
        <div className="new-card-title">
          <h2>Новости</h2>
          <div className="btn">
            <span>Все новости</span>
          </div>
        </div>
        <div className="slider-1">
          <Slider {...my_Settings}>
            <div className="slider-card">
              <img src="./images/gym.png" alt="1" />
              <h4>Смена домена</h4>
              <hr />
              <div className="kalendar d-flex">
                <div className="kalendar-p">
                  <i class="fa-solid fa-calendar-days"></i>
                  <span>17.02.2022</span>
                </div>
                <span>Автор:</span>
                <img src="./images/icon.png" alt="1" /> <span>Гена</span>
              </div>
              <hr />
              <div className="kalendar-email">
                <h5>Новый адрес ru-massa.info</h5>
              </div>
              <hr  />
              <div className="kalendar-more">
                <button className="massage">
                  <i class="fa-solid fa-message"></i>
                </button>
                <button className="share">
                  <i class="fa-solid fa-share"></i>
                </button>
              </div>
              <div className="btn">
                <button>Читать</button>
              </div>
            </div>
            <div className="slider-card">
              <img src="./images/gym1.png" alt="1" />
              <h4>Смена домена</h4>
              <hr />
              <div className="kalendar d-flex">
                <div className="kalendar-p">
                  <i class="fa-solid fa-calendar-days"></i>
                  <span>17.02.2022</span>
                </div>
                <span>Автор:</span>
                <img src="./images/icon.png" alt="1" /> <span>Гена</span>
              </div>
              <hr />
              <div className="kalendar-email">
                <h5>Новый адрес ru-massa.info</h5>
              </div>
              <hr  />
              <div className="kalendar-more">
                <button className="massage">
                  <i class="fa-solid fa-message"></i>
                </button>
                <button className="share">
                  <i class="fa-solid fa-share"></i>
                </button>
              </div>
              <div className="btn">
                <button>Читать</button>
              </div>
            </div>
            <div className="slider-card">
              <img src="./images/gym.png" alt="1" />
              <h4>Смена домена</h4>
              <hr />
              <div className="kalendar d-flex">
                <div className="kalendar-p">
                  <i class="fa-solid fa-calendar-days"></i>
                  <span>17.02.2022</span>
                </div>
                <span>Автор:</span>
                <img src="./images/icon.png" alt="1" /> <span>Гена</span>
              </div>
              <hr />
              <div className="kalendar-email">
                <h5>Новый адрес ru-massa.info</h5>
              </div>
              <hr  />
              <div className="kalendar-more">
                <button className="massage">
                  <i class="fa-solid fa-message"></i>
                </button>
                <button className="share">
                  <i class="fa-solid fa-share"></i>
                </button>
              </div>
              <div className="btn">
                <button>Читать</button>
              </div>
            </div>
            <div className="slider-card">
              <img src="./images/gym1.png" alt="1" />
              <h4>Смена домена</h4>
              <hr />
              <div className="kalendar d-flex">
                <div className="kalendar-p">
                  <i class="fa-solid fa-calendar-days"></i>
                  <span>17.02.2022</span>
                </div>
                <span>Автор:</span>
                <img src="./images/icon.png" alt="1" /> <span>Гена</span>
              </div>
              <hr />
              <div className="kalendar-email">
                <h5>Новый адрес ru-massa.info</h5>
              </div>
              <hr  />
              <div className="kalendar-more">
                <button className="massage">
                  <i class="fa-solid fa-message"></i>
                </button>
                <button className="share">
                  <i class="fa-solid fa-share"></i>
                </button>
              </div>
              <div className="btn">
                <button>Читать</button>
              </div>
            </div>
            <div className="slider-card">
              <img src="./images/gym.png" alt="1" />
              <h4>Смена домена</h4>
              <hr />
              <div className="kalendar d-flex">
                <div className="kalendar-p">
                  <i class="fa-solid fa-calendar-days"></i>
                  <span>17.02.2022</span>
                </div>
                <span>Автор:</span>
                <img src="./images/icon.png" alt="1" /> <span>Гена</span>
              </div>
              <hr />
              <div className="kalendar-email">
                <h5>Новый адрес ru-massa.info</h5>
              </div>
              <hr  />
              <div className="kalendar-more">
                <button className="massage">
                  <i class="fa-solid fa-message"></i>
                </button>
                <button className="share">
                  <i class="fa-solid fa-share"></i>
                </button>
              </div>
              <div className="btn">
                <button>Читать</button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
