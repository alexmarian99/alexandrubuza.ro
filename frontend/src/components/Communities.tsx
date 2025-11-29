import { motion } from 'motion/react';
import { Users, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const communities = [
  {
    name: 'React Developer Community',
    role: 'Active Member',
    description: 'Contributing to open-source projects and helping developers learn React and modern web development.',
    image: 'react developers community',
    members: '50K+ Members',
    color: 'cyan'
  },
  {
    name: 'Game Dev Network',
    role: 'Core Contributor',
    description: 'Sharing game development knowledge, hosting workshops, and collaborating on indie game projects.',
    image: 'game developers meetup',
    members: '25K+ Members',
    color: 'purple'
  },
  {
    name: 'Tech Talks & Events',
    role: 'Speaker',
    description: 'Regular speaker at tech conferences and meetups, discussing game development and interactive experiences.',
    image: 'tech conference speakers',
    members: '10K+ Attendees',
    color: 'pink'
  },
  {
    name: 'Open Source Collective',
    role: 'Maintainer',
    description: 'Maintaining multiple open-source libraries for game development and web technologies.',
    image: 'opensource collaboration',
    members: '15K+ Contributors',
    color: 'cyan'
  }
];

export function Communities() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-cyan-500/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-12">
          <Users className="w-8 h-8 text-pink-400" />
          <h2 className="text-4xl">
            <span className="text-pink-400">{'<'}</span>
            COMMUNITIES
            <span className="text-pink-400">{'/>'}</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {communities.map((community, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 hover:border-cyan-500/40 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={`https://source.unsplash.com/800x600/?${community.image}`}
                  alt={community.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/50 to-transparent"></div>
                <div className={`absolute top-4 right-4 px-3 py-1 bg-${community.color}-500/20 backdrop-blur-sm border border-${community.color}-500/30 rounded text-sm text-${community.color}-400`}>
                  {community.role}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl text-cyan-400">{community.name}</h3>
                  <button className="px-3 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded hover:bg-cyan-500/30 transition-all flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-cyan-400">View Website</span>
                  </button>
                </div>
                
                <p className="text-gray-300 mb-4">{community.description}</p>
                
                <div className="flex items-center gap-2">
                  <div className={`px-3 py-1 bg-${community.color}-500/10 border border-${community.color}-500/20 rounded text-sm text-${community.color}-400`}>
                    {community.members}
                  </div>
                </div>
              </div>
              
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
