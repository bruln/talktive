import { React, useState } from 'react';
import './stylesheets/conversation.css';
import { socket } from './services/socket';

const Conversation = () => {
  const [messageList, setMessageList] = useState(['say something']);

  socket.on('message', (message) => {
    console.log(message);
    setMessageList([...messageList, message]);
  });

  return (
    <section>
      <div id='chatbox'>
        {messageList.map((message) => {
          return <h4>{message}</h4>;
        })}
      </div>
    </section>
  );
};

export default Conversation;
