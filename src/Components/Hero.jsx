const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100 pt-16">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 max-w-7xl mx-auto px-4">
        <div className="flex-1 relative">
          <div className="card-glass p-4 relative z-10">
            <div className="mockup-code bg-base-100 text-primary-content">
              <pre data-prefix="$"><code>npm install twitch-archiver</code></pre>
              <pre data-prefix=">"><code>Archiving chat from channel...</code></pre>
              <pre data-prefix=">" className="text-success"><code>Successfully archived 2.5K messages!</code></pre>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-primary to-info opacity-10 rounded-xl"></div>
        </div>
        
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-8 heading-gradient">
            Never Lose Your Stream's Chat History Again
          </h1>
          <p className="py-6 text-lg text-gray-300">
            Automatically archive and analyze your Twitch chat data. Transform chat logs into valuable insights with our powerful search and export features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary">
              Start Archiving
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="btn btn-outline btn-accent">
              Watch Demo
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-8">
            <div className="stats bg-base-200 shadow">
              <div className="stat">
                <div className="stat-title">Active Users</div>
                <div className="stat-value text-primary">10K+</div>
              </div>
              <div className="stat">
                <div className="stat-title">Messages Archived</div>
                <div className="stat-value text-secondary">25M+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;