import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io('http://localhost:3000');
    socketInstance.emit('init', 'Socket initialized');
    setSocket(socketInstance);

    return () => socketInstance.close();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('chat_message', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }
  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      const message = {
        text: input.trim(),
        timestamp: Date.now(),
      };

      socket.emit('chat_message', message);

      setInput('');
    }
  };

  return (
    <div>
      <h1>Sample App</h1>
      <ul>
        {
          messages.map((message, index) => (
            <li key={index}>
              [{new Date(message.timestamp).toLocaleTimeString()}] {message.text}
            </li>
          ))
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
