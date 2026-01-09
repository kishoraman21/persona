import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from "axios"

export default function HiteshAIChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hey there! I'm Hitesh's AI persona. Ready to dive into some coding? Ask me anything about JavaScript, React, Node.js, or web development in general.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

 const handleSend = async () => {
  if (input.trim() === '') return;

  const userMessage = {
    id: messages.length + 1,
    type: 'user',
    text: input,
    timestamp: new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })
  };

  setMessages(prev => [...prev, userMessage]);

  const currentInput = input;
  setInput('');
  setIsTyping(true);
  const api = import.meta.env.Backend_url

  try {
    const response = await axios.post(api/chat, {
      message: currentInput,
    });

    const data = response.data;

    const botMessage = {
      id: messages.length + 2,
      type: 'bot',
      text: data,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setMessages(prev => [...prev, botMessage]);
  } catch (err) {
    console.error("Error sending message:", err);

    const errorMessage = {
      id: messages.length + 2,
      type: 'bot',
      text: "Sorry, I'm having trouble connecting right now. Please check if the backend server is running on http://localhost:8000",
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setMessages(prev => [...prev, errorMessage]);
  } finally {
    setIsTyping(false);
  }
};


  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleNewChat = () => {
    setMessages([
      {
        id: 1,
        type: 'bot',
        text: "Hey there! I'm Hitesh's AI persona. Ready to dive into some coding? Ask me anything about JavaScript, React, Node.js, or web development in general.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-stone-900 to-amber-950 flex flex-col">
      {/* Header */}
      <header className="backdrop-blur-md bg-gray-900/80 border-b border-amber-900/20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
              HC
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Hitesh AI</h1>
              <p className="text-xs text-gray-400">Online • Ready to help</p>
            </div>
          </div>
          <button 
            onClick={handleNewChat}
            className="px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            New Chat
          </button>
        </div>
      </header>

      {/* Chat Messages */}
      <main className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-4 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar */}
                {message.type === 'bot' && (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg">
                    HC
                  </div>
                )}
                {message.type === 'user' && (
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    You
                  </div>
                )}

                {/* Message Bubble */}
                <div className={`flex-1 max-w-2xl ${message.type === 'user' ? 'flex justify-end' : ''}`}>
                  <div
                    className={`rounded-2xl px-6 py-4 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
                        : 'bg-gray-800/80 backdrop-blur-sm text-gray-100 border border-amber-900/20'
                    }`}
                  >
                    <p className="text-base leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    <p className={`text-xs mt-2 ${message.type === 'user' ? 'text-amber-100' : 'text-gray-500'}`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg">
                HC
              </div>
              <div className="bg-gray-800/80 backdrop-blur-sm border border-amber-900/20 rounded-2xl px-6 py-4">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Area */}
      <div className="border-t border-amber-900/20 bg-gray-900/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex gap-4 items-end">
            <div className="flex-1 bg-gray-800/60 border border-amber-900/30 rounded-2xl overflow-hidden focus-within:border-amber-600/50 transition-colors">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Hitesh anything about coding..."
                className="w-full bg-transparent text-white placeholder-gray-500 px-6 py-4 resize-none focus:outline-none max-h-32"
                rows="1"
              />
            </div>
            <button
              onClick={handleSend}
              disabled={input.trim() === '' || isTyping}
              className="px-6 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-amber-900/50"
            >
              Send
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Press Enter to send • Shift + Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}