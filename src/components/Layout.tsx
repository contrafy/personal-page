import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";

/** All pages share this wrapper.  Navbar never unmounts. */
export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* The only thing that animates is <Outlet/> */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}           // ↞ page key
          // initial={{ opacity: 0, y: 8 }}
          // animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}