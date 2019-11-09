import React, { Component } from 'react';
import "./form.scss";

export default class Form extends Component {
    render() {
        return (
            <section className="order-summary">
                <h1>Order Summary</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>320 x 5 days</td>
                            <td style={{float:'right'}}>1600 GBP</td>
                        </tr>
                        <tr>
                            <td>Discount</td>
                            <td style={{float:'right'}}>80 GBP</td>
                        </tr>
                        <tr>
                            <td>Subtotal</td>
                            <td style={{float:'right'}}>1520 GBP</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td style={{float:'right'}}>304 GBP</td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: 'bold'}}>TOTAL</td>
                            <td style={{fontWeight: 'bold',float:'right', fontSize: '1.3rem'}}>1824 GBP</td>
                        </tr>
                    </tbody>
                    
                </table>
                <hr />
                

            </section>
        )
    }
}
