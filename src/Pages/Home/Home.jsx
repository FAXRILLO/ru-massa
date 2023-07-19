import React, { useState } from "react";
import "./Home.scss";
import Sertificate from "../../components/Sertificate";
import Reko from "../../components/Reko";
import New from "../../components/New";
import Reviews from "../../components/Reviews";
import OnlineChat from "../../components/OnlineChat";
import Quetions from "../../components/Quetions";
import NewCard from "../../components/NewCard";
import Email from "../../components/Email";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div>
      {showSidebar && <Sidebar  setShowSidebar={setShowSidebar}/>}
      
      <header>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 col-xl-5">
              <div className="mussa">
                <h1>
                  Интернет-магазин <br /> стероидов
                </h1>
                <p>
                  Качественная и сертифицированная продукция, с помощью которых
                  вы сможете улучшить свои результаты, как в бодибилдинге так и
                  других силовых видах спорта.
                </p>
              </div>
              <div className="about">
                <button>Подробнее</button>
              </div>
              <div className="content d-flex justify-content-between">
                <div className="content-1">
                  <h3>01</h3>
                  <h2>Составление курса</h2>
                  <p>Индивидуальное составление курса</p>
                </div>
                <div className="content-2">
                  <h3>02</h3>
                  <h2>Медсопровождение</h2>
                  <p>Cопровождение лечащим врачем</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12 col-xl-7 ">
              <img className="img-build" src="./images/build.png" alt="img" />
              {!showSidebar && <button onClick={()=>setShowSidebar(!showSidebar)} className="bars">
              <i class="fa-solid fa-bars"></i>
              </button>}
              
            </div>
          </div>
        </div>
      </header>
      <Sertificate />
      <Reko />   
      <New /> 
      <Reviews />  
      <OnlineChat />
      <Quetions />
      <NewCard />
      <Email />
      <Footer />
    </div>
  );
};

export default Home;
