import { ArrowLeft, Printer, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

const experiences = [
  {
    title: 'Senior Game Developer',
    company: 'PixelForge Studios',
    period: '2022 - PRESENT',
    description: 'Lead development of AAA multiplayer shooter game. Architected network synchronization system handling 100+ concurrent players.',
    achievements: [
      'Developed core gameplay systems using Unreal Engine 5',
      'Optimized multiplayer netcode reducing latency by 40%',
      'Mentored team of 5 junior developers'
    ]
  },
  {
    title: 'Full Stack Game Developer',
    company: 'Indie Game Labs',
    period: '2020 - 2022',
    description: 'Developed and shipped 3 indie games on Steam. Built custom game engine and tools for rapid prototyping.',
    achievements: [
      'Shipped 3 successful indie titles with 50K+ combined sales',
      'Built custom game engine from scratch using C++ and OpenGL',
      'Implemented procedural generation systems'
    ]
  },
  {
    title: 'Junior Software Engineer',
    company: 'TechCorp Interactive',
    period: '2018 - 2020',
    description: 'Created gameplay features and UI systems. Optimized game performance achieving 60 FPS on low-end hardware.',
    achievements: [
      'Developed UI systems and gameplay features using Unity',
      'Achieved 60 FPS performance on low-end hardware',
      'Implemented shader optimization techniques'
    ]
  }
];

const skills = {
  'Game Engines': ['Unreal Engine 5', 'Unity', 'Godot', 'Custom Engine Development'],
  'Programming': ['C++', 'C#', 'TypeScript', 'Python', 'GLSL/HLSL'],
  'Graphics & Rendering': ['DirectX', 'Vulkan', 'WebGL', 'Shader Programming'],
  'Tools & Technologies': ['Git', 'Docker', 'Blender', 'Photon/Mirror', 'Node.js']
};

const projects = [
  {
    title: 'Cybernetic Warfare',
    description: 'AAA multiplayer tactical shooter with advanced AI and destructible environments',
    tech: ['Unreal Engine 5', 'C++', 'Multiplayer', 'AI'],
    impact: '25K+ Active Players'
  },
  {
    title: 'Neon Racer',
    description: 'High-speed racing game with procedural track generation',
    tech: ['Unity', 'C#', 'Procedural Gen', 'WebGL'],
    impact: '10K+ Downloads'
  },
  {
    title: 'Dungeon Crawler RPG',
    description: 'Roguelike dungeon crawler with dynamic loot and local co-op',
    tech: ['Godot', 'GDScript', 'Steam SDK'],
    impact: '15K+ Wishlists'
  }
];

export function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen bg-white print:bg-white">
      {/* Print Styles */}
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white;
          }
          .print\\:break-inside-avoid {
            break-inside: avoid;
          }
          .print\\:break-after-page {
            break-after: page;
          }
        }
      `}</style>

      {/* Navigation Bar - Hidden on Print */}
      <div className="no-print sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-cyan-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
          >
            <Printer className="w-5 h-5" />
            Print CV
          </button>
        </div>
      </div>

      {/* CV Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 print:py-8">
        {/* Header */}
        <header className="mb-12 print:mb-8 flex gap-8 items-start">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 print:w-24 print:h-24 rounded-lg overflow-hidden border-2 border-cyan-600">
              <ImageWithFallback
                src="https://source.unsplash.com/400x400/?portrait,professional"
                alt="Alex Chen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <h1 className="text-5xl print:text-4xl mb-2 text-gray-900">Alex Chen</h1>
            <p className="text-2xl print:text-xl text-cyan-600 mb-6">Game Developer / Software Engineer</p>
            
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>alex.chen@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>github.com/alexchen</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <span>linkedin.com/in/alexchen</span>
              </div>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-10 print:mb-6 print:break-inside-avoid">
          <h2 className="text-2xl print:text-xl mb-4 text-gray-900 border-b-2 border-cyan-600 pb-2">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Passionate game developer and software engineer with 5+ years of experience creating engaging gaming 
            experiences and high-performance applications. Specialized in game engine development, real-time graphics, 
            and multiplayer systems. Proven track record of shipping successful titles with 50K+ active users across 
            multiple platforms. Expert in Unreal Engine, Unity, and custom engine development.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-10 print:mb-6">
          <h2 className="text-2xl print:text-xl mb-4 text-gray-900 border-b-2 border-cyan-600 pb-2">Work Experience</h2>
          <div className="space-y-6 print:space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="print:break-inside-avoid">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl print:text-lg text-gray-900">{exp.title}</h3>
                    <p className="text-cyan-600">{exp.company}</p>
                  </div>
                  <span className="text-gray-600">{exp.period}</span>
                </div>
                <p className="text-gray-700 mb-2">{exp.description}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10 print:mb-6">
          <h2 className="text-2xl print:text-xl mb-4 text-gray-900 border-b-2 border-cyan-600 pb-2">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:gap-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="print:break-inside-avoid">
                <h3 className="text-lg print:text-base text-gray-900 mb-2">{category}</h3>
                <p className="text-gray-700">{items.join(' • ')}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-10 print:mb-6">
          <h2 className="text-2xl print:text-xl mb-4 text-gray-900 border-b-2 border-cyan-600 pb-2">Notable Projects</h2>
          <div className="space-y-4 print:space-y-3">
            {projects.map((project, index) => (
              <div key={index} className="print:break-inside-avoid">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl print:text-lg text-gray-900">{project.title}</h3>
                  <span className="text-cyan-600 text-sm">{project.impact}</span>
                </div>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <p className="text-gray-600 text-sm">
                  <span className="text-gray-900">Technologies:</span> {project.tech.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-10 print:mb-6 print:break-inside-avoid">
          <h2 className="text-2xl print:text-xl mb-4 text-gray-900 border-b-2 border-cyan-600 pb-2">Education</h2>
          <div>
            <h3 className="text-xl print:text-lg text-gray-900">Bachelor of Science in Computer Science</h3>
            <p className="text-cyan-600">University of California, Berkeley</p>
            <p className="text-gray-600">2014 - 2018 • GPA: 3.8/4.0</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm pt-8 border-t border-gray-200">
          <p>References available upon request</p>
        </footer>
      </div>
    </div>
  );
}
