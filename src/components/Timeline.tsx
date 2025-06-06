import { FC, ReactElement } from 'react';
import { motion } from 'framer-motion';
import { Separator } from './ui/separator';
import { GraduationCap } from 'lucide-react';

export interface TimelineItem {
  year: string;
  title: string;
  place: string;
  description: string;
  icon: ReactElement;
}

interface TimelineProps {
  heading: string;
  items: TimelineItem[];
}

const Timeline: FC<TimelineProps> = ({ heading, items }) => (
  <section className="mb-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <GraduationCap className="mr-2 text-ctp-green" />
        {heading}
      </h2>
      <Separator className="mb-8 bg-ctp-mauve" />

      <div className="space-y-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-ctp-mauve/20 border border-ctp-mauve flex items-center justify-center text-ctp-green">
                {item.icon}
              </div>
            </div>

            <div className="pb-6 border-l border-stone-700 pl-6">
              <div className="px-2 py-1 bg-ctp-base text-ctp-mauve text-sm rounded inline-block mb-2">
                {item.year}
              </div>
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-ctp-green mb-2">{item.place}</p>
              <p className="text-ctp-rosewater/80">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Timeline;
