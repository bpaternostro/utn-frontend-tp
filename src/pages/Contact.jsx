import React from 'react'
import { buttonStyle, contactStyle } from '../styles'

const Contact = () => {
  return (
    <>
      <main className={contactStyle.contactContainer}>
        <div className={contactStyle.contactFormContainer}>
              <span>Contact</span>
              <form action="Post">
                  <div>
                      <label>Full Name *</label>
                      <input name="full-name" type="text" required/>
                      <label>Email *</label>
                      <input name="email" type="text" required/>
                      <label>Message *</label>
                      <textarea name="message" id="" cols="30" rows="10" required></textarea>
                  </div>
                  <div>
                      <button className={buttonStyle.btnPrimary}>Send</button>
                  </div>
              </form>
        </div>
      </main>
    </>
    
  )
}

export default Contact