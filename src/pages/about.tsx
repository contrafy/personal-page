import { motion } from 'framer-motion';
import { Terminal, Server, Monitor, GraduationCap } from 'lucide-react';
import Navbar from '../components/Navbar';
// import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

import SkillsSection from '@/components/SkillsSection';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  const timelineItems = [
    {
      year: '2024 – Present',
      title: 'Systems Administrator I',
      place: 'Texas A&M University Libraries',
      description: 'Architecting and maintaining Rancher-managed Kubernetes infrastructure (bare-metal and virtual clusters), maintaining internal Harbor registries, maintaining virtualization with vSphere, and ensuring infrastructure availability via Infoblox DNS/IPAM and NGINX load balancing.',
      icon: <Server className="h-5 w-5" />
    },
    {
      year: '2024',
      title: 'Linux Systems Administrator (Student)',
      place: 'Texas A&M College of Engineering & ArtsSci',
      description: 'Administered Ubuntu and RHEL environments for research computing, automated provisioning with Ansible/Chef, deployed and managed bare-metal clusters in data centers, and ensured compliance with stringent security standards.',
      icon: <Terminal className="h-5 w-5" />
    },
    {
      year: '2023 – 2024',
      title: 'Systems Administrator (Student)',
      place: 'Texas A&M Division of Student Affairs',
      description: 'Managed camera infrastructure (1,000+ endpoints), streamlined Windows deployments and management via SCCM/GPO scripting, and managed MacOS/iOS devices using JAMF and Apple School Manager.',
      icon: <Monitor className="h-5 w-5" />
    },
    {
      year: '2021 – 2025',
      title: 'B.S. Computer Science',
      place: 'Texas A&M University',
      description: 'Found a keen interest in distributed systems, software architecture, operating systems internals. Developed numerous technical passion projects while completing my degree.',
      icon: <GraduationCap className="h-5 w-5" />
    }
  ];
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 to-stone-950 text-stone-100 pt-20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-red-500 to-red-800 opacity-75 blur"></div>
              <Avatar className="h-60 w-60 border-4 border-stone-800 relative overflow-hidden">
                <AvatarImage src="/headshot-cropped-noHDR.jpg" alt="Ahmad Raaiyan" className="object-cover w-full h-full rounded-full"/>
                <AvatarFallback className="bg-stone-800 text-red-500 text-4xl">AR</AvatarFallback>
              </Avatar>
            </motion.div>
            
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-100">Ahmad Raaiyan</h1>
              <h2 className="text-xl md:text-2xl text-red-400 mb-6">SysAdmin, Software Developer, Lifelong Learner</h2>
              <p className="text-stone-300 md:text-xl max-w-2xl">
                As a senior CS student at Texas A&M University, I blend systems administration expertise with software development skills. Currently working as a SysAdmin for University Libraries, I specialize in Kubernetes orchestration and cloud infrastructure.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <section className="mb-16">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl font-bold mb-6">Experience & Education</h2>
              <Separator className="mb-8 bg-red-800/50" />
              
              <div className="space-y-6">
                {timelineItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-stone-800 border border-red-900 flex items-center justify-center text-red-500">
                        {item.icon}
                      </div>
                    </div>
                    
                    <div className="pb-6 border-l border-stone-700 pl-6">
                      <div className="px-2 py-1 bg-stone-800 text-red-400 text-sm rounded inline-block mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-lg font-semibold text-stone-100">{item.title}</h3>
                      <p className="text-red-400 mb-2">{item.place}</p>
                      <p className="text-stone-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
          
          {/* Bio Section */}
          <section className="mb-16">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Terminal className="mr-2 text-red-500" /> 
                My Journey
              </h2>
              <Separator className="mb-8 bg-red-800/50" />
              
              <div className="space-y-8">
                <p className="text-stone-300">
                  Howdy!

                  My name's Ahmad, and I’m currently a Computer Science senior at Texas A&M University with a passion for designing software and maintaining distributed systems. Born and raised in Michigan, my fascination with computers began early, sparked by curiosity about operating systems internals and proliferated by taking a forbidden peek inside the heart of games I loved playing (Halo 3 and Assassin’s Creed 2 are my all-time favorites). My initial explorations into game internals led me deep into the world of OS internals, which ultimately culminated in an unwavering passion for Linux/FOSS and an appreciation for the unspoken heroes of our modern technological miracles, <a href="https://github.com/FFmpeg/FFmpeg" className="underline italic">looking at you pal...</a>
                </p>
                
                <p className="text-stone-300">
                Throughout my undergraduate journey at Texas A&M, I've immersed myself in environments requiring practical, real-world skills, serving as a Systems Administrator in a diverse range of IT environments. In these roles, I’ve managed complex, large-scale infrastructures, leveraging industry standard tools like Kubernetes, Docker, Rancher, vSphere, and Ansible to automate processes and support critical applications. Balancing academics with hands-on systems work provided me a unique perspective on software, emphasizing practical reliability, scalability, and security alongside theoretical understanding.
                </p>

                <p className="text-stone-300">
                Outside of tech and school, I still find myself deeply connected to the gaming community, being actively involved with Texas A&M eSports for the majority of my university years. These games remain influential in how I view problem-solving and teamwork in technical environments, fostering creativity, adaptability, and persistence in high-pressure scenarios. I also love music of all forms, and recently started learning to play the guitar. Fair warning, Guitar Hero skills don't transfer over to the real deal as well as one might expect, although I still don't regret the countless hours logged on Guitar Hero 3 as a kid.
                </p>

                <p className="text-stone-300">
                I'm excited to leverage my combined expertise in infrastructure and software development as I pursue opportunities that challenge and expand my technical skills further. Thanks for taking the time to learn a bit about me, if you found any of this interesting I'd love to connect!
                </p>
              </div>
            </motion.div>
          </section>
          
          
          {/* Skills */}
          <SkillsSection />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
