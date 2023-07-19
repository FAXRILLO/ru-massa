import React from "react";
import "./Obmen.scss";
import Footer from "./Footer"

const Obmen = () => {
  return (
    <div className="obmen">
      <div className="container">
        <div className="row">
          <div className="obmen-title">
            <h2>Обмен и возрат</h2>
          </div>
          <div className="obmen-content d-flex">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-7">
              <h5>Правила обмена и возрата товара:</h5>
              <p>Обмен и возрат продукции надлежащего качества</p>
              <i class="fa-solid fa-hospital"></i>
              <span>
                Приобретенные лекарственные препараты надлежащего качества не
                подлежат возврату или обмену в соответствии с Перечнем
                непродовольственных товаров надлежащего качества, не подлежащих
                возврату или обмену на аналогичный товар других размера, формы,
                габарита, фасона, расцветки или комплектации, утвержденным
                Постановлением Правительства Российской Федерации от 19 января
                1998 г. N 55.
                <br />
                <i class="fa-sharp fa-solid fa-tablets"></i>
                 Изделия медицинского назначения входят в Перечень
                товаров, не подлежащих возврату или обмену, согласно
                Постановлению Правительства РФ от 19.01.96 № 55.
              </span>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5">
              <img src="./images/chel.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Obmen;
