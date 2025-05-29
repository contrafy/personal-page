import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardFooter,
} from './ui/card';
import { Button } from './ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from './ui/hover-card';
import {
  ExternalLink,
  Github,
  Search,
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
  Coins,
  LucideIcon,
} from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  image: string | null;
  icons?: string[];
  tags: string[];
  github?: string | null;
  demo?: string | null;
  featured?: boolean;
}

interface ProjectOverviewCardProps {
  project: Project;
  /** Called when a tag‑pill is clicked so the parent can update its filter */
  onTagSelect?: (tag: string) => void;
}

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
  Coins,
};

const ProjectOverviewCard: FC<ProjectOverviewCardProps> = ({
  project,
  onTagSelect,
}) => {
  return (
    <Card className="h-full bg-ctp-base/60 border-ctp-crust/80 overflow-hidden hover:border-ctp-mauve transition-all duration-300 group">
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg md:text-xl font-semibold">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.icons?.map((name) => {
                const Icon = iconComponents[name];
                return Icon ? (
                  <Icon key={name} className="h-5 w-5 text-ctp-green" />
                ) : null;
              })}
            </div>
          </div>

          <p className="text-ctp-rosewater/80">{project.description}</p>

          <div className="flex flex-wrap gap-1 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-ctp-crust text-ctp-rosewater rounded cursor-pointer hover:bg-ctp-mauve/20"
                onClick={() => onTagSelect?.(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>

      {/* ─────────────────────────── footer ───────────────────────────── */}
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

        {/* spacer keeps demo aligned right when no github link */}
        {!project.github && !project.demo && <div className="flex-1" />}

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
  );
};

export default ProjectOverviewCard;
