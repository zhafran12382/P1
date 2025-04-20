import React from 'react';

export default function Message({ message, isUser }) {
  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}
      aria-label={isUser ? 'Pesan pengguna' : 'Pesan orang lain'}
    >
      <div
        className={`
          max-w-xs px-4 py-2 rounded-lg
          ${isUser ? 'bg-blue-600 text-white rounded-br-none animate-slide-in-right' : 'bg-gray-300 text-gray-900 rounded-bl-none animate-slide-in-left'}
          shadow
        `}
      >
        {message}
      </div>
    </div>
  );
}
