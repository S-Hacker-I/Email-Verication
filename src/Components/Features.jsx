import { FiCheckCircle, FiDatabase, FiShield, FiZap } from 'react-icons/fi';

const Features = () => {
  const features = [
    {
      title: 'Real-time Validation',
      description: 'Instantly validate email addresses with our high-performance engine, supporting both single and bulk validation.',
      icon: <FiZap className="h-6 w-6" />
    },
    {
      title: 'Advanced Verification',
      description: 'Multi-layer verification process checks format, domain, MX records, and disposable email detection.',
      icon: <FiCheckCircle className="h-6 w-6" />
    },
    {
      title: 'Data Protection',
      description: 'Enterprise-grade security with GDPR compliance ensures your data remains private and protected.',
      icon: <FiShield className="h-6 w-6" />
    },
    {
      title: 'Comprehensive Reports',
      description: 'Detailed validation reports with quality scores and export options in multiple formats.',
      icon: <FiDatabase className="h-6 w-6" />
    }
  ];

  return (
    <div className="py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 heading-gradient">Advanced Email Validation Features</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional tools to ensure your email lists are valid, clean, and ready for business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card card-glass hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="card-body">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="card-title text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn btn-primary btn-lg group">
            Try It Free
            <FiZap className="h-6 w-6 ml-2 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;