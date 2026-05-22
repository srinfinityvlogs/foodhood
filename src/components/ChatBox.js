"use client";

import { useState } from "react";
import Message from "./Message";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      text: "Hi! Tell me your area and cuisine 🍕",
      sender: "bot",
    },
  ]);

  const [area, setArea] = useState("");
  const [cuisine, setCuisine] = useState("");

  const handleSend = () => {
    if (!area || !cuisine) return;

    const userMessage = {
      text: `Area: ${area}, Cuisine: ${cuisine}`,
      sender: "user",
    };

    const botMessage = {
      text: `Searching best ${cuisine} places in ${area}...`,
      sender: "bot",
    };

    setMessages([...messages, userMessage, botMessage]);

    setArea("");
    setCuisine("");
  };

  return (
    <div className="bg-white w-full max-w-md p-4 rounded-xl shadow-lg">
      <div className="flex flex-col mb-4">
        {messages.map((msg, index) => (
          <Message
            key={index}
            text={msg.text}
            sender={msg.sender}
          />
        ))}
      </div>

      <input
        type="text"
        placeholder="Enter area"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />

      <input
        type="text"
        placeholder="Enter cuisine"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />

      <button
        onClick={handleSend}
        className="w-full bg-orange-500 text-white p-2 rounded"
      >
        Send
      </button>
    </div>
  );
}