import React, { useState } from 'react';

//helper function to validate email
import { validateEmail } from '../../utils/helpers';

function Contact() {
  // create state variables for the fields in the form and set initial values as empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // collect the info when input change is triggered
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // set state if email, username, or message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // prevent page refresh
    e.preventDefault();

    // validate email or username
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or Name is invalid');
      return;
    }

    if (!setMessage(message)) {
      setErrorMessage(`Message is required.`);
      return;
    }

    // clear input if successful
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <section id='reach-out' className='contact'>
      <div className='flex-row'>
        <h2 className='section-title secondary-border'>Reach Out</h2>
      </div>

      <div className='contact-info'>
        <div>
          <h3>Hello {userName}</h3>
          <p>Want to get into contact?</p>
          <address>
            San Francisco, CA <br />
             E:{' '}
            <a href='mailto://shawn.chang.res@gmail.com'>
            shawn.chang.res@gmail.com
            </a>
          </address>
          <p>
            <strong>Please feel free to contact me.</strong>
          </p>
        </div>

        {/* contact form section  */}
        <div className='contact-form'>
          <h3>Contact Me</h3>
          <form className='form'>
            {/* Name */}
            <label for='contact-name'>Your Name</label>
            <input
              value={userName}
              name='userName'
              onChange={handleInputChange}
              type='text'
              id='contact-name'
              placeholder='Your Name'
            />

            {/* Email */}
            <label for='contact-email'>Your Email</label>
            <input
              value={email}
              name='email'
              onChange={handleInputChange}
              type='email'
              id='contact-email'
              placeholder='Your Email'
            />

            {/* Message */}
            <label for='contact-message'>Message</label>
            <textarea
              value={message}
              name='message'
              onChange={handleInputChange}
              type='message'
              id='contact-message'
              placeholder='Your Message'
            />
            <button type='button' onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;