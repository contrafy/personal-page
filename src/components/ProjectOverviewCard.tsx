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
    <Card className="h-full bg-stone-800/50 border-stone-700 overflow-hidden hover:border-red-900 transition-all duration-300 group">
      {/* ───────────────────── image‑based layout ────────────────────── */}
      {project.image ? (
        <>
          <div className="relative overflow-hidden h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950/0 to-stone-950/80 z-10" />
            <div
              className="h-full w-full bg-stone-700"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute bottom-4 left-4 z-20">
              <h3 className="text-lg md:text-xl font-semibold text-stone-100">
                {project.title}
              </h3>
            </div>

            {/* quick view */}
            <motion.div
              className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1 }}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full bg-stone-900/50 border-red-900/50"
                  >
                    <Search className="h-4 w-4 text-red-400" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-stone-800 border-stone-700">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-stone-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-stone-700 text-stone-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          </div>

          {/* description & tags */}
          <CardContent className="pt-4">
            <p className="text-stone-300 line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-stone-700 text-stone-300 rounded cursor-pointer hover:bg-stone-600"
                  onClick={() => onTagSelect?.(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </>
      ) : (
        /* ─────────────────── icon‑based layout (no image) ─────────────── */
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg md:text-xl font-semibold text-stone-100">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.icons?.map((name) => {
                const Icon = iconComponents[name];
                return Icon ? (
                  <Icon key={name} className="h-5 w-5 text-red-400" />
                ) : null;
              })}
            </div>
          </div>

          <p className="text-stone-300">{project.description}</p>

          <div className="flex flex-wrap gap-1 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-stone-700 text-stone-300 rounded cursor-pointer hover:bg-stone-600"
                onClick={() => onTagSelect?.(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      )}

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
