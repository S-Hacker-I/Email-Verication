import { FiMail, FiPlay, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100 pt-16 overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-7xl mx-auto px-4">
        <motion.div 
          className="flex-1 relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="card-glass p-6 relative z-10 backdrop-blur-xl bg-base-100/30 border border-accent/10 rounded-2xl shadow-2xl">
            <div className="mockup-code bg-base-100/50 text-primary-content shadow-inner">
              <pre data-prefix=">"><code>Validating email addresses...</code></pre>
              <pre data-prefix=">" className="text-success"><code>✓ john.doe@company.com - Valid</code></pre>
              <pre data-prefix=">" className="text-warning"><code>! support@temp-mail.org - Disposable</code></pre>
              <pre data-prefix=">" className="text-error"><code>✗ invalid.email@ - Invalid format</code></pre>
              <pre data-prefix=">" className="text-info"><code>Analyzing deliverability scores...</code></pre>
              <pre data-prefix=">" className="text-success"><code>Report generated successfully!</code></pre>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
        </motion.div>
        
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <FiZap className="w-4 h-4" />
            <span className="text-sm font-medium">Enterprise Email Validation</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-8 heading-gradient leading-tight">
            Validate Emails with Enterprise Precision
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Protect your sender reputation and maximize deliverability with our advanced email validation service. Real-time verification, bulk processing, and detailed quality scoring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button 
              className="btn btn-primary btn-lg group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Validating Free
              <FiMail className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </motion.button>
            
            <motion.button 
              className="btn btn-outline btn-lg group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Watch Demo
              <FiPlay className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 text-center lg:text-left">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-gray-400">Validation Accuracy</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">0.2s</div>
              <div className="text-sm text-gray-400">Response Time</div>
            </div>
            <div className="space-y-2 col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-accent">5,000+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;