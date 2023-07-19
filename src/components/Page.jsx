import React from 'react'
import "./Page.scss"
import { Link } from 'react-router-dom'

const Page = () => {
  return (
    <div className='page'>
        <div className="container">
            <div className="row">
            <div className="korzina-page">
            <Link to={"/korzina"} className="korzina-page-item">
              <h5>1</h5>
              <p>Корзина</p>
            </Link>
            <Link to={"/adres"} className="korzina-page-item">
              <h5>2</h5>
              <p>Адрес доставки</p>
            </Link>
            <Link to={"/ready"} className="korzina-page-item">
              <h5>3</h5>
              <p>Заказ готов</p>
            </Link>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Page