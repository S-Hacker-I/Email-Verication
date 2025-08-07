import { FiCheckCircle, FiCpu, FiDatabase, FiLock, FiShield, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: 'Real-time Validation',
      description: 'Instantly validate email addresses with sub-second response times. Perfect for form validation and real-time verification.',
      icon: <FiZap />,
      color: 'text-primary'
    },
    {
      title: 'Advanced Verification',
      description: 'Multi-layer verification process checks format, domain, MX records, and disposable email detection with 99.9% accuracy.',
      icon: <FiCheckCircle />,
      color: 'text-secondary'
    },
    {
      title: 'Bulk Processing',
      description: 'Process millions of emails efficiently with our high-throughput API. Perfect for cleaning large mailing lists.',
      icon: <FiDatabase />,
      color: 'text-accent'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade encryption, GDPR compliance, and SOC 2 certification ensure your data remains secure and private.',
      icon: <FiShield />,
      color: 'text-info'
    },
    {
      title: 'Smart AI Detection',
      description: 'Advanced machine learning algorithms detect temporary emails, spam traps, and high-risk addresses.',
      icon: <FiCpu />,
      color: 'text-success'
    },
    {
      title: 'Detailed Analytics',
      description: 'Comprehensive reports with quality scores, validation history, and deliverability metrics for each email.',
      icon: <FiLock />,
      color: 'text-warning'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-24 bg-base-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-secondary opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <FiShield className="w-4 h-4" />
              <span className="text-sm font-medium">Enterprise Features</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 heading-gradient">
              Advanced Email Validation Features
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Industry-leading tools and technologies to ensure your email lists are valid, clean, and ready for business
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="card card-glass hover:shadow-lg transition-all duration-300 hover:scale-105 backdrop-blur-xl bg-base-100/30 border border-accent/10"
            >
              <div className="card-body">
                <div className={`w-12 h-12 rounded-xl bg-base-100/50 flex items-center justify-center mb-4 ${feature.color}`}>
                  <div className="text-2xl">{feature.icon}</div>
                </div>
                <h3 className="card-title text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="btn btn-primary btn-lg group">
            Explore All Features
            <FiZap className="h-5 w-5 ml-2 group-hover:rotate-12 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;