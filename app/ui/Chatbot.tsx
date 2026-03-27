"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareDot, X } from "lucide-react";
import HomeTab from "./chatbot/HomeTab";
import HelpTab from "./chatbot/HelpTab";
import FooterTabs from "./chatbot/FooterTabs";
import Header from "./chatbot/Header";
import MessagesTab from "./chatbot/MessagesTab";
import ChartHeader from "./chatbot/ChartHeader";
import HelpHeader from "./chatbot/HelpHeader";

type Tab = "home" | "messages" | "help";

type Message = {
  role: "user" | "bot";
  text: string;
  options?: { label: string; value: string }[];
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("home");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: "bot",
          text: "Hi there! 👋\nWhat brings you here today?",
          options: [
            { label: "Tutoring related request", value: "tutoring" },
            { label: "Exam prep", value: "exam_prep" },
            { label: "Full exam support", value: "exam_support" },
          ],
        },
      ]);
    }
  }, [messages.length]);

  // Load chatbot open state
  useEffect(() => {
    // Check if user has a saved preference
    const savedState = localStorage.getItem("chatbot-open");

    if (savedState === null) {
      // First time visitor → open chatbot after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("chatbot-open", JSON.stringify(true)); // remember user opened it
      }, 3000);

      // Clean up the timer if component unmounts
      return () => clearTimeout(timer);
    } else {
      // User has a preference → respect it
      setIsOpen(JSON.parse(savedState));
    }
  }, []);

  // Save chatbot open state
  useEffect(() => {
    localStorage.setItem("chatbot-open", JSON.stringify(isOpen));
  }, [isOpen]);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Send message
  const sendMessage = async (customMessage?: string) => {
    const text = customMessage ?? input;
    if (!text.trim()) return;

    const userMessage: { role: "user" | "bot"; text: string } = {
      role: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
      }
      setActiveTab("messages"); // Auto switch to messages tab
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
  const handleOption = (value: string) => {
    setMessages((prev) => [...prev, { role: "user", text: value }]);

    if (
      value === "tutoring" ||
      value === "exam_prep" ||
      value == "exam_support"
    ) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Which course/exam are you preparing for?",
          options: [
            { label: "PMP", value: "pmp" },
            { label: "GED", value: "ged" },
            { label: "HISET", value: "hiset" },
          ],
        },
      ]);
    }

    if (value === "pmp" || value === "ged" || value === "hiset") {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "How would you like to proceed?",
          options: [
            { label: "Book a free 15-minute strategy call", value: "call" },
            { label: "Place an order", value: "order" },
          ],
        },
      ]);
    }

    if (value === "call") {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "You can book your **free strategy call** here:\n\n[Contact Us](https://testhelpnow.com/contact)",
        },
      ]);
    }

    if (value === "order") {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "To place an order click **Get Help Now** button in the navigation bar.",
        },
      ]);
    }

    setActiveTab("messages");
  };

  <HomeTab setActiveTab={setActiveTab} />;

  <HelpTab />;

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-25 right-14 z-10 bg-primary text-white p-4 rounded-full shadow-lg animate-bounce"
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          scale: { type: "spring", stiffness: 200, damping: 10 },
          opacity: { delay: 1.2, duration: 0.6 },
        }}
      >
        {isOpen ? <X size={20} /> : <MessageSquareDot size={30} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="fixed h-[67%] bottom-25 right-10 z-10 w-[22rem]  rounded-3xl shadow-lg shadow-primary bg-white flex flex-col overflow-hidden"
          >
            {activeTab == "messages" && <ChartHeader setIsOpen={setIsOpen} />}
            {activeTab == "help" && <HelpHeader setIsOpen={setIsOpen} />}
            {activeTab == "home" && <Header setIsOpen={setIsOpen} />}

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto">
              {activeTab === "home" && <HomeTab setActiveTab={setActiveTab} />}
              {activeTab === "messages" && (
                <MessagesTab
                  messages={messages}
                  input={input}
                  setInput={setInput}
                  sendMessage={sendMessage}
                  loading={loading}
                  handleOption={handleOption}
                />
              )}
              {activeTab === "help" && <HelpTab />}
            </div>

            <FooterTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
