import React from 'react'
import "./Email.scss"

const Email = () => {
  return (
    <div>
        <div className="email">
            <div className="container">
                <div className="row">
                   <div className="col-12 col-md-12 col-lg-12 col-xl-7">
                   <div className="email-title d-flex">
                        <h2>Подпишись на нашу рассылку</h2>
                        <p>Подписывайся на рассылку и получай на каждый товар -5%</p>
                    </div>
                    <div className="email-content d-flex">
                        <input type="text" placeholder='E-mail'/>
                        <button>Подписаться</button>
                    </div>
                   </div>
                   <div className="col-12 col-md-12 col-lg-12 col-xl-5">
                    <img className='tabletki' src="./images/tabletki.png" alt="1" />
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Email