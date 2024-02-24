import React, { useState } from 'react';

const Messagepage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      // Не отправлять пустые сообщения
      return;
    }

    const updatedMessages = [...messages, { id: messages.length + 1, text: newMessage }];
    setMessages(updatedMessages);
    setNewMessage('');
  };

  return (
    <div className="message-page">
      <div className="message-container">
        {messages.map(message => (
          <div key={message.id} className="message">
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Введите ваше сообщение"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Отправить</button>
      </div>
    </div>
  );
};

export default Messagepage;