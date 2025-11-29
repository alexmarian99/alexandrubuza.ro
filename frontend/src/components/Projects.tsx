import { motion } from 'motion/react';
import { Folder, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Cybernetic Warfare',
    description: 'Multiplayer tactical shooter with advanced AI and destructible environments. Built with Unreal Engine 5.',
    image: 'futuristic game cyberpunk',
    tech: ['Unreal Engine 5', 'C++', 'Multiplayer', 'AI'],
    stats: '25K+ Players'
  },
  {
    title: 'Neon Racer',
    description: 'High-speed racing game featuring procedural track generation and real-time leaderboards.',
    image: 'neon racing game',
    tech: ['Unity', 'C#', 'Procedural Gen', 'WebGL'],
    stats: '10K+ Downloads'
  },
  {
    title: 'Dungeon Crawler RPG',
    description: 'Roguelike dungeon crawler with dynamic loot system and local co-op multiplayer.',
    image: 'fantasy dungeon game',
    tech: ['Godot', 'GDScript', 'Pixel Art', 'Steam'],
    stats: '15K+ Wishlists'
  },
  {
    title: 'VR Space Station',
    description: 'Immersive VR experience simulating zero-gravity movement and space station management.',
    image: 'vr space station',
    tech: ['Unity', 'VR', 'C#', 'Quest 2'],
    stats: '5K+ Users'
  }
];

export function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-cyan-500/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-12">
          <Folder className="w-8 h-8 text-cyan-400" />
          <h2 className="text-4xl">
            <span className="text-cyan-400">{'<'}</span>
            PROJECTS
            <span className="text-cyan-400">{'/>'}</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border border-purple-500/20 rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/5 to-cyan-500/5 hover:border-purple-500/40 transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-black/40">
                <ImageWithFallback
                  src={`https://source.unsplash.com/800x600/?${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="px-3 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded hover:bg-cyan-500/30 transition-all flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-cyan-400">View Project</span>
                  </button>
                  <button className="px-3 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded hover:bg-purple-500/30 transition-all flex items-center gap-2">
                    <Github className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-400">View Code</span>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl text-cyan-400">{project.title}</h3>
                  <span className="px-2 py-1 bg-pink-500/20 border border-pink-500/30 rounded text-xs text-pink-400">
                    {project.stats}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
