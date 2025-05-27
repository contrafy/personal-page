import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from './ui/avatar';

interface ProfileHeaderProps {
  avatarSrc: string;
  name: string;
  subtitle: string;
  description: string;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({
  avatarSrc,
  name,
  subtitle,
  description,
}) => (
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
    {/* avatar */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-red-500 to-red-800 opacity-75 blur" />
      <Avatar className="h-60 w-60 border-4 border-stone-800 relative overflow-hidden">
        <AvatarImage
          src={avatarSrc}
          alt={name}
          className="object-cover w-full h-full rounded-full"
        />
        <AvatarFallback className="bg-stone-800 text-red-500 text-4xl">
          {name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .slice(0, 2)}
        </AvatarFallback>
      </Avatar>
    </motion.div>

    {/* text */}
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-100">
        {name}
      </h1>
      <h2 className="text-xl md:text-2xl text-red-400 mb-6">
        {subtitle}
      </h2>
      <p className="text-stone-300 md:text-xl max-w-2xl">{description}</p>
    </div>
  </div>
);

export default ProfileHeader;
