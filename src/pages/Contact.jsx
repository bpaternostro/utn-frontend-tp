import React from 'react'
import { buttonStyle, contactStyle } from '../styles'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
      <main className={contactStyle.contactContainer}>
        <div className={contactStyle.contactFormContainer}>
              <span className={contactStyle.contactFormContainerTitle}>Contacto</span>
              <form action="Post">
                  <div>
                      <label>Nombre completo *</label>
                      <input name="full-name" type="text" required/>
                      <label>Email *</label>
                      <input name="email" type="text" required/>
                      <label>Asunto *</label>
                      <input name="subject" type="text" required/>
                      <label>Mensaje *</label>
                      <textarea name="message" id="" cols="30" rows="10" required></textarea>
                  </div>
                  <div>
                      <Link to="/success" className={buttonStyle.btnPrimary}>Enviar</Link>
                  </div>
              </form>
        </div>
      </main>    
  )
}

export default Contact