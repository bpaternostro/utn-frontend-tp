import React from 'react'
import { Link } from 'react-router-dom'
import { footerStyle } from '../../styles'

const Footer = () => {
  return (
    <footer>
        <div>
            <h3>Constructor</h3>
            <p>12 Water St. Vacouver, BC<br></br>
            V6B 132 United States</p>
        </div>
        <div>
            <span>
                <h4>Corporate Sales</h4>
                <Link to="./feedback.html">Feedback</Link>
                <Link to="./jobs.html">Jobs</Link>
                <Link to="./news.html">News</Link>
                <Link to="./sales-rules.html">Sales Rules</Link>
                <Link to="./for-partners.html">For partners</Link>
            </span>
            <span>
                <h4>Bonus Program</h4>
                <Link to="./gift-carfs.html">Gift Сards</Link>
                <Link to="./bill-payment-verification.html">Bill Payment Verification</Link>
                <Link to="./loans.html">Loans</Link>
                <Link to="./delivery.html">Delivery</Link>
                <Link to="./service-centers.html">Service centers</Link>
            </span>
            <span className={footerStyle.howToPlace}>
                <h4>How to place an order</h4>
                <Link to="./ways-of-payment.html">Ways of payment</Link>
                <Link to="./exchange-and-return-of-goods.html">Exchange and return of goods</Link>
                <Link to="./warranty-service.html">Warranty service</Link>
                <Link to="./order-status.html">Order status</Link>
                <Link to="./knowledge-base.html">Knowledge base</Link>
            </span>
        </div>
        <div>
            <Link to="./right-reserved.html">2030 Comapny. All Rights Reserved.</Link>
            <Link to="./terms-condition.html">Terms & Conditions</Link>
            <Link to="./privacy-policy.html">Privacy Policy</Link>
        </div>
    </footer>
  )
}

export default Footer