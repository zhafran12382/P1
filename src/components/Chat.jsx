import React, { useState, useRef, useEffect } from 'react';
import Message from './Message.jsx';

export default function Chat({ user }) {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Halo! Selamat datang di chat.', sender: 'other' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = {
      id: Date.now(),
      text: input.trim(),
      sender: 'user',
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 font-semibold text-lg">
        Chat - {user}
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        {messages.map((msg) => (
          <Message
            key={msg.id}
            message={msg.text}
            isUser={msg.sender === 'user'}
          />
        ))}
        <div ref={messagesEndRef} />
      </main>
      <footer className="p-4 bg-white border-t border-gray-300">
        <textarea
          rows="2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ketik pesan..."
          className="w-full resize-none border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Kirim
        </button>
      </footer>
    </div>
  );
}
