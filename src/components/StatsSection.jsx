"use client";

const StatsSection = () => {
  return (
    <section 
      className="w-full bg-[#0a0a0a] bg-[url('/images/globe.png')] bg-top bg-no-repeat bg-contain text-white pt-30 px-6 lg:px-8 font-sans"
      style={{ backgroundSize: '1000px', backgroundPosition: 'center top -550px' }}
    >
      <div className="mx-auto container space-y-16">
        
        {/* Section Heading Label */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-relaxed text-zinc-100">
            Assisting over <span className="font-semibold text-white">15,000 job seekers</span> <br className="hidden sm:inline" /> 
            find their dream positions.
          </h2>
        </div>

        {/* 4-Column Stats Matrix Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl md:max-w-2xl mx-auto">
          
          {/* Card 1: Active Jobs */}
          <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between h-48 hover:border-zinc-700 transition-colors">
            <div className="text-zinc-400">
              {/* Gravaty Briefcase Icon */}
              <svg className="h-5 w-5 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="8" width="18" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 8V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="14" r="2" />
              </svg>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold tracking-tight text-white">50K</div>
              <div className="text-xs font-medium text-zinc-500 tracking-wide uppercase">Active Jobs</div>
            </div>
          </div>

          {/* Card 2: Companies */}
          <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between h-48 hover:border-zinc-700 transition-colors">
            <div className="text-zinc-400">
              {/* Gravaty Corporate Pillars Icon */}
              <svg className="h-5 w-5 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="7" height="9" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="14" y="3" width="7" height="5" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="14" y="12" width="7" height="9" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="16" width="7" height="5" rx="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold tracking-tight text-white">12K</div>
              <div className="text-xs font-medium text-zinc-500 tracking-wide uppercase">Companies</div>
            </div>
          </div>

          {/* Card 3: Job Seekers */}
          <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between h-48 hover:border-zinc-700 transition-colors">
            <div className="text-zinc-400">
              {/* Gravaty User Lens Icon */}
              <svg className="h-5 w-5 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="9" r="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 21a7 7 0 0 1 14 0" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="18" cy="6" r="1.5" />
              </svg>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold tracking-tight text-white">2M</div>
              <div className="text-xs font-medium text-zinc-500 tracking-wide uppercase">Job Seekers</div>
            </div>
          </div>

          {/* Card 4: Satisfaction Rate */}
          <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between h-48 hover:border-zinc-700 transition-colors">
            <div className="text-zinc-400">
              {/* Gravaty Star Icon */}
              <svg className="h-5 w-5 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold tracking-tight text-white">97%</div>
              <div className="text-xs font-medium text-zinc-500 tracking-wide uppercase">Satisfaction Rate</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;