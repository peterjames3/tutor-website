"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // 🔹 Load state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem("chatbot-open");
    if (savedState) {
      setIsOpen(JSON.parse(savedState));
    }
  }, []);

  // 🔹 Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("chatbot-open", JSON.stringify(isOpen));
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "⚠️ Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button with bounce */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-27 right-15 bg-secondary hover:bg-primary text-white p-4 rounded-full shadow-lg"
        aria-label="Open chatbot"
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="fixed bottom-20 right-5 w-80  rounded-xl shadow-lg shadow-primary  bg-white flex flex-col overflow-hidden"
          >
            {/* Header */}
            <section className="text-label-title px-3 py-4 font-medium bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] text-primary rounded-t-xl flex justify-between items-center">
              <header className="flex gap-2 items-center">
                <Bot size={30} className="" />
                <h2> TestHelpNow Chatbot</h2>
              </header>

              <button
                onClick={() => setIsOpen(false)}
                className="text-primary hover:text-gray-400 cursor-pointer"
                aria-label="Close chatbot"
              >
                <X size={18} />
              </button>
            </section>

            {/* Messages */}
            <div className="p-4 h-70 overflow-y-auto space-y-2">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`p-2 rounded-xl max-w-[80%] whitespace-pre-line text-sm ${
                    msg.role === "user"
                      ? "bg-secondary text-primary ml-auto"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <ReactMarkdown
                    components={{
                      a: ({ href, children }) => (
                        <a
                          href={href ?? "#"}
                          target="_self"
                          rel="noopener noreferrer"
                          className="inline-block  text-secondary font-semibold text-xs hover:text-active-link transition mt-2"
                        >
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                </motion.div>
              ))}
              {loading && (
                <div className="p-2 bg-gray-200 rounded-xl text-sm w-fit">
                  Typing...
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex  p-2">
              <input
                type="text"
                className="flex-1 border rounded-lg p-2 mr-2 text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me about our services..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="bg-secondary hover:bg-active-link text-white hover:cursor-pointer transition-all delay-300 px-4 py-2 rounded-lg text-sm disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
