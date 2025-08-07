import { FiMail, FiPlay } from 'react-icons/fi';
import { BiCheckShield } from 'react-icons/bi';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100 pt-16">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 max-w-7xl mx-auto px-4">
        <div className="flex-1 relative">
          <div className="card-glass p-4 relative z-10">
            <div className="mockup-code bg-base-100 text-primary-content">
              <pre data-prefix=">"><code>Validating email addresses...</code></pre>
              <pre data-prefix=">" className="text-success"><code>✓ john.doe@company.com - Valid</code></pre>
              <pre data-prefix=">" className="text-error"><code>✗ invalid.email@ - Invalid format</code></pre>
              <pre data-prefix=">" className="text-warning"><code>! temp@disposable.com - Disposable</code></pre>
              <pre data-prefix=">" className="text-success"><code>Validation complete! View detailed report</code></pre>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-primary to-info opacity-10 rounded-xl"></div>
        </div>
        
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-8 heading-gradient">
            Professional Email Validation Made Simple
          </h1>
          <p className="py-6 text-lg text-gray-300">
            Ensure your email lists are clean, valid, and ready for business. Our advanced validation service helps you maintain high deliverability rates and protect your sender reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary">
              Start Validating
              <FiMail className="w-5 h-5 ml-2" />
            </button>
            <button className="btn btn-outline btn-accent">
              See How It Works
              <FiPlay className="w-5 h-5 ml-2" />
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-8">
            <div className="stats bg-base-200 shadow">
              <div className="stat">
                <div className="stat-title">Emails Validated</div>
                <div className="stat-value text-primary">1M+</div>
                <div className="stat-desc">Last 30 days</div>
              </div>
              <div className="stat">
                <div className="stat-title">Accuracy Rate</div>
                <div className="stat-value text-secondary">99.9%</div>
                <div className="stat-desc">Verified Results</div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center lg:justify-start text-sm text-gray-400">
            <BiCheckShield className="w-5 h-5 mr-2" />
            <span>Enterprise-grade security & GDPR compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;