import React, { useState } from 'react';

const ContactUspage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    const mailtoLink = `mailto:mautovaalina34@gmail.com?subject=Contact%20Us&body=Name:${name}%0D%0AEmail:${email}%0D%0AMessage:${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* Contact Section */}
      <div className="container">
        <h2>Contact Us</h2>
        <form id="contact-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </form>

        <button id="send-email-button" onClick={handleSendEmail}>
          Send via Email
        </button>
      </div>
    </>
  );
};

export default ContactUspage;
