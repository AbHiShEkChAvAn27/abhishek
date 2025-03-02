import React from 'react';

const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3/SCSS', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 80 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'Express', level: 70 },
  { name: 'MongoDB', level: 65 },
  { name: 'SQL', level: 70 },
  { name: 'Git', level: 80 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'RESTful APIs', level: 80 },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-slate-600 dark:text-slate-400">{level}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 h-2.5 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Here are my technical skills and proficiency levels. I'm constantly learning and improving my abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Responsive Design', 'UI/UX', 'Agile/Scrum', 'Testing', 'CI/CD', 'Performance Optimization', 'SEO', 'Accessibility'].map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-white dark:bg-slate-700 rounded-full shadow-sm text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;