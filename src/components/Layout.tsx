// Layout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        {/* The outlet renders the nested route's component */}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
