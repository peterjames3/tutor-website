"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

interface Option {
  label: string;
  value: string;
}

interface Message {
  role: "user" | "bot";
  text: string;
  options?: Option[];
}

interface MessagesTabProps {
  messages: Message[];
  input: string;
  setInput: (value: string) => void;
  sendMessage: (text?: string) => void;
  loading: boolean;
  handleOption: (value: string) => void;
}

export default function MessagesTab({
  messages,
  input,
  setInput,
  sendMessage,
  loading,
  handleOption,
}: MessagesTabProps) {
  const lastMessage = messages[messages.length - 1];

  return (
    <div className="flex flex-col h-full">
      <h3 className="px-2 py-3 text-center text-sm text-gray-600">
        We are here to assist you with any questions or concerns you may have.
        Feel free to ask anything
      </h3>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`p-3 rounded-xl max-w-[80%] whitespace-pre-line text-sm ${
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
                    className="inline-block text-secondary font-semibold text-xs hover:text-active-link transition mt-2"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {msg.text}
            </ReactMarkdown>

            {/* OPTION BUTTONS */}
            {msg.options && (
              <div className="flex flex-wrap gap-2 mt-3">
                {msg.options.map((opt, index) => (
                  <button
                    key={index}
                    onClick={() => handleOption(opt.value)}
                    className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full text-xs font-medium transition"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        ))}

        {loading && (
          <div className="p-2 bg-gray-200 rounded-xl text-sm w-fit">
            Typing...
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex p-2 border-t">
        <input
          type="text"
          className="flex-1 border rounded-lg p-2 mr-2 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about our services..."
          // disabled={loading || !!lastMessage?.options}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={() => sendMessage()}
          disabled={loading || !!lastMessage?.options}
          className="bg-secondary hover:bg-active-link text-white transition px-4 py-2 rounded-lg text-sm disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
