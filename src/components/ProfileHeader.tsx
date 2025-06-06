import { FC } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from './ui/avatar';

interface SocialLink {
  href: string;
  icon: LucideIcon;
}

interface ProfileHeaderProps {
  avatarSrc: string;
  name: string;
  subtitle: string;
  description: string;
  /** GitHub, LinkedIn, etc. */
  socialLinks?: SocialLink[];
}

const ProfileHeader: FC<ProfileHeaderProps> = ({
  avatarSrc,
  name,
  subtitle,
  description,
  socialLinks = [],
}) => (
  <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
    {/* ─── avatar ─────────────────────────────────────────────── */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="absolute -inset-1 rounded-full blur" />
      <Avatar className="h-60 w-60 border-4 border-ctp-crust relative overflow-hidden">
        <AvatarImage
          src={avatarSrc}
          alt={name}
          className="object-cover w-full h-full rounded-full"
        />
        <AvatarFallback className="bg-ctp-mantle text-ctp-mauve text-4xl">
          {name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .slice(0, 2)}
        </AvatarFallback>
      </Avatar>
    </motion.div>

    {/* ─── text + socials ─────────────────────────────────────── */}
    <div className="flex-1 w-full flex flex-col md:flex-row md:items-start md:justify-between">
      {/* text */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ctp-rosewater">
          {name}
        </h1>
        <h2 className="text-xl md:text-2xl text-ctp-mauve mb-6">
          {subtitle}
        </h2>
        <p className="text-ctp-rosewater/80 md:text-xl max-w-2xl">
          {description}
        </p>
      </div>

      {/* socials */}
      {socialLinks.length > 0 && (
        <div className="flex gap-6 mt-4 md:mt-0 self-center md:self-start ml-auto">
          {socialLinks.map(({ href, icon: Icon }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#c6a0f6' }}
              className="text-ctp-rosewater hover:text-ctp-mauve transition-colors"
            >
              <Icon size={28} />
            </motion.a>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default ProfileHeader;
