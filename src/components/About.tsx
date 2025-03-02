import React from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              I'm a passionate Full Stack Developer with over 5 years of experience in building web applications. 
              I specialize in JavaScript, React, Node.js, and modern web technologies.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              My journey in web development started during college, where I discovered my passion for creating 
              interactive and user-friendly applications. Since then, I've worked with various companies and clients 
              to deliver high-quality software solutions.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-8">
              When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new technologies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-center">
                <Code className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold">Development</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">5+ years</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-center">
                <Briefcase className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold">Experience</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">10+ projects</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-center">
                <GraduationCap className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold">Education</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">CS Degree</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 dark:bg-blue-500 rounded-lg"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-blue-600 dark:border-blue-500 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;