import { motion } from 'motion/react';
import { Code, Cpu, Gamepad2, Layers } from 'lucide-react';

const skillCategories = [
  {
    icon: Gamepad2,
    title: 'GAME ENGINES',
    color: 'cyan',
    skills: [
      { name: 'Unreal Engine', level: 90 },
      { name: 'Unity', level: 95 },
      { name: 'Godot', level: 75 },
      { name: 'Custom Engine', level: 80 }
    ]
  },
  {
    icon: Code,
    title: 'PROGRAMMING',
    color: 'purple',
    skills: [
      { name: 'C++', level: 90 },
      { name: 'C#', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 80 }
    ]
  },
  {
    icon: Cpu,
    title: 'GRAPHICS & RENDERING',
    color: 'pink',
    skills: [
      { name: 'GLSL/HLSL', level: 85 },
      { name: 'DirectX', level: 75 },
      { name: 'Vulkan', level: 70 },
      { name: 'WebGL', level: 80 }
    ]
  },
  {
    icon: Layers,
    title: 'TOOLS & OTHER',
    color: 'cyan',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'Blender', level: 70 },
      { name: 'Photon/Mirror', level: 85 }
    ]
  }
];

export function Skills() {
  const getColorClasses = (color: string) => {
    const colors = {
      cyan: { border: 'border-cyan-500/20', bg: 'bg-cyan-500/5', text: 'text-cyan-400', bar: 'bg-cyan-500', barBg: 'bg-cyan-500/20' },
      purple: { border: 'border-purple-500/20', bg: 'bg-purple-500/5', text: 'text-purple-400', bar: 'bg-purple-500', barBg: 'bg-purple-500/20' },
      pink: { border: 'border-pink-500/20', bg: 'bg-pink-500/5', text: 'text-pink-400', bar: 'bg-pink-500', barBg: 'bg-pink-500/20' }
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-cyan-500/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-12">
          <Code className="w-8 h-8 text-pink-400" />
          <h2 className="text-4xl">
            <span className="text-pink-400">{'<'}</span>
            SKILLS
            <span className="text-pink-400">{'/>'}</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 border ${colors.border} rounded-lg ${colors.bg}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className={`w-6 h-6 ${colors.text}`} />
                  <h3 className={`${colors.text}`}>{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className={colors.text}>{skill.level}%</span>
                      </div>
                      <div className={`h-2 ${colors.barBg} rounded-full overflow-hidden`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full ${colors.bar} rounded-full`}
                        ></motion.div>
                      </div>
                    </div>
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
