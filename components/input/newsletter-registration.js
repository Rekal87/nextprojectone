import React, { useRef } from 'react';
import styles from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const emailInputRef = useRef();

  function registrationHandler() {
    const enteredEmail = emailInputRef.current.value;

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <>
      <h2>Sign up to stay updated!</h2>
      <form>
        <div className={styles.control}>
          <input
            type='email'
            id='userEmail'
            name='email'
            required
            placeholder='Your email'
            ref={emailInputRef}
          />
          <button type='button' onClick={registrationHandler}>
            Register
          </button>
        </div>
      </form>
    </>
  );
}

export default NewsletterRegistration;
