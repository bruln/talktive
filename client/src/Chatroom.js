import React from 'react';
import MessageBox from './MessageBox';
import Conversation from './Conversation';
import { useState } from 'react';

const Chatroom = () => {
  return (
    <section>
      <Conversation />
      <MessageBox />
    </section>
  );
};

export default Chatroom;
