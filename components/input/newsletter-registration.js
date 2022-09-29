import React from 'react';

function NewsletterRegistration() {
  function registrationHandler(event) {
    event.preventDefault();
    console.log(event);
    const userRegisteredEmail = userEmail.value;

    const url =
      'https://nextjs-course-9b48b-default-rtdb.europe-west1.firebasedatabase.app/members';
    fetch(url, {
      method: 'POST',
      body: userRegisteredEmail,
    });
    console.log(userRegisteredEmail);
  }

  return (
    <section>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div>
          <input
            type='email'
            id='userEmail'
            name='email'
            required
            placeholder='Your email'
          />
          <button type='submit'>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
