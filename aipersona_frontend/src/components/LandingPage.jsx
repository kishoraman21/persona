import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

export default function LandingPage() {

    const route = useNavigate()
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-stone-900 to-amber-950 flex flex-col">
      {/* Header */}
      <header className="backdrop-blur-md bg-gray-900/80 border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-500">
            Persona<span className="text-white">AI</span>
          </h1>
          <button
          onClick={()=>route("/chat")}
           className="px-6 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors">
            Try Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Text Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="inline-block mt-4 px-4 py-2 bg-amber-900/30 border border-amber-700/50 rounded-full text-amber-500 text-sm font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                AI-Powered Learning Assistant
              </motion.div>
              
              <motion.h2 
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Learn coding with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mt-2">
                  Hitesh's AI Persona
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Experience personalized mentorship powered by AI. Get instant answers, code reviews, and 
                guidance in web development—trained on Hitesh Choudhary's teaching philosophy and expertise. 
                Available 24/7 to help you master JavaScript, React, Node.js, and more.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <button
                onClick={()=>route("/chat")}
                 className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-xl shadow-amber-900/50">
                  Start Chatting
                </button>
               
              </motion.div>

            
            </motion.div>

            {/* Image Section */}
            <motion.div 
              className="relative flex justify-center items-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Subtle glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-3xl blur-2xl"
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  initial={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Main image container */}
                <motion.div 
                  className="relative w-100 h-100 bg-linear-to-br from-gray-800 to-stone-900 rounded-3xl overflow-hidden border border-amber-900/30 shadow-2xl object-cover "
                  whileHover={{ 
                    borderColor: "rgba(245, 158, 11, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image placeholder */}
                  <div className="w-full h-full flex items-center justify-center ">
                    <div className="text-center p-8 ">
                      {/* <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white text-7xl font-bold shadow-2xl">
                        HC
                      </div> */}
                      {/* <p className="text-gray-400 font-medium text-lg">
                        Add Hitesh's Image Here
                      </p> */}
                      <img src="/image.jpg" alt="My Image" />

                    </div>
                  </div>

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 via-transparent to-transparent pointer-events-none"></div>
                </motion.div>

                {/* Corner accent - top right */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-amber-600/50 rounded-tr-3xl"></div>
                
                {/* Corner accent - bottom left */}
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-orange-600/50 rounded-bl-3xl"></div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
}