'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Terminal, Minimize2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Input } from '@/components/ui';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"; 
import Link from 'next/link';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useAtom } from 'jotai';
import { formAtom } from '@/lib/atoms';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useRouter } from 'nextjs-toploader/app';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [messages, setMessages] = useState([
    { id: 2, role: 'ai', text:`**Welcome to Zelphine.**\nI’m here to help you turn your idea into a real, scalable digital product.\nWhether it’s a website, SaaS platform, AI solution, or internal tool — our team builds it end-to-end.\n\n**Tell me what you want to build, and I’ll guide you from idea to execution.**` },
  ]);
  
  const [chatFormData, setChatFormData] = useAtom(formAtom);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); 

  // FIX: Scroll Logic
  // We use a small timeout to ensure the DOM has updated before scrolling
  const scrollToBottom = () => {
    setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, isOpen]); // Also scroll when opening

  const handleSend = async(e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const inputMsg = input;
    const newMsg = { id: Date.now(), role: 'user', text: input };
    
    setMessages(prev => [...prev, newMsg]);
    setInput("");
    setIsLoading(true); 

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, newMsg] }),
      })
      const data = await res.json();
      
      if(data.data){
        const reply = JSON.parse(data.data);
        setChatFormData(reply);
        setIsOpen(false);
        router.push("/contactus");
        setMessages(prev => [...prev, { id: Date.now() + 1, role: 'ai', text: reply.zelphineAi }]);
        return;
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'ai', text: data.message }]);
    } catch (error) {
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'ai', text: "Sorry, something went wrong. Please try again." }]);
      setInput(inputMsg) 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
         <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-3 p-3 md:px-5 md:py-3 rounded-full shadow-2xl bg-white border border-slate-200 group hover:border-indigo-500 hover:shadow-indigo-500/20 transition-all duration-300"
        >
            <div className="relative flex items-center justify-center w-8 h-8 md:w-12 md:h-10">
                <DotLottieReact
                    src="/assets/support.lottie"
                    loop
                    autoplay
                    style={{ width: "100%", height: "100%" }}
                />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full animate-pulse shadow-sm"></span>
            </div>
            <div className="hidden md:flex flex-col items-start text-left">
                <span className="text-[10px] font-mono font-bold uppercase text-slate-500 leading-none mb-0.5 group-hover:text-indigo-600 transition-colors">
                Online
                </span>
                <span className="text-sm font-bold text-slate-900 leading-none">
                AI Advisor
                </span>
            </div>
        </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-[100] flex flex-col bg-white shadow-2xl overflow-hidden
              /* Full screen on mobile */
              inset-0 
              /* Fixed size on desktop */
              md:inset-auto md:bottom-6 md:right-6 
              md:w-[400px] md:h-[600px] md:max-h-[80vh] md:rounded-2xl md:border md:border-slate-200"
          >

            {/* --- HEADER --- */}
            {/* shrink-0 ensures header never gets squished by the scroll area */}
            <div className="p-4 flex justify-between items-center shadow-sm border-b border-slate-100 bg-white z-20 shrink-0 h-16">
                <div className="flex items-center gap-3">
                    <img src="/assets/logo.png" alt="Z" className="w-8 h-8 object-contain" />
                    <div>
                        <h3 className="text-sm font-bold leading-none mb-1 text-slate-900">Project Advisor</h3>
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Online</span>
                        </div>
                    </div>
                </div>
                <Button 
                    variant={"ghost"}
                    onClick={() => setIsOpen(false)} 
                    className="h-8 w-8 p-0 hover:bg-slate-100 rounded-lg text-slate-500"
                >
                    <Minimize2 size={18} className="hidden md:block" /> 
                    <X size={20} className="md:hidden" />
                </Button>
            </div>

            {/* --- CHAT AREA --- */}
            {/* FIX: flex-1 min-h-0 
                - flex-1: Tells it to take all remaining space
                - min-h-0: CRITICAL. Prevents flex items from overflowing their container
            */}
            <div className="flex-1 min-h-0 bg-slate-50/50 relative">
                <ScrollArea className="h-full w-full">
                    <div className="p-4 space-y-5">
                        {messages.map((m) => (
                            <div 
                                key={m.id} 
                                className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
                            >
                                <span className="text-[10px] font-mono text-slate-400 mb-1 px-1 uppercase">
                                    {m.role === 'user' ? 'You' : m.role === 'system' ? 'System' : 'Zelphine AI'}
                                </span>
                                <div 
                                    className={`max-w-[85%] p-3.5 text-sm leading-relaxed shadow-sm font-medium relative whitespace-pre-wrap ${
                                        m.role === 'user' 
                                        ? 'bg-indigo-600 text-white rounded-2xl rounded-tr-sm' 
                                        : 'bg-white border border-slate-200 text-slate-700 rounded-2xl rounded-tl-sm'
                                    }`}
                                >
                                {m.role === "ai" ? (
                                    <ReactMarkdown 
                                        components={{
                                            p: ({ children }) => <p className="mb-2 last:mb-0 leading-6">{children}</p>,
                                            ul: ({ children }) => <ul className="list-disc ml-4 mb-2">{children}</ul>,
                                            ol: ({ children }) => <ol className="list-decimal ml-4 mb-2">{children}</ol>,
                                            li: ({ children }) => <li className="mb-1">{children}</li>,
                                            h3: ({ children }) => <h3 className="text-sm font-bold mt-3 mb-1">{children}</h3>,
                                            strong: ({ children }) => <span className="font-bold text-slate-900">{children}</span>,
                                            a: ({ children, href }) => (
                                                <Link target="_blank" href={href||"#"} className="text-indigo-600 underline underline-offset-2 hover:text-indigo-700">
                                                    {children}
                                                </Link>
                                            ),
                                        }} 
                                        remarkPlugins={[remarkGfm]}
                                    >
                                        {m.text}
                                    </ReactMarkdown>
                                ) : (
                                    m.text
                                )}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <span className="text-[10px] font-mono text-slate-400 mb-1 px-1 uppercase">Zelphine AI</span>
                                <div className="bg-white border border-indigo-100 p-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-3">
                                    <Loader2 className="w-4 h-4 text-indigo-500 animate-spin" />
                                    <div className="flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} className="h-1" />
                    </div>
                    <ScrollBar 
    className="w-2 [&>div]:!bg-indigo-500 [&>div]:hover:!bg-indigo-600" 
  />
                </ScrollArea>
            </div>

            {/* --- INPUT AREA --- */}
            {/* shrink-0 ensures input never disappears */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 shrink-0 z-20">
                <div className="relative flex items-center">
                    <Input 
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl pl-4 pr-12 py-6 focus-visible:ring-indigo-500/20 focus-visible:border-indigo-500 placeholder:text-slate-400"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your challenge..."
                        disabled={isLoading}
                    />
                    <Button 
                        type="submit" 
                        disabled={!input.trim() || isLoading}
                        className="absolute right-2 p-2 h-8 w-8 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-all text-white"
                    >
                        <Send size={14} />
                    </Button>
                </div>

                <div className="text-center mt-3 flex justify-center items-center gap-1.5 opacity-50">
                    <Terminal size={10} />
                    <span className="text-[10px] text-slate-500 font-mono">
                        Powered by Zelphine Neural Engine
                    </span>
                </div>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}