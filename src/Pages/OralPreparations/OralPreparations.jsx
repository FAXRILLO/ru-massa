import React from "react";
import "./OralPreparations.scss";
import Email from "../../components/Email";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const OralPreparations = () => {
  return (
    <div className="oral">
      <div className="container">
        <div className="row">
          <div className="oral-title">
            <h1>оральные препараты</h1>
            <div className="oral-input d-flex">
              <input type="text" placeholder="Поиск по каталогу" />
              <i className="fa-solid fa-search"></i>
            </div>
          </div>
          <div class="card col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3">
            <img src="./images/group.png" class="card-img-top" alt="..." />
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-chart-simple"></i>
            <div className="oral-check">
              <i class="fa-regular fa-circle-check"></i>
              <span>В наличии</span>
            </div>
            <div class="card-body">
              <h5 class="card-title">
                Metha 10, 10mg/caps, <br /> 100caps
              </h5>
              <p class="card-text">
                Оральные препараты, Метандиенон, Chang Pharmaceuticals
              </p>
              <h4>880 ₽</h4>
              <Link to={"/korzina"} className="trash d-block">
                В корзину
              </Link>
              <Link to={"/singleProduct"} className="about">
                Подробнее
              </Link>
            </div>
          </div>
          <div class="card col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3">
            <img src="./images/group2.png" class="card-img-top" alt="..." />
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-chart-simple"></i>
            <div class="card-body">
              <h5 class="card-title">
                Metha 10, 10mg/caps, <br /> 100caps
              </h5>
              <p class="card-text">
                Оральные препараты, Метандиенон, Chang Pharmaceuticals
              </p>
              <h4>704 ₽</h4>
              <Link to={"/korzina"} className="trash d-block">
                В корзину
              </Link>

              <Link to={"/singleProduct"} className="about">
                Подробнее
              </Link>
            </div>
          </div>
          <div class="card col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3">
            <img src="./images/group.png" class="card-img-top" alt="..." />
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-chart-simple"></i>
            <div class="card-body">
              <h5 class="card-title">
                Metha 10, 10mg/caps, <br /> 100caps
              </h5>
              <p class="card-text">
                Оральные препараты, Метандиенон, Chang Pharmaceuticals
              </p>
              <h4>880 ₽</h4>
              <Link to={"/korzina"} className="trash d-block">
                В корзину
              </Link>

              <Link to={"/singleProduct"} className="about">
                Подробнее
              </Link>
            </div>
          </div>
          <div class="card col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3">
            <img src="./images/group2.png" class="card-img-top" alt="..." />
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-chart-simple"></i>
            <div class="card-body">
              <h5 class="card-title">
                Metha 10, 10mg/caps, <br /> 100caps
              </h5>
              <p class="card-text">
                Оральные препараты, Метандиенон, Chang Pharmaceuticals
              </p>
              <h4>704 ₽</h4>
              <Link to={"/korzina"} className="trash d-block">
                В корзину
              </Link>

              <Link to={"/singleProduct"} className="about">
                Подробнее
              </Link>
            </div>
          </div>

          <div class="card col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3">
            <img src="./images/group.png" class="card-img-top" alt="..." />
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-chart-simple"></i>
            <div class="card-body">
              <h5 class="card-title">
                Metha 10, 10mg/caps, <br /> 100caps
              </h5>
              <p class="card-text">
                Оральные препараты, Метандиенон, Chang Pharmaceuticals
              </p>
              <h4>880 ₽</h4>
              <Link to={"/korzina"} className="trash d-block">
                В корзину
              </Link>

              <Link to={"/singleProduct"} className="about">
                Подробнее
              </Link>
            </div>
          </div>
          <div class="card col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3">
            <img src="./images/group2.png" class="card-img-top" alt="..." />
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-chart-simple"></i>
            <div class="card-body">
              <h5 class="card-title">
                Metha 10, 10mg/caps, <br /> 100caps
              </h5>
              <p class="card-text">
                Оральные препараты, Метандиенон, Chang Pharmaceuticals
              </p>
              <h4>704 ₽</h4>
              <Link to={"/korzina"} className="trash d-block">
                В корзину
              </Link>

              <Link to={"/singleProduct"} className="about">
                Подробнее
              </Link>
            </div>
          </div>
          <div class="card col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3">
            <img src="./images/group.png" class="card-img-top" alt="..." />
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-chart-simple"></i>
            <div className="oral-checked">
              <i class="fa-regular fa-circle-check"></i>
              <span>Новинка</span>
            </div>
            <div class="card-body">
              <h5 class="card-title">
                Metha 10, 10mg/caps, <br /> 100caps
              </h5>
              <p class="card-text">
                Оральные препараты, Метандиенон, Chang Pharmaceuticals
              </p>
              <h4>880 ₽</h4>{" "}
              <Link to={"/korzina"} className="trash d-block">
                В корзину
              </Link>
              <Link to={"/singleProduct"} className="about">
                Подробнее
              </Link>
            </div>
          </div>
          <div class="card col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3">
            <img src="./images/group2.png" class="card-img-top" alt="..." />
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-chart-simple"></i>
            <div class="card-body">
              <h5 class="card-title">
                Metha 10, 10mg/caps, <br /> 100caps
              </h5>
              <p class="card-text">
                Оральные препараты, Метандиенон, Chang Pharmaceuticals
              </p>
              <h4>704 ₽</h4>{" "}
              <Link to={"/korzina"} className="trash d-block">
                В корзину
              </Link>
              <Link to={"/singleProduct"} className="about">
                Подробнее
              </Link>
            </div>
          </div>

          <div class="card col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3">
            <img src="./images/group.png" class="card-img-top" alt="..." />
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-chart-simple"></i>
            <div class="card-body">
              <h5 class="card-title">
                Metha 10, 10mg/caps, <br /> 100caps
              </h5>
              <p class="card-text">
                Оральные препараты, Метандиенон, Chang Pharmaceuticals
              </p>
              <h4>880 ₽</h4>{" "}
              <Link to={"/korzina"} className="trash d-block">
                В корзину
              </Link>
              <Link to={"/singleProduct"} className="about">
                Подробнее
              </Link>
            </div>
          </div>
          <div class="card col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3">
            <img src="./images/group2.png" class="card-img-top" alt="..." />
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-chart-simple"></i>
            <div class="card-body">
              <h5 class="card-title">
                Metha 10, 10mg/caps, <br /> 100caps
              </h5>
              <p class="card-text">
                Оральные препараты, Метандиенон, Chang Pharmaceuticals
              </p>
              <h4>704 ₽</h4>{" "}
              <Link to={"/korzina"} className="trash d-block">
                В корзину
              </Link>
              <Link to={"/singleProduct"} className="about">
                Подробнее
              </Link>
            </div>
          </div>
          <div class="card col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3">
            <img src="./images/group.png" class="card-img-top" alt="..." />
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-chart-simple"></i>
            <div class="card-body">
              <h5 class="card-title">
                Metha 10, 10mg/caps, <br /> 100caps
              </h5>
              <p class="card-text">
                Оральные препараты, Метандиенон, Chang Pharmaceuticals
              </p>
              <h4>880 ₽</h4>{" "}
              <Link to={"/korzina"} className="trash d-block">
                В корзину
              </Link>
              <Link to={"/singleProduct"} className="about">
                Подробнее
              </Link>
            </div>
          </div>
          <div class="card col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3">
            <img src="./images/group2.png" class="card-img-top" alt="..." />
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-chart-simple"></i>
            <div className="oral-check-shop">
              <i class="fa-sharp fa-solid fa-cart-shopping"></i>
              <span>Продано</span>
            </div>
            <div class="card-body">
              <h5 class="card-title">
                Metha 10, 10mg/caps, <br /> 100caps
              </h5>
              <p class="card-text">
                Оральные препараты, Метандиенон, Chang Pharmaceuticals
              </p>
              <h4>704 ₽</h4>
              <Link to={"/korzina"} className="trash d-block">
                В корзину
              </Link>

              <Link to={"/singleProduct"} className="about">
                Подробнее
              </Link>
            </div>
          </div>

          <div className="oral-btn">
            <div className="container">
              <button>Открыть ещё</button>
            </div>
          </div>

          <div className="oral-content">
            <div className="container">
              <div className="row">
                <div className="oral-content-title">
                  <h2>Оральные стероиды: что это?</h2>
                  <p>
                    Анаболические стероиды уже давно стали неотъемлемой частью
                    профессионального спорта. С помощью этих препаратов атлеты
                    быстрее прогрессируют и способны показывать феноменальные
                    результаты. С развитием интернета к числу потребителей ААС
                    могут присоединиться и любители культуризма. <br /> <br />{" "}
                    Бодибилдинг пользуется большой популярностью. Однако
                    накачать мышцы довольно сложно, так как организм
                    сопротивляется этому процессу. В результате начинающие
                    билдеры сталкиваются с ситуацией, в которой при затрате
                    большого количества сил, прогресс оказывается
                    незначительным. Чтобы исправить положение дел, они могут
                    заказать таблетированные стероиды. <br /> <br />
                    Эти препараты основаны на дериватах мужского гормона. При их
                    использовании в организме резко увеличивается концентрация
                    свободного тестостерона, что и позволяет быстро набирать
                    массу и увеличивать силу. Не все атлеты готовы ждать
                    длительное время, пока их мышцы окрепнут с помощью
                    натурального тренинга. Чтобы ускорить этот процесс, им
                    достаточно купить оральные стероиды. Однако предварительно
                    стоит разобраться с двумя вопросами:{" "}
                  </p>
                  <div className="oral-arrow">
                    <img src="./images/arrow.png" alt="img" />
                    <span>как правильно подобрать ААС;</span>
                  </div>
                  <div className="oral-arrow">
                    <img src="./images/arrow.png" alt="img" />
                    <span>какие стероиды в таблетках являются лучшими.</span>
                  </div>
                </div>
                <hr />
                <div className="oral-content-title">
                  <h2>
                    Эффекты от использования таблетированных <br /> стероидов
                  </h2>
                  <p>
                    Каждый начинающий билдер хочет заказать оральные стероиды,
                    которые окажутся максимально эффективными. Однако при этом
                    не стоит забывать, что это крайне мощные медпрепараты,
                    способные нанести вред организму. Таким образом, сначала им
                    предстоит понять, какие эффекты могут быть получены с
                    помощью ААС в таблетках. Среди них стоит отметить несколько
                    наиболее важных:
                  </p>
                  <div className="oral-arrow">
                    <img src="./images/arrow.png" alt="img" />
                    <span>возможность набирать качественную сухую массу;</span>
                  </div>
                  <div className="oral-arrow">
                    <img src="./images/arrow.png" alt="img" />
                    <span>быстро увеличивается сила;</span>
                  </div>
                  <div className="oral-arrow">
                    <img src="./images/arrow.png" alt="img" />
                    <span>
                      при грамотном приеме в организме не задерживается
                      жидкость;
                    </span>
                  </div>
                  <div className="oral-arrow">
                    <img src="./images/arrow.png" alt="img" />
                    <span>ускоряются процессы липолиза;</span>
                  </div>
                  <div className="oral-arrow">
                    <img src="./images/arrow.png" alt="img" />
                    <span>улучшается рельефность тела.</span>
                  </div>
                  <p>
                    Это лишь малая часть положительных эффектов, которые могут
                    быть получены, если атлет решит купить таблетированные
                    стероиды. Если грамотно составить курс, то можно избежать
                    побочных эффектов, присущих всем медпрепаратам, включая и
                    ААС.
                  </p>
                </div>
                <hr />
                <div className="oral-content-title">
                  <h2>Лучшие оральные стероиды</h2>
                  <p>
                    Среди всех присутствующих на рынке ААС в таблетках, не все
                    стоит использовать любителям культуризма. Некоторые из них
                    отличаются большой силой воздействия на организм и могут
                    легко стать причиной развития побочек. Кроме этого такие
                    препараты являются узкоспециализированными, например,
                    Халотестин. <br /> <br /> Таким образом, лучшие стероиды в
                    таблетках: Станозолол, Туринабол, Метандиенон, Оксандролон.{" "}
                    <br /> <br /> Начать краткий обзор стоит со Станозолола.
                    Сразу следует сказать, что этот стероид не предназначен для
                    набора массы. В результате использовать его на первом курсе
                    нецелесообразно. В основе станазы лежит одноименный дериват
                    дигидротестостерона. В результате стероид не склонен к
                    ароматизации и обладает сильными жиросжигающими свойствами.
                    Еще одним достоинством этого ААС является его способность
                    быстро увеличивать силу. Рекомендуемая суточная дозировка
                    находится в диапазоне 20-50 мг. <br /> <br /> Это самый
                    известный стероид. О нем ходит масса мифов и легенд. Чтобы в
                    последние годы не говорили о метане, он продолжает
                    оставаться одним из самых эффективных ААС. Именно благодаря
                    Метандиенону многие атлеты познакомились с миром серьезной
                    фармакологии. Этот препарат вполне подходит для первого
                    курса. С его помощью можно набрать несколько кило массы и
                    существенно увеличить силовые параметры. Суточная дозировка
                    препарата составляет 10-60 мг. <br /> <br />
                    Туринабол в отличии от метана не склонен к ароматизации.
                    Благодаря этому набираемая с его помощью масса окажется
                    более качественной, но придется принести в жертву ее
                    количество. Суточная дозировка турика находится в диапазоне
                    20-60 мг. Оксандролон – самый безопасный и легкий стероид на
                    рынке. При этом он также может быть весьма эффективным. Как
                    и Станозолол, лучше использовать его для сушки и увеличения
                    силы. Рекомендуемая дневная дозировка препарата составляет
                    30-80 мг.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Email />
      <Footer />
    </div>
  );
};

export default OralPreparations;
