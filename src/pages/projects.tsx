import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import ProjectOverviewCard from '@/components/ProjectOverviewCard';

export const projectsData = [
  {
    title: 'Gatekeeper',
    description: 'Senior Capstone Project mentored by Google SWE Manager Nitin Mittal. LLM-powered agent that generates GCP IAM policy bindings from natural language. Features a fine-tuned dataset pipeline and integration with user orgs for direct policy application.',
    image: null,
    icons: ['Cloud', 'BrainCircuit'],
    tags: ['Google Cloud', 'ML', 'Python', 'NLP', 'Cloud', 'Web', 'React'],
    github: 'https://github.com/contrafy/gatekeeper',
    demo: null,
    featured: false
  },
  {
    title: 'Career Builder',
    description: 'Web App that quickly finds job postings most in line with the user\'s skills and interests, based off their resume/CV. Uses LLM API\'s to personalize job search for the user, and improve their resume/CV.',
    image: null,
    icons: ['BrainCircuit', 'Globe'],
    tags: ['React', 'FastAPI', 'Typescript', 'Python', 'LLM API\'s', 'Tailwind', 'framer-motion', 'Native'],
    github: 'https://github.com/contrafy/career-build-ui',
    demo: null,
    featured: true
  },
  {
    title: 'Precision Funding',
    description: 'Complete platform for a Prop Trading firm with a modern frontend and integrated payment system. Handles user accounts, trading challenges, and automated invoice management.',
    image: null,
    icons: ['LineChart', 'Coins'],
    tags: ['React', 'NextJS', 'Firebase', 'Stripe', 'Vercel', 'Web'],
    github: null,
    demo: 'https://precisionfunding.vip',
    featured: false
  },
  {
    title: 'Web Crawler',
    description: 'Multithreaded C++ web crawler built with WinSock. Parses, filters, and queues links recursively while collecting page-level statistics at scale.',
    image: null,
    icons: ['Globe', 'Network'],
    tags: ['C++', 'Winsock', 'Networking', 'HTTP', 'Native'],
    github: "https://github.com/contrafy/win-crawl",
    demo: null,
    featured: false
  },
  {
    title: 'Aggies in Real Estate Portal',
    description: 'Full-stack Rails app for a Texas A&M student organization. Includes member authentication, attendance tracking, event management, and Google OAuth integration.',
    image: null,
    icons: ['Building2', 'Users'],
    tags: ['Ruby', 'Rails', 'PostgreSQL', 'OAuth 2.0', 'Web'],
    github: null,
    demo: null,
    featured: false
  },
  {
    title: 'Pocketmodels',
    description: 'iOS app and iMessage extension for chatting with LLMs from OpenAI, Anthropic, Groq, and xAI. Supports mid-thread model switching and full API parameter customization (temperature, frequency penalty, etc).',
    image: null,
    icons: ['Terminal', 'Smartphone'],
    tags: ['Swift', 'SwiftUI', 'UIKit', 'Python', 'OpenAI', 'ML', 'iOS', 'Native'],
    github: null,
    demo: null,
    featured: false
  },
  {
    title: 'Personal Portfolio Website',
    description: 'This website - a modern, responsive portfolio built with Vite, TypeScript, and React. Features 3D Spline animations, framer-motion transitions, and a music wall for visitor interaction.',
    image: null,
    icons: ['Code', 'Palette'],
    tags: ['TypeScript', 'React', 'Vite', 'Nginx', 'Cloudflare', 'Web'],
    github: 'https://github.com/contrafy/personal-page',
    demo: 'https://contrafy.me',
    featured: false
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = projectsData;

  // const uniqueTags = ['all', ...new Set(projects.flatMap(project => project.tags))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 to-stone-950 text-stone-100 pt-20">
      
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-100">My Projects</h1>
            <p className="text-stone-300 max-w-2xl mx-auto">
              A collection of my work showcasing my skills in software development, 
              systems administration, and problem-solving.
            </p>
          </div>
          
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={project.featured && project.image ? 'md:col-span-2' : ''}
                >
                  <ProjectOverviewCard
                    project={project}
                    onTagSelect={setFilter}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* No results message */}
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-stone-400 text-lg">No projects found with the selected filter.</p>
              <Button 
                variant="link" 
                className="text-red-400 mt-2"
                onClick={() => setFilter('all')}
              >
                View all projects
              </Button>
            </motion.div>
          )}
          
          {/* Contact CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 text-center pb-10"
          >
            <Separator className="mb-12 bg-red-800/30" />
            <h2 className="text-2xl font-bold mb-4">Interested in collaborating?</h2>
            <p className="text-stone-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Button 
              variant="outline" 
              className="border-red-500 text-stone-200 bg-red-500/10 hover:text-red-400 transition-all"
              onClick={() => window.location.href = 'mailto:ahmadraaiyan12@gmail.com'}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
