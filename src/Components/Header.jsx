import { Link } from "react-router-dom";
import { FiCheck, FiMenu, FiZap, FiLogIn, FiUserPlus } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useAuth } from '../context/authcontext';

const Header = () => {
  const { user } = useAuth();
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={menuVariants}
      transition={{ duration: 0.3 }}
      className="navbar bg-base-100 fixed top-0 z-50 backdrop-blur-xl bg-opacity-50 border-b border-accent/10 shadow-sm"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FiMenu className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100/95 backdrop-blur-xl rounded-box w-52 border border-accent/10"
          >
            <li>
              <Link to="/features" className="flex items-center gap-2 hover:bg-primary/10 transition-all duration-300">
                <FiCheck className="h-4 w-4" /> Features
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:bg-primary/10 transition-all duration-300">Pricing</Link>
            </li>
            <li>
              <Link to="/docs" className="hover:bg-primary/10 transition-all duration-300">API Docs</Link>
            </li>
            {!user && (
              <>
                <div className="divider my-1"></div>
                <li>
                  <Link to="/signin" className="hover:bg-primary/10 transition-all duration-300">
                    <FiLogIn className="h-4 w-4" /> Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="hover:bg-primary/10 transition-all duration-300">
                    <FiUserPlus className="h-4 w-4" /> Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl font-bold flex items-center gap-2 group">
          <FiZap className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Waafi.pro</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
            <Link to="/features" className="flex items-center gap-2 hover:text-primary transition-all duration-300">
              <FiCheck className="h-4 w-4" /> Features
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
            <Link to="/pricing" className="hover:text-primary transition-all duration-300">Pricing</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
            <Link to="/docs" className="hover:text-primary transition-all duration-300">API Docs</Link>
          </motion.li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {!user && (
          <>
            <Link to="/signin" className="btn btn-ghost btn-sm hidden lg:flex items-center gap-2">
              <FiLogIn className="h-4 w-4" /> Sign In
            </Link>
            <Link to="/signup" className="btn btn-primary btn-sm hidden lg:flex items-center gap-2">
              <FiUserPlus className="h-4 w-4" /> Sign Up
            </Link>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Header;
