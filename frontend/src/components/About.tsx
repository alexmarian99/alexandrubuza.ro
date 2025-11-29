import { motion } from 'motion/react';
import { User, Trophy, Target } from 'lucide-react';

export function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-12">
          <User className="w-8 h-8 text-cyan-400" />
          <h2 className="text-4xl">
            <span className="text-cyan-400">{'<'}</span>
            ABOUT
            <span className="text-cyan-400">{'/>'}</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 border border-purple-500/20 rounded-lg bg-gradient-to-br from-purple-500/5 to-transparent relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
            <div className="relative">
              <p className="text-gray-300 mb-4">
                Passionate game developer and software engineer with 5+ years of experience creating 
                engaging gaming experiences and high-performance applications. Specialized in game 
                engine development, real-time graphics, and multiplayer systems.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you'll find me competing in esports tournaments, contributing 
                to open-source gaming projects, or exploring the latest VR technologies.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="p-6 border border-cyan-500/20 rounded-lg bg-cyan-500/5 hover:bg-cyan-500/10 transition-all">
              <Trophy className="w-8 h-8 text-cyan-400 mb-3" />
              <div className="text-3xl mb-1 text-cyan-400">15+</div>
              <div className="text-sm text-gray-400">PROJECTS SHIPPED</div>
            </div>
            
            <div className="p-6 border border-pink-500/20 rounded-lg bg-pink-500/5 hover:bg-pink-500/10 transition-all">
              <Target className="w-8 h-8 text-pink-400 mb-3" />
              <div className="text-3xl mb-1 text-pink-400">50K+</div>
              <div className="text-sm text-gray-400">ACTIVE USERS</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
