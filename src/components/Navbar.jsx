import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <img src="./images/logo.png" alt="img" />
          <Link to={"/"}>
            Интернет-магазин <br /> RU-massa
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex input-search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <i className="fa-solid fa-search"></i>
            </form>
            <div className="toggle">
              <i class="fa-solid fa-envelope"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
