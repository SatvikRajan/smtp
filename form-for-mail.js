import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/send-email', {
        senderName,
        senderEmail,
        subject,
        text
      });
      setMessage(response.data);
      setSenderName('');
      setSenderEmail('');
      setSubject('');
      setText('');
    } catch (error) {
      setMessage('Error sending email');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Email Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Sender Name:
            <input
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Sender Email:
            <input
              type="email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Subject:
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Text:
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send Email</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EmailForm;
