import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Separator } from '../components/ui/separator';

const Shop = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              {...fadeIn}
            >
              Featured Product
            </motion.h1>
            <Separator className="mt-6 bg-red-800/50" />
          </div>
          
          {/* Rickroll Video Embed */}
          <motion.div 
            {...fadeIn}
            className="relative w-full h-0 pb-[56.25%] mb-12"
          >
            <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?playsinline=1&autoplay=1&mute=1"
                title="Rickroll"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;
