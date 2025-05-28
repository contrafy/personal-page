import { motion } from 'framer-motion';
import { Terminal, Code, Github, Linkedin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

import ProfileHeader from '@/components/ProfileHeader';
import Timeline from '@/components/Timeline';
import ProjectOverviewCard from '@/components/ProjectOverviewCard';

import { timelineItems } from '@/pages/about';
import { projectsData } from '@/pages/projects';

import SkillsSection from '@/components/SkillsSection';

const Landing = () => (
  <div className="min-h-screen bg-gradient-to-b from-stone-900 to-stone-950 text-stone-100 pt-20">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-12">
        {/* ─────────────────── left column ─────────────────── */}
        <div>
          <ProfileHeader
            avatarSrc="/headshot-cropped-noHDR.jpg"
            name="Ahmad Raaiyan"
            subtitle="SysAdmin, Software Developer, Lifelong Learner"
            description="As a senior CS student at Texas A&M University, I blend systems administration expertise with software development skills. Currently working as a SysAdmin for University Libraries, I specialize in Kubernetes orchestration and cloud infrastructure."
            socialLinks={[
              { href: 'https://github.com/contrafy', icon: Github },
              { href: 'https://www.linkedin.com/in/ahmad-raaiyan-8a55131a8', icon: Linkedin },
            ]}
          />

          <Timeline 
            heading="Experience & Education"
            items={timelineItems} 
          />

          {/* Bio  */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Terminal className="mr-2 text-red-500" />
              My Journey
            </h2>
            <Separator className="mb-8 bg-red-800/50" />

            <div className="space-y-8 text-stone-300">
              <p>
              Howdy!
              </p>
              <p>
              My name's Ahmad, and I'm currently a Computer Science senior at Texas A&M University with a passion for designing software and maintaining distributed systems. Born and raised in Michigan, my fascination with computers began early, sparked by curiosity about operating systems internals and proliferated by taking a forbidden peek inside the heart of games I loved playing (Halo 3 and Assassin's Creed 2 are my all-time favorites). My initial explorations into game internals led me deep into the world of OS internals, which ultimately culminated in an unwavering passion for Linux/FOSS and an appreciation for the unspoken heroes of our modern technological miracles, <a href="https://github.com/FFmpeg/FFmpeg" className="underline italic">looking at you pal...</a>
              </p>
              <p>
              Throughout my undergraduate journey at Texas A&M, I've immersed myself in environments requiring practical, real-world skills, serving as a Systems Administrator in a diverse range of IT environments. In these roles, I've managed complex, large-scale infrastructures, leveraging industry standard tools like Kubernetes, Docker, Rancher, vSphere, and Ansible to automate processes and support critical applications. Balancing academics with hands-on systems work provided me a unique perspective on software, emphasizing practical reliability, scalability, and security alongside theoretical understanding.
              </p>
              <p>
              Outside of tech and school, I still find myself deeply connected to the gaming community, being actively involved with Texas A&M eSports for the majority of my university years. These games remain influential in how I view problem-solving and teamwork in technical environments, fostering creativity, adaptability, and persistence in high-pressure scenarios. I also love music of all forms, and recently started learning to play the guitar. Fair warning, Guitar Hero skills don't transfer over to the real deal as well as one might expect, although I still don't regret the countless hours logged on Guitar Hero 3 as a kid.
              </p>
              <p>
              I'm excited to leverage my combined expertise in infrastructure and software development as I pursue opportunities that challenge and expand my technical skills further. Thanks for taking the time to learn a bit about me, if you found any of this interesting I'd love to connect!
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <SkillsSection/>
        </div>

        {/* ─────────────────── right column ────────────────── */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-right mb-6"
          >
            <h2 className="text-2xl font-bold mb-2 flex justify-end items-center">
              Projects
              <Code className="ml-2 text-red-500" />
            </h2>
            <Separator className="bg-red-800/50 ml-auto w-1/2" />
          </motion.div>

          <div className="space-y-6">
            {projectsData.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectOverviewCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
