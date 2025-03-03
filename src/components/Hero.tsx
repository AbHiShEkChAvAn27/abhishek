import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 z-0"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400/20 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-400/20 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 right-40 w-80 h-80 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Abhishek Chavan
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-8">
            Full Stack Developer
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-10">
            I build exceptional digital experiences that are fast, accessible, and responsive on all devices.
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <a 
            href="#about" 
            className="inline-flex items-center justify-center p-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;