import React from 'react';

const skills = [
    { name: 'HTML5' },
    { name: 'CSS3/SCSS' },
    { name: 'JavaScript' },
    { name: 'Java' },
    { name: 'Machine Learning' },
    { name: 'Deep learning' },
    { name: 'Generative Ai' },
    { name: 'MongoDB' },
    { name: 'SQL' },
    { name: 'Github' },
    { name: 'Tensorflow' },
    { name: 'Pytorch' },
    { name: 'Natural Language Processing' },
    { name: 'Huggingface' },
    { name: 'Langchain' },
    { name: 'AWS' },
    { name: 'C/C++' },
];

const SkillItem = ({ name }: { name: string }) => {
  // Construct the icon path by converting the skill name to lowercase and replacing spaces or special characters appropriately.
  const iconName = name.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '');
  const iconPath = `/icons/${iconName}.png`;
  
  return (
    <div className="mb-6 flex items-center">
      <img 
        src={iconPath} 
        alt={name} 
        className="w-10 h-10 mr-4" 
        onError={(e) => {
          // Fallback to a default icon if specific icon not found.
          (e.target as HTMLImageElement).src = '/icons/default.png';
        }}
      />
      <span className="font-medium text-lg">{name}</span>
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
            Here are my technical skills represented with icons.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillItem key={index} name={skill.name} />
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