import { motion } from "framer-motion";
import { 
  CheckSquare, 
  Github, 
  Figma, 
  Code,
  Database
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    {
      name: "Interaction Design",
      percentage: 90,
      color: "from-purple-400 to-indigo-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="text-indigo-500" fill="currentColor">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2v-2h2v2zm0-4h-2V6h2v6.5z" />
        </svg>
      )
    },
    {
      name: "Visual Design",
      percentage: 85,
      color: "from-pink-400 to-rose-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="text-pink-500" fill="currentColor">
          <path d="M12 3l2.39 6.99H21l-5.19 3.77L17.39 21 12 16.77 6.61 21l1.58-7.24L3 9.99h6.61L12 3z" />
        </svg>
      )
    },
    {
      name: "Prototyping",
      percentage: 88,
      color: "from-yellow-400 to-amber-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="text-yellow-500" fill="currentColor">
          <path d="M3 7v10h18V7H3zm2 2h14v6H5V9zM7 11h2v2H7v-2z" />
        </svg>
      )
    },
    {
      name: "User Research",
      percentage: 83,
      color: "from-green-400 to-emerald-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="text-green-500" fill="currentColor">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z" />
        </svg>
      )
    },
    {
      name: "Accessibility",
      percentage: 80,
      color: "from-blue-400 to-cyan-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="text-cyan-500" fill="currentColor">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 9H8v2h3v3h2v-3h3v-2h-3V8h-2v3z" />
        </svg>
      )
    },
  ];

  const softSkills = [
    { name: "Empathy & Research", icon: "🧭", color: "bg-blue-400/10" },
    { name: "Collaboration", icon: "🤝", color: "bg-purple-400/10" },
    { name: "Design Thinking", icon: "💡", color: "bg-green-400/10" },
    { name: "Iterative Problem Solving", icon: "🔁", color: "bg-orange-400/10" },
  ];

  const tools = [
    {
      name: "Figma",
      icon: (
        <Figma className="text-purple-500" size={24} />
      )
    },
    {
      name: "Figma Plugins",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="text-pink-500" fill="currentColor">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM8 12a4 4 0 118 0 4 4 0 01-8 0z" />
        </svg>
      )
    },
    {
      name: "Miro",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="text-amber-500" fill="currentColor">
          <path d="M3 3h18v18H3V3zm4 4v10h10V7H7z" />
        </svg>
      )
    },
    {
      name: "Prototype Tools",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="text-cyan-500" fill="currentColor">
          <path d="M4 4h16v16H4zM8 8h8v8H8z" />
        </svg>
      )
    },
  ];

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-2">📊 Skills Overview</h2>
        <div className="w-20 h-1 bg-portfolio-primary mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg dark:bg-gray-800/70 dark:border-white/5"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center dark:text-white">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 dark:text-white">
                        {skill.icon}
                      </div>
                      <span className="font-medium dark:text-white">{skill.name}</span>
                    </div>
                    <span className="dark:text-white">{skill.percentage}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div>
            <motion.div
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg mb-6 dark:bg-gray-800/70 dark:border-white/5"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center dark:text-white">Soft Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`rounded-xl p-5 flex items-center ${skill.color} border border-white/40 hover:shadow-lg dark:border-white/10`}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="text-2xl mr-3">{skill.icon}</span>
                    <span className="font-medium dark:text-white">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg dark:bg-gray-800/70 dark:border-white/5"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center dark:text-white">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className="bg-white/60 p-4 rounded-xl shadow hover:shadow-md transition-all flex items-center justify-center dark:bg-gray-700/40 dark:text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    title={tool.name}
                  >
                    {tool.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
