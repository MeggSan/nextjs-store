"use client";

import { useState } from "react";
import styles from "./Chat.module.sass";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

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
    <main className={styles.Chat}>
      <h1 className={styles.Chat__title}>Ask anything, buy everything</h1>
      <form onSubmit={handleSubmit} className={styles.Chat__form}>
        <input
          className={styles.Chat__input}
          value={input}
          onChange={handleInputChange}
          placeholder="What would you like to buy?"
        />
        <button className={styles.Chat__button}>Send</button>
      </form>
      <section className={styles.Chat__messages}>
        {messages
          .filter((m) => m.role !== "system")
          .map((m) => {
            return (
              <span key={m.id} className={styles.Chat__message}>
                <div className={styles.Chat__message__icon}>
                  {m.role === "assistant" ? "🤖" : "😊"}
                </div>
                <div>{m.content}</div>
              </span>
            );
          })}
      </section>
    </main>
  );
};
