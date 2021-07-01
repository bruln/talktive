import React from 'react';
import { useState } from 'react';
import { socket } from './services/socket';
const MessageBox = () => {
  const [message, setMessage] = useState('');

  function sendMessage(e) {
    e.preventDefault();
    if (message) {
      socket.emit('message', message);
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
