import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Empowering Your Wellness Journey",
      description: "This UI/UX case study by Neet Zadafiya presents a holistic fitness application designed to empower users on their wellness journey. The app focuses on intuitive navigation, personalized experiences, and motivational features to foster sustainable healthy habits. Through meticulous user research and iterative design, this project addresses common pain points in existing fitness solutions, offering a seamless and engaging platform for tracking progress, managing workouts, and connecting with a supportive community. The goal was to create a visually appealing and highly functional app that users genuinely love to integrate into their daily lives, transforming fitness goals into achievable realities.",
      features: [
        "Personalized Workout Plans",
        " Progress Tracking",
        "Nutrition & Hydration Log",
        "Goal Setting & Reminders",
        "Community & Challenges",
        "Meditation & Mindfulness",
        "Gamification Elements",
      ],
      tags: ["UI/UX Design", "Fitness App", "Health & Wellness", "Mobile App", "Case Study", "Figma", "Wireframing", "Prototyping", "Interaction Design", "Dashboard Design", "Gamification", "Personalized Fitness", "Digital Health"],
      image: "/project/project1.png",
      link: "https://www.figma.com/design/ehteVyMbP2tA9gLWlqxN92/Fitness-app?node-id=206-281&t=8DhhxWZ6Vg5vqZF5-1"
    }, {
      title: "Job Portal Dashboard",
      description:"A Job Portal Dashboard designed to simplify the hiring and job search experience. The focus is on clear navigation, intuitive design, and quick access to essential features like job applications, saved jobs, recommendations, and notifications. The goal was to create a visually engaging, user-friendly, and efficient dashboard that helps users manage their career journey with ease.",
      features: [
        "Profile Overview & Resume Insights",
        "Applied Jobs Tracking",
        "Saved & Recommended Jobs",
        "Advanced Search & Filters",
        "Notifications & Alerts",
        "Dashboard Analytics & Insights",
        "Settings & Personalization",
      ],
      tags: ["UI/UX Design", "Fitness App", "Health & Wellness", "Mobile App", "Product Design", "User Experience", "User Interface", "Case Study", "Figma", "Wireframing", "Prototyping", "Interaction Design", "Dashboard Design", "Gamification", "Personalized Fitness", "Digital Health"],
      image: "/project/project2.png",
      link: ""
      //links past hear for the project
    },
    {
      title: "Food Delivery App",
      description:"Minimal and fast food ordering app prototype focusing on convenience.",
      features: [
        "Personalized recommendations",
        "Simplified checkout flow",
        "Dark/light mode for better usability"
      ],
      tags: ["UI/UX Design", "Food Delivery App", "Mobile App", "Product Design", "User Experience", "User Interface", "Case Study"],
      image: "/project/project3.png",
      link: "https://www.figma.com/design/0MKnvYO4QlBZ7wahMQB3tL/Food-Delivery?node-id=0-1&t=vOGO34vQdWP19J4V-1"
      //links past hear for the project
    }
     ];

  return (
    <section id="projects" className="section-container bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-2">💼 Projects</h2>
        <div className="w-20 h-1 bg-portfolio-primary mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <a href={project.link} className="block h-full" target="_blank" rel="noopener noreferrer">
                <Card className="overflow-hidden card-hover border-portfolio-primary/10 h-full cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative overflow-hidden flex items-center justify-center bg-gray-50 dark:bg-gray-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-w-full h-auto object-contain transition-all duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end pointer-events-none">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="bg-gradient-to-r from-portfolio-primary/5 to-portfolio-accent/5">
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-6">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1 mb-4">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-portfolio-primary">
                            <polyline points="9 11 12 14 22 4"></polyline>
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                          </svg>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-portfolio-primary/10 text-portfolio-primary rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground">
            These are some of my featured projects. I'm constantly working on new ideas and improving my skills.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
