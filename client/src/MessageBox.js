import React from 'react';
import { useState } from 'react';

const MessageBox = () => {
  const [message, setMessage] = useState('');

  function sendMessage(e) {
    e.preventDefault();
    if (message) {
      console.log(message);
      setMessage('');
      e.target.reset();
    } else {
      // prompt user
    }
  }
  return (
    <section>
      <form onSubmit={sendMessage}>
        <input
          type='text'
          id='message'
          autoComplete='off'
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <button type='submit'>send</button>
      </form>
    </section>
  );
};

export default MessageBox;
