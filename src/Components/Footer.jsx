import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-base-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-20 pb-10 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16"
        >
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="font-bold text-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <motion.li key={link.name} variants={itemVariants}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-primary transition-all duration-200 hover:pl-2"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-base-300 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link to="/" className="flex items-center gap-2 group">
              <FiZap className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Waafi.pro
              </span>
            </Link>

            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Waafi.pro | Professional Email Validation Service
            </div>

            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="btn btn-circle btn-ghost btn-sm hover:text-primary hover:scale-110 transition-all duration-300">
                <FiTwitter className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="btn btn-circle btn-ghost btn-sm hover:text-primary hover:scale-110 transition-all duration-300">
                <FiGithub className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="btn btn-circle btn-ghost btn-sm hover:text-primary hover:scale-110 transition-all duration-300">
                <FiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;