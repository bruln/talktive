import React from 'react';
import { useState } from 'react';

const Chatroom = () => {
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
    <div>
      <form onSubmit={sendMessage}>
        <input
          type='text'
          id='message'
          autoComplete='off'
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <button type='submit'>send</button>
      </form>
    </div>
  );
};

export default Chatroom;
