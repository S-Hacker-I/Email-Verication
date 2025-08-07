import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { FiCheck, FiMenu, FiZap } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="navbar bg-base-100 fixed top-0 z-50 backdrop-blur-lg bg-opacity-50 border-b border-accent/10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FiMenu className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/features" className="flex items-center gap-2">
                <FiCheck className="h-4 w-4" /> Features
              </Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/docs">API Docs</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl font-bold flex items-center gap-2">
          <FiZap className="h-6 w-6 text-primary" />
          Waafi.pro
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link to="/features" className="flex items-center gap-2 hover:text-primary transition-colors">
              <FiCheck className="h-4 w-4" /> Features
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
          </li>
          <li>
            <Link to="/docs" className="hover:text-primary transition-colors">API Docs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <SignedOut>
          <Link to="/features" className="btn btn-ghost btn-sm hidden sm:flex">
            View Demo
          </Link>
          <SignInButton mode="modal">
            <button className="btn btn-primary btn-sm">
              Start Free
              <FiZap className="h-4 w-4 ml-1" />
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link to="/dashboard" className="btn btn-ghost btn-sm">
            Dashboard
          </Link>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
