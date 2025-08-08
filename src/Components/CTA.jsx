import { FiArrowRight, FiCheck, FiMail, FiShield, FiZap, FiUserPlus } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CTA = () => {
  const { user } = useAuth();

  return (
    <div className="py-24 bg-base-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-conic from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          className="card backdrop-blur-xl bg-base-100/30 border border-accent/10 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-body p-12 text-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <FiZap className="w-4 h-4" />
                <span className="text-sm font-medium">Start Validating Today</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 heading-gradient">
                Supercharge Your Email Deliverability
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses who trust our enterprise-grade email validation service.
                Start with 25 free verifications per month, no credit card required.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {!user ? (
                <Link to="/signup" className="btn btn-primary btn-lg group px-8">
                  Get Started Free
                  <FiUserPlus className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              ) : (
                <Link to="/dashboard" className="btn btn-primary btn-lg group px-8">
                  Go to Dashboard
                  <FiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              <a href="mailto:contact@waafi.pro" className="btn btn-outline btn-lg group px-8">
                Contact Sales
                <FiMail className="w-5 h-5 ml-2 group-hover:translate-y-[-2px] transition-transform" />
              </a>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-base-200/50">
                <FiCheck className="w-5 h-5 text-success" />
                <span>25 Free Verifications/Month</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-base-200/50">
                <FiCheck className="w-5 h-5 text-success" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-base-200/50">
                <FiShield className="w-5 h-5 text-success" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-base-200/50">
                <FiCheck className="w-5 h-5 text-success" />
                <span>24/7 Support</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTA;