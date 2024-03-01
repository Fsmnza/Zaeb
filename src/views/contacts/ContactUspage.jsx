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
      <h2 className='text-center text-3xl mb-6 mt-4'>Contact us</h2>
        <form id="contact-form">
          <label className='text-lg' htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className='text-lg' htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className='text-lg' htmlFor="message">Message</label>
          <textarea 
          name="message" 
          id="message" 
          className='w-full mt-2 rounded-xl text-black px-4 py-2 outline-none' 
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          ></textarea>
        </form>

        <button id="send-email-button" className='rounded-[20px] bn632-hover bn25 w-full mt-8' onClick={handleSendEmail}>
          Send via Email
        </button>
      </div>
    </>
  );
};

export default ContactUspage;
