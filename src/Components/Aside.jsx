import { Link } from 'react-router-dom';
import {
  SignedIn,
  UserButton,
  useUser,
  useClerk,
} from "@clerk/clerk-react";

const Aside = ({ setActiveTab }) => {
  const { user } = useUser();
  const { signOut } = useClerk();

  const navItems = [
    { id: 'Newconect', label: 'Dashboard', icon: '📊' },
    { id: 'History', label: 'History', icon: '📜' },
  ];

  return (
    <aside className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gradient-to-b from-base-200/95 to-base-300/95 backdrop-blur-lg border-r border-base-content/10">
      <div className="h-full px-4 py-6 flex flex-col">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 px-2 mb-8 group">
          <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none">
              <path d="M21 15V19C21 19.5304..." stroke="currentColor" strokeWidth="2" />
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" />
              <path d="M12 15V3" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-focus bg-clip-text text-transparent">
            TwitchArchiver
          </span>
        </Link>

        {/* Nav Buttons */}
        <nav className="space-y-2 font-medium flex-1">
          {navItems.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className="flex items-center w-full p-3 rounded-xl hover:bg-base-100/50 transition duration-200 gap-3 group"
              aria-label={`Go to ${label}`}
            >
              <span className="text-xl group-hover:scale-110 transition-transform">{icon}</span>
              <span className="text-base-content/80 group-hover:text-base-content transition-colors">
                {label}
              </span>
            </button>
          ))}        
        </nav>

        {/* User Profile & Logout */}
        <SignedIn>
          <div className="card bg-base-100/50 backdrop-blur p-4 border border-base-content/10">
            <div className="flex items-center gap-4">
              <div className="avatar ring-2 ring-primary/20 rounded-full p-0.5">
                <div className="w-12 h-12 rounded-full">
                  <UserButton />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">
                  {user?.firstName || 'User'} {user?.lastName || ''}
                </div>
                <div className="text-sm text-base-content/60 truncate">
                  {user?.publicMetadata?.plan || 'Free Plan'}
                </div>
              </div>
            </div>
            <button 
              onClick={() => signOut()} 
              className="btn btn-primary mt-4 w-full bg-gradient-to-r from-primary to-primary-focus hover:opacity-90 transition-opacity"
            >
              Logout
            </button>
          </div>
        </SignedIn>
      </div>
    </aside>
  );
};

export default Aside;
