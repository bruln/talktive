import './App.css';
import Chatroom from './Chatroom';
import { useState } from 'react';
import { socket } from './services/socket';

function App() {
  const [name, setName] = useState('');
  return (
    <>
      <h1>Let's talk</h1>

      <Chatroom />
    </>
  );
}

export default App;
