import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiZap } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Product': [
      { name: 'Features', path: '/features' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'API Reference', path: '/api' },
      { name: 'Documentation', path: '/docs' }
    ],
    'Solutions': [
      { name: 'Bulk Validation', path: '/solutions/bulk' },
      { name: 'Real-time API', path: '/solutions/api' },
      { name: 'Email Verification', path: '/solutions/verification' },
      { name: 'Enterprise', path: '/enterprise' }
    ],
    'Resources': [
      { name: 'Developer Guide', path: '/guide' },
      { name: 'Help Center', path: '/help' },
      { name: 'System Status', path: '/status' },
      { name: 'Security', path: '/security' }
    ],
    'Company': [
      { name: 'About Us', path: '/about' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' }
    ]
  };

  return (
    <footer className="bg-base-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-base-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <FiZap className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">Waafi.pro</span>
            </div>

            <div className="text-gray-400 text-sm">
              © {currentYear} Waafi.pro | Professional Email Validation Service
            </div>

            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="btn btn-circle btn-ghost btn-sm hover:text-primary transition-colors">
                <FiTwitter className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="btn btn-circle btn-ghost btn-sm hover:text-primary transition-colors">
                <FiGithub className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="btn btn-circle btn-ghost btn-sm hover:text-primary transition-colors">
                <FiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;