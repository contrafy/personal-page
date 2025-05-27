import { motion } from 'framer-motion';
import { Terminal, Server, Monitor, GraduationCap } from 'lucide-react';
import { Separator } from '../components/ui/separator';

import ProfileHeader from '@/components/ProfileHeader';
import Timeline, { TimelineItem } from '@/components/Timeline';
import SkillsSection from '@/components/SkillsSection';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  const timelineItems: TimelineItem[] = [
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
      
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <ProfileHeader
             avatarSrc="/headshot-cropped-noHDR.jpg"
             name="Ahmad Raaiyan"
             subtitle="SysAdmin, Software Developer, Lifelong Learner"
             description="As a senior CS student at Texas A&M University, I blend
                          systems administration expertise with software development
                          skills. Currently working as a SysAdmin for University
                          Libraries, I specialize in Kubernetes orchestration and cloud
                          infrastructure."
          />

          {/* Timeline */}
          <Timeline
            heading="Experience & Education"
            items={timelineItems}
          />
          
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
