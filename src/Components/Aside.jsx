import { Link } from 'react-router-dom';
import { RiDashboardLine, RiHistoryLine } from 'react-icons/ri';
import { BiMenuAltLeft } from 'react-icons/bi';

const Aside = ({ setActiveTab, isSidebarOpen, setIsSidebarOpen }) => {

  const navItems = [
    { id: 'Newconect', label: 'Dashboard', icon: RiDashboardLine },
    { id: 'History', label: 'History', icon: RiHistoryLine },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 btn btn-circle btn-ghost lg:hidden"
      >
        <BiMenuAltLeft className="w-6 h-6" />
      </button>

      <aside className={`fixed top-0 left-0 z-40 w-72 h-screen transition-transform ${!isSidebarOpen ? '-translate-x-full' : 'translate-x-0'} lg:translate-x-0 bg-gradient-to-b from-base-200/95 to-base-300/95 backdrop-blur-lg border-r border-base-content/10`}>
        <div className="h-full px-4 py-6 flex flex-col">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 px-2 mb-8 group">
            <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-focus bg-clip-text text-transparent">
              Waafi.pro
            </span>
          </Link>

          {/* Nav Buttons */}
          <nav className="space-y-2 font-medium flex-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveTab(id);
                  setIsSidebarOpen(false);
                }}
                className="flex items-center w-full p-3 rounded-xl hover:bg-base-100/50 active:bg-base-100/70 transition duration-200 gap-3 group"
                aria-label={`Go to ${label}`}
              >
                <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-base-content/80 group-hover:text-base-content transition-colors">
                  {label}
                </span>
              </button>
            ))}
          </nav>

          {/* User Profile & Logout */}
          
        </div>
      </aside>
    </>
  );
};

export default Aside;
