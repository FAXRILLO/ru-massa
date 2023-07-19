import React from "react";
import "./Error.scss";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Error = () => {
  return (
    <div className="error">
      <div className="container">
        <img className="error__img" src="./images/Group 2745.png" alt="img" />
        <div className="error__title">
          <p>
            Ошибка 404, что-то пошло не так, запрашиваемая вами страница не
            найдена, возможно, неправильно указан адрес.
          </p>
        </div>
        <hr />
        <div className="error-page">
        <Link to={"/"}>На главную страницу</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};  
export default Error;