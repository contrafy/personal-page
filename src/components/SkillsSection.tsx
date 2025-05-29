import { useState, ReactElement } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Terminal, 
  Code, 
  Database,
  Settings2
} from 'lucide-react';
import { Separator } from '../components/ui/separator';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '../components/ui/card';

// Define types for the category and skills objects
type CategoryIcons = {
    [key: string]: ReactElement;
};
  
type SkillsByCategory = {
    [key: string]: string[];
};

const SkillsSection = () => {
  const [_activeCategory, setActiveCategory] = useState("all");
  
  // Skill categories with icons
  const categories: CategoryIcons = {
    "Software Development": <Code className="h-5 w-5" />,
    "Systems & DevOps": <Terminal className="h-5 w-5" />,
    "Cloud & Data": <Database className="h-5 w-5" />,
    "Technical Architecture": <Server className="h-5 w-5" />
  };
  
  const skills: SkillsByCategory = {
    "Software Development": [
      "Python", 
      "C++", 
      "Swift", 
      "Ruby", 
      "TypeScript", 
      "JavaScript",
      "React",
      "NextJS", 
      "SwiftUI", 
      "UIKit", 
      "Rails", 
      "Vite",
      "CI/CD Automation",
      "Infrastructure as Code"
    ],
    "Systems & DevOps": [
      "Linux Internals", 
      "Red Hat Enterprise Linux (RHEL)",
      "Ubuntu",
      "SUSE MicroOS",
      "Windows Server", 
      "SCCM/GPO", 
      "JAMF", 
      "DNS/IPAM", 
      "Load Balancing",
      "NGINX",
      "Kubernetes", 
      "Docker & Containerization", 
      "SUSE Rancher", 
      "Rancher",
      "Harbor"
    ],
    "Cloud & Data": [
      "Google Cloud", 
      "Cloudflare", 
      "Firebase", 
      "Vercel", 
      "OAuth",
      "PostgreSQL",
      "Database Management",
      "ML/AI",
      "LLM Fine Tuning/RAG", 
      "OpenAI-compatible APIs", 
      "PyTorch",
      "Python Client Libraries"
    ],
    "Technical Architecture": [
      "Infrastructure as Code",
      "CI/CD Automation",
      "Kubernetes", 
      "Docker & Containerization",
      "Load Balancing",
      "Database Management",
      "OAuth",
      "Security & Authentication"
    ]
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Settings2 className="mr-2 text-ctp-green" />
          Technical Skills
        </h2>
        <Separator className="mb-8 bg-ctp-mauve" />
        
        <div className="space-y-8">
          {/* Skill Explorer */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {Object.keys(categories).map(category => (
                  <motion.div 
                    key={category}
                    variants={itemVariants}
                  >
                    <Card className="bg-ctp-base/60 border-ctp-crust hover:border-ctp-mauve/50 transition-all duration-300 h-full">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-full bg-ctp-mauve/20 text-ctp-green">
                            {categories[category]}
                          </div>
                          <CardTitle className="text-lg">{category}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {skills[category].map(skill => (
                            <Badge 
                              key={skill}
                              className="bg-ctp-crust text-ctp-rosewater/80 hover:bg-ctp-mauve/20 cursor-pointer transition-all"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;