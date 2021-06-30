import './App.css';
import Chatroom from './Chatroom';
import { useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  const [name, setName] = useState('');
  return (
    <div>
      <h1>Let's talk</h1>

      <Chatroom />
    </div>
  );
}

export default App;
