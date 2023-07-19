import React from "react";
import "./OnlineChat.scss";

const OnlineChat = () => {
  return (
    <div className="online-chat">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 col-xl-5">
            <img src="./images/doctor.png" alt="1" className="online-img" />
          </div>
          <div className="col-12 col-md-12 col-lg-12 col-xl-7">
            <div className="online-content">
              <h2>Консультант <br /> по фармакологии</h2>
              <h4>Консультация для новичков и самых <br /> опытных:</h4>
              <div className="online-icon">
                <img src="./images/notebook.png" alt="1" />
                <span>Составление курсов</span>
                <br />
                <img src="./images/diploma 1.png" alt="" />
                <span>Грамотное пкт</span>
                <br />
                <img src="./images/medicine 1.png" alt="" />
                <span>Индивидуальный подбор препаратов</span>
                <h5>
                  И все остальное,что связанное с приемом фармакологии, вы
                  можете узнать у консультанта на сайте или в чат телеграм.
                </h5>
              </div>
                <div className="btns">
                  <button className="telegram">Написать в Telegram</button>
                  <button className="chat">Online чат</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineChat;
