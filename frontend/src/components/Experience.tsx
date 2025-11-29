import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const experiences = [
  {
    title: 'Senior Game Developer',
    company: 'PixelForge Studios',
    period: '2022 - PRESENT',
    description: 'Lead development of AAA multiplayer shooter game. Architected network synchronization system handling 100+ concurrent players.',
    tech: ['Unreal Engine', 'C++', 'Multiplayer', 'Netcode'],
    logo: 'https://images.unsplash.com/photo-1634309490604-1270c0d486e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwc3R1ZGlvJTIwbG9nb3xlbnwxfHx8fDE3NjQzNjk3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Full Stack Game Developer',
    company: 'Indie Game Labs',
    period: '2020 - 2022',
    description: 'Developed and shipped 3 indie games on Steam. Built custom game engine and tools for rapid prototyping.',
    tech: ['Unity', 'C#', 'WebGL', 'Node.js'],
    logo: 'https://images.unsplash.com/photo-1610041321338-fb537fdbe1a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb21wYW55fGVufDF8fHx8MTc2NDM0MTU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Junior Software Engineer',
    company: 'TechCorp Interactive',
    period: '2018 - 2020',
    description: 'Created gameplay features and UI systems. Optimized game performance achieving 60 FPS on low-end hardware.',
    tech: ['Unity', 'C#', 'GLSL', 'React'],
    logo: 'https://images.unsplash.com/photo-1764123108291-0f48d2c7e563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzY0MzU5MTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-cyan-500/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl">
            <span className="text-purple-400">{'<'}</span>
            EXPERIENCE
            <span className="text-purple-400">{'/>'}</span>
          </h2>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isCurrent = exp.period.includes('PRESENT');
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-6 border rounded-lg transition-all group ${
                  isCurrent 
                    ? 'border-cyan-500/50 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 shadow-[0_0_30px_rgba(6,182,212,0.2)]' 
                    : 'border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 hover:border-cyan-500/40'
                }`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-500 transition-opacity ${
                  isCurrent ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-lg overflow-hidden border-2 bg-gray-900/50 transition-all ${
                      isCurrent 
                        ? 'border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.3)]' 
                        : 'border-cyan-500/30 group-hover:border-cyan-500/60 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                    }`}>
                      <ImageWithFallback
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl text-cyan-400 mb-1">{exp.title}</h3>
                      <div className="text-purple-400">{exp.company}</div>
                    </div>
                    <div className={`inline-block px-3 py-1 border rounded text-sm mt-2 md:mt-0 md:ml-4 ${
                      isCurrent 
                        ? 'border-green-500/30 bg-green-500/10 text-green-400' 
                        : 'border-pink-500/30 bg-pink-500/10 text-pink-400'
                    }`}>
                      {exp.period}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
