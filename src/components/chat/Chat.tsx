"use client";

import { useState } from "react";

export const Chat = ({ agent }: { agent: string }) => {
  const [messages, setMessages] = useState<
    { id: string; role: string; content: string }[]
  >([
    {
      id: "1",
      role: "system",
      content: agent,
    },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: input,
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ messages: [...messages, newMessage] }),
    });

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();

    const assistantMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "",
    };
    setMessages((prev) => [...prev, assistantMessage]);

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      assistantMessage.content += decoder.decode(value, { stream: true });
      setMessages((prev) => [...prev.slice(0, -1), { ...assistantMessage }]);
    }
  };

  return (
    <div>
      {messages
        .filter((m) => m.role !== "system")
        .map((m) => (
          <div key={m.id}>
            <b>{m.role}:</b> {m.content}
          </div>
        ))}

      <form onSubmit={handleSubmit}>
        <label>
          Say something...
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        </label>
      </form>
    </div>
  );
};
