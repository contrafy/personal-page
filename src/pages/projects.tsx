import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon, ExternalLink, Github, Search, Terminal, Smartphone, Cloud, BrainCircuit, Building2, Users, Globe, Network, Code, Palette, LineChart, Coins } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../components/ui/hover-card';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
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
      featured: true
    },
    {
      title: 'Pocketmodels',
      description: 'iOS app and iMessage extension for chatting with LLMs from OpenAI, Anthropic, Groq, and xAI. Supports mid-thread model switching and full API parameter customization (temperature, frequency penalty, etc).',
      image: null,
      icons: ['Terminal', 'Smartphone'],
      tags: ['Swift', 'SwiftUI', 'UIKit', 'Python', 'OpenAI', 'ML', 'iOS', 'Native'],
      github: null,
      demo: null,
      featured: true
    },
    {
      title: 'GCP IAM Policy Agent (Capstone)',
      description: 'Senior Capstone Project mentored by Google SWE Manager Nitin Mittal. LLM-powered agent that generates GCP IAM policy bindings from natural language. Features a fine-tuned dataset pipeline and integration with user orgs for direct policy application.',
      image: null,
      icons: ['Cloud', 'BrainCircuit'],
      tags: ['Google Cloud', 'ML', 'Python', 'NLP', 'Cloud', 'Web', 'React'],
      github: 'https://github.com/aum1/gatekeeper',
      demo: null,
      featured: true
    },
    {
      title: 'Personal Portfolio Website',
      description: 'This website - a modern, responsive portfolio built with Vite, TypeScript, and React. Features 3D Spline animations, framer-motion transitions, and a music wall for visitor interaction.',
      image: null,
      icons: ['Code', 'Palette'],
      tags: ['TypeScript', 'React', 'Vite', 'Nginx', 'Cloudflare', 'Web'],
      github: null,
      demo: 'https://contrafy.me',
      featured: false
    }
  ];

  const iconComponents: Record<string, LucideIcon> = {
    Terminal,
    Smartphone,
    Cloud,
    BrainCircuit,
    Building2,
    Users,
    Globe,
    Network,
    Code,
    Palette,
    LineChart,
    Coins
  };

  // const uniqueTags = ['all', ...new Set(projects.flatMap(project => project.tags))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 to-stone-950 text-stone-100 pt-20">
      <Navbar />
      
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
                  <Card className="h-full bg-stone-800/50 border-stone-700 overflow-hidden hover:border-red-900 transition-all duration-300 group">
                    {project.image ? (
                      // Image layout for projects with images
                      <div className="relative overflow-hidden h-48">
                        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/0 to-stone-950/80 z-10" />
                        <div 
                          className="h-full w-full bg-stone-700"
                          style={{
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />
                        <div className="absolute bottom-4 left-4 z-20">
                          <h3 className="text-lg md:text-xl font-semibold text-stone-100">{project.title}</h3>
                        </div>
                        
                        {/* Quick view button */}
                        <motion.div 
                          className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.1 }}
                        >
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <Button size="icon" variant="outline" className="rounded-full bg-stone-900/50 border-red-900/50">
                                <Search className="h-4 w-4 text-red-400" />
                              </Button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80 bg-stone-800 border-stone-700">
                              <h4 className="text-lg font-semibold text-red-400 mb-2">{project.title}</h4>
                              <p className="text-sm text-stone-300">{project.description}</p>
                              <div className="flex flex-wrap gap-1 mt-3">
                                {project.tags.map(tag => (
                                  <span key={tag} className="px-2 py-1 text-xs bg-stone-700 text-stone-300 rounded">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        </motion.div>
                      </div>
                    ) : (
                      // Icon-based layout for projects without images
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg md:text-xl font-semibold text-stone-100">{project.title}</h3>
                          <div className="flex gap-2">
                            {project.icons && project.icons.map((iconName, i) => {
                              const IconComponent = iconComponents[iconName];
                              return IconComponent ? (
                                <IconComponent key={i} className="h-5 w-5 text-red-400" />
                              ) : null;
                            })}
                          </div>
                        </div>
                        
                        <p className="text-stone-300">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mt-4">
                          {project.tags.map(tag => (
                            <span 
                              key={tag} 
                              className="px-2 py-1 text-xs bg-stone-700 text-stone-300 rounded cursor-pointer hover:bg-stone-600"
                              onClick={() => setFilter(tag)}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    )}
                    
                    {project.image && (
                      <CardContent className="pt-4">
                        <p className="text-stone-300 line-clamp-3">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mt-4">
                          {project.tags.map(tag => (
                            <span 
                              key={tag} 
                              className="px-2 py-1 text-xs bg-stone-700 text-stone-300 rounded cursor-pointer hover:bg-stone-600"
                              onClick={() => setFilter(tag)}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    )}
                    
                    <CardFooter className="flex justify-between pt-2">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-stone-300 hover:text-red-400 transition-colors"
                        >
                          <Github className="h-4 w-4 mr-1" />
                          <span className="text-sm">Code</span>
                        </a>
                      )}
                      
                      {!project.github && !project.demo && (
                        <div className="flex-1"></div>
                      )}
                      
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-stone-300 hover:text-red-400 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          <span className="text-sm">Demo</span>
                        </a>
                      )}
                    </CardFooter>
                  </Card>
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
