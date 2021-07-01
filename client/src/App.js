import './stylesheets/App.css';
import Chatroom from './components/Chatroom';
import { useState } from 'react';
import { socket } from './services/socket';

function App() {
  return (
    <>
      <h1>Let's talk</h1>

      <Chatroom />
    </>
  );
}

export default App;
