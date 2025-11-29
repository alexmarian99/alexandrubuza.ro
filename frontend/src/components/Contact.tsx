import { motion } from 'motion/react';
import { Mail, MessageSquare, Github, Linkedin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-cyan-500/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-12">
          <MessageSquare className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl">
            <span className="text-purple-400">{'<'}</span>
            CONTACT
            <span className="text-purple-400">{'/>'}</span>
          </h2>
        </div>
        
        <div>
          <h3 className="text-2xl mb-4 text-cyan-400">Let's Build Something Epic</h3>
          <p className="text-gray-300 mb-8">
            I'm always interested in hearing about new projects, creative ideas, or 
            opportunities to be part of your vision. Whether you have a question or 
            just want to say hi, feel free to reach out!
          </p>
          
          <div className="space-y-4">
            <a
              href="mailto:alex.chen@example.com"
              className="flex items-center gap-3 p-4 border border-cyan-500/20 rounded-lg bg-cyan-500/5 hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all group"
            >
              <Mail className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                  alex.chen@example.com
                </div>
              </div>
            </a>

            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 p-4 border border-purple-500/20 rounded-lg bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all group"
            >
              <Phone className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-sm text-gray-400">Phone</div>
                <div className="text-purple-400 group-hover:translate-x-1 transition-transform">
                  +1 (234) 567-890
                </div>
              </div>
            </a>
            
            <div className="flex gap-4">
              {[
                { icon: Github, label: 'GitHub', color: 'purple' },
                { icon: Linkedin, label: 'LinkedIn', color: 'cyan' }
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className={`flex-1 flex items-center justify-center gap-2 p-4 border border-${social.color}-500/20 rounded-lg bg-${social.color}-500/5 hover:bg-${social.color}-500/10 hover:border-${social.color}-500/40 transition-all`}
                >
                  <social.icon className={`w-5 h-5 text-${social.color}-400`} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-cyan-500/10 text-center text-gray-400">
          <p>© 2025 Alex Chen. Built with React & Motion. Powered by passion for gaming.</p>
        </div>
      </motion.div>
    </section>
  );
}
