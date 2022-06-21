import React, { useState } from 'react';
import encode from '../../helpers/encode';

import styles from './contact.module.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact', email, message,
      }),
    })
      .then(() => setSuccess(true))
      .catch(error => alert(error));
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <form className={styles.form} name="contact" action="/" method="POST" data-netlify="true" onSubmit={onSubmit} netlify-honeypot="bot-field" data-netlify-recaptcha="true">
        <p className={styles.hidden}>
          <input name="bot-field" />
        </p>
        <div data-netlify-recaptcha="true"></div>
        <input type="hidden" name="form-name" value="contact" />
        <div className={styles.inputs}>
          <label className={styles.inputWrapper} htmlFor="email">
            <span className={styles.label}>E-mail</span>
            <input disabled={success} className={styles.input} id="email" type="email" name="email" onChange={e => setEmail(e.target.value)} required placeholder="example@email.com" />
          </label>
          <label className={styles.inputWrapper} htmlFor="message">
            <span className={styles.label}>Message</span>
            <textarea disabled={success} className={styles.input} id="message" name="message" onChange={e => setMessage(e.target.value)} required placeholder="Hey there!" />
          </label>
          <button className={['button', styles.button].join(' ')} type="submit" disabled={success}>
            {!success
              ? (
                <>
                  Send
                  <span className={styles.emoji} role="img" aria-label="empty-letterbox">📭</span>
                </>
              )
              : (
                <>
                  Success!
                  <span className={styles.emoji} role="img" aria-label="full-letterbox">📬</span>
                </>
              )
            }
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
