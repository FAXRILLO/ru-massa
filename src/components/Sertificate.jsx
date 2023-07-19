import React from 'react'
import "./Sertificate.scss"
import { mySettings } from './Settings';
import Slider from 'react-slick';

const Sertificate = () => {
  return (
    <>
        <section className="sertificate">
        <div className="container">
          <div className="row">
            <div className="sertificate-title">
              <h2>
                Сертификаты
                <br /> качества
              </h2>
              <span>
                Мы используем только сертифицированную и качественную продукцию,
                вы можете просмотреть наши сертификаты
              </span>
            </div>
            <div className="slider">
              <Slider {...mySettings}>
                <div>
                  <img src="./images/image 25.png" alt="1" />
                </div>
                <div>
                <img src="./images/image 26.png" alt="1" />

                </div>
                <div>
                <img src="./images/image 25.png" alt="1" />

                </div>
                <div>
                <img src="./images/image 26.png" alt="1" />

                </div>
                <div>
                <img src="./images/image 25.png" alt="1" />

                </div>
                <div>
                <img src="./images/image 26.png" alt="1" />

                </div>
                <div>
                <img src="./images/image 25.png" alt="1" />

                </div>
                <div>
                <img src="./images/image 26.png" alt="1" />

                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sertificate