import React from "react";
import { Link } from "react-router-dom";
import "./Next.scss";
import Footer from "./Footer";

const Next = () => {
  return (
    <div className="next">
      <div className="container">
        <div className="main__next">
          <div className="left__next">
            <Link to={"/novost"} className="prev">
              <i class="fa-solid fa-chevron-left"></i>
            </Link>
            <div className="prev__title">
              <div className="next__menu">
                <p>Следующая</p>
                <div className="my__icon">
                  <i class="fa-solid fa-bars"></i>
                </div>
              </div>
              <div className="title">
                <p>
                  Теперь в наличии клен балкан, кломид лука, суст эрго и т.д
                </p>
              </div>
            </div>
          </div>
          <div className="right__next">
            <h5>Поделиться :</h5>
            <div className="brands">
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.twitter.com/">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.pinterest.com/">
                <i class="fa-brands fa-pinterest"></i>
              </a>
              <a href="https://www.linkedin.com/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.telegram.com/">
                <i class="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Next;