import { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { path: '/', label: 'home' },
    // { path: '/projects', label: 'projects' },
    // { path: '/about', label: 'about' },
    { path: '/shop', label: 'shop'},
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ctp-crust/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-stone-50 font-bold text-2xl"
          >
            Esc
          </motion.a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-2 py-1 text-lg transition-colors ${
                  isActive
                    ? "text-ctp-mauve"
                    : "text-ctp-rosewater hover:text-ctp-mauve/80"
                }`
              }
              end={item.path === "/"}  // so index "/" only matches exactly
              >
              {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-ctp-green"
                    initial={false}
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.25 }}
                  />
                )}
              </NavLink>
            ))}
          </nav>
          
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-ctp-rosewater hover:text-ctp-mauve">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-ctp-base border-ctp-crust">
              <nav className="flex flex-col space-y-6 mt-12">
                {navItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className={`text-xl px-2 py-2 border-l-2 transition-all ${
                      isActive(item.path)
                        ? 'text-ctp-mauve border-ctp-mauve pl-4'
                        : 'text-ctp-rosewater border-transparent hover:text-ctp-mauve hover:border-ctp-mauve hover:pl-4'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;