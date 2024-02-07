import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact_form_content'>
      <form>
        <div className='name_container'>
            <input type='text' name='firstname' placeholder='FirstName'/>
            <input type='text' name='lastname' placeholder='LastName'/>
        </div>
        <input type='text' name='email' placeholder='Email'/>
        <textarea type='text' name='message' placeholder='Message' rows={3} />

        <button>SEND</button>
      </form>
    </div>
  )
}

export default ContactForm
