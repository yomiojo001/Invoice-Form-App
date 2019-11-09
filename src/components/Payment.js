import React, { Component } from 'react'
import "./payment.scss";

export default class Payment extends Component {
    render() {
        return (
            <article className="payment-info">
                <h1>Payment information</h1>
                <form>
                    <div className="input">
                        <p>NAME ON CREDIT CARD</p>
                        <input type="text" placeholder="John Smith" />
                    </div>
                    <div className="input">
                        <p>CREDIT CARD NUMBER</p>
                        <input type="text" placeholder="0000 0000 0000 0000" />
                    </div>
                    <div className="exp-input">
                    <div className="date-input ">
                        <p>EXPIRES ON</p>
                        <input style={{marginRight: '5px'}} type="text" placeholder="January" />
                        <input type="text" placeholder="2016" />
                    </div>
                    <div className="cvc-input ">
                        <p>CVC</p>
                        <input type="text" placeholder="000" />
                    </div>
                    </div>
                    <div className="submit-Btn">
                        <button type="submit">BOOK SECURELY</button>
                    </div>
                    <div className="encyrpt-msg">
                    <p className="encrypt"><span className="fas fa-lock"></span> Your credit card information is encrypted</p>
                    </div>

                </form>
            </article>
        )
    }
}
