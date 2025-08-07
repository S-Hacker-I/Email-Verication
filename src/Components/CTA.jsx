import { FiArrowRight, FiCheck, FiPlay, FiZap } from 'react-icons/fi';

const CTA = () => {
  return (
    <div className="py-24 bg-base-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-info opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="card card-glass">
          <div className="card-body p-12 text-center">
            <div className="flex justify-center mb-6">
              <FiZap className="h-12 w-12 text-primary animate-pulse" />
            </div>
            <h2 className="text-4xl font-bold mb-6 heading-gradient">
              Validate Your Email Lists with Confidence
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses who trust Waafi.pro for accurate email validation.
              Start improving your email deliverability today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn btn-primary btn-lg group">
                Start Validating Free
                <FiArrowRight className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn btn-outline btn-lg group">
                Watch Demo
                <FiPlay className="h-6 w-6 ml-2 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center">
                <FiCheck className="h-5 w-5 mr-2 text-success" />
                5,000 Free Credits
              </div>
              <div className="flex items-center">
                <FiCheck className="h-5 w-5 mr-2 text-success" />
                No Credit Card Required
              </div>
              <div className="flex items-center">
                <FiCheck className="h-5 w-5 mr-2 text-success" />
                Enterprise Support
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-base-300">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="stat place-items-center">
                  <div className="stat-title">Response Time</div>
                  <div className="stat-value text-primary">0.2s</div>
                  <div className="stat-desc">Per Email</div>
                </div>

                <div className="stat place-items-center">
                  <div className="stat-title">Success Rate</div>
                  <div className="stat-value text-secondary">99.9%</div>
                  <div className="stat-desc">Validation Accuracy</div>
                </div>

                <div className="stat place-items-center">
                  <div className="stat-title">API Uptime</div>
                  <div className="stat-value text-accent">99.99%</div>
                  <div className="stat-desc">Last 30 Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;