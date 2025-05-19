import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown, Terminal } from 'lucide-react';
import { Button } from '../components/ui/button';
import { NavLink } from 'react-router-dom';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

interface AnimatedBackgroundProps {
  splineUrl?: string;
}

const AnimatedBackground = ({ splineUrl }: AnimatedBackgroundProps) => {
  // This component can be easily replaced with Spline later
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    // Generate random particles
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 80; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 20 + 10,
        });
      }
      setParticles(newParticles);
    };
    
    generateParticles();
  }, []);
  
  // If splineUrl is provided, render Spline component instead
  if (splineUrl) {
    return (
      <div className="absolute inset-0 z-0 opacity-60">
        {/* <Spline scene={splineUrl} /> */}
        <div className="flex items-center justify-center h-full text-stone-700">
          Spline will render here: {splineUrl}
        </div>
      </div>
    );
  }
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-stone-950/60 to-stone-950 opacity-80"></div>
      
      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-red-500"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            y: ["0%", "100%"],
            opacity: [particle.opacity, particle.opacity/2, particle.opacity],
          }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "reverse",
          }}
        />
      ))}
      
      {/* Soft glow elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-red-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-red-800/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

const Landing = () => {
  // Spline URL can be set here when you have a subscription
  const splineUrl: string = "";
  
  return (
    <div className="min-h-screen text-stone-50">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background - easily replaceable with Spline */}
        <AnimatedBackground splineUrl={splineUrl} />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-stone-100 to-red-300">
              Ahmad Raaiyan
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto mb-8">
              Howdy!
            </p>
            
            {/* Socials */}
            <div className="flex gap-6 justify-center mb-10">
              <motion.a 
                href="https://github.com/contrafy" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#ef4444' }}
                className="text-stone-300 hover:text-red-500 transition-colors"
              >
                <Github size={28} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/ahmad-raaiyan-8a55131a8" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#ef4444' }}
                className="text-stone-300 hover:text-red-500 transition-colors"
              >
                <Linkedin size={28} />
              </motion.a>
            </div>

            {/* Projects button */}
            <NavLink to="/projects">
              <Button 
                variant="outline" 
                className="border-red-500 bg-red-500/10 text-red-400 mx-5 transition-all"
              >
                Projects
              </Button>
            </NavLink>

            {/* About Me button */}
            <NavLink to="/about">
              <Button 
                variant="outline" 
                className="border-red-500 bg-red-500/10 text-red-400 mx-5 transition-all"
              >
                About Me
              </Button>
            </NavLink>
          </motion.div>
        </div>
        
        {/* Bouncing Terminal icon */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Terminal className="h-15 w-15 text-red-400" />
        </motion.div>
      </section>
    </div>
  );
};

export default Landing;