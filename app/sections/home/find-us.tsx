"use client";

import { MapPin, Clock, Calendar } from 'lucide-react';

const FindUs = () => {
  return (
    <section 
      className="relative w-full py-20 lg:py-32 overflow-hidden"
      aria-labelledby="find-us-heading"
    >
      {/* Light warm background */}
      <div className="absolute inset-0 bg-[var(--background)]" />
      
      {/* Subtle ambient Light Effects for light theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Primary ambient glow - subtle red tint */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[50%] bg-[var(--color-highlight)]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[40%] bg-red-100/60 rounded-full blur-[100px]" />
        
        {/* Geometric floating elements - subtle visibility */}
        <div className="absolute top-[15%] left-[25%] w-16 h-16 border border-[var(--color-highlight)]/10 rounded-2xl rotate-12 backdrop-blur-sm" />
        <div className="absolute top-[45%] right-[20%] w-12 h-12 border border-[var(--color-highlight)]/8 rounded-full" />
        <div className="absolute bottom-[25%] left-[15%] w-10 h-10 border border-[var(--color-highlight)]/6 rounded-lg rotate-45" />
        
        {/* Floating glass lines */}
        <div className="absolute top-[30%] left-[10%] w-1.5 h-28 bg-gradient-to-b from-[var(--color-highlight)]/10 to-transparent rounded-full rotate-12 blur-[1px]" />
        <div className="absolute bottom-[40%] right-[8%] w-1 h-20 bg-gradient-to-b from-red-200/40 to-transparent rounded-full -rotate-12 blur-[1px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border border-[var(--color-highlight)]/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-highlight)] opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-highlight)]"></span>
            </span>
            <span className="text-[var(--color-secondary-text)] text-sm font-medium uppercase tracking-[0.2em]">
              Visit Us
            </span>
          </div>
          <h2 
            id="find-us-heading"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] mt-4 tracking-tight"
          >
            Find{' '}
            <span className="relative">
              <span className="relative z-10 text-[var(--color-highlight)]">Us</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--color-highlight)]/15 -z-0 blur-xl" />
            </span>
          </h2>
          <p className="text-[var(--color-secondary-text)] mt-4 max-w-xl mx-auto text-lg">
            Join us for worship and experience the warmth of our community
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Left - Map with Glass Frame */}
          <div className="lg:col-span-7">
            <div className="relative group">
              {/* Multi-layer glass border effect - light version */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[var(--color-highlight)] via-red-200 to-[var(--color-highlight)] rounded-[2rem] opacity-25 group-hover:opacity-40 transition-all duration-700 blur-sm" />
              <div className="absolute -inset-0.5 bg-gradient-to-br from-white/80 to-[var(--background)] rounded-[2rem]" />
              
              <div className="relative rounded-[1.75rem] overflow-hidden bg-white/60 backdrop-blur-xl shadow-xl shadow-black/5 border border-white/50">
                {/* Map container with glass overlay */}
                <div className="relative h-[320px] lg:h-[420px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.541663048926!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x8c4b8e9e9e9e9e9e!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Church Location Map"
                    className="w-full h-full relative z-0"
                  />
                  
                  {/* Glass overlay on map */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating location indicator */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-highlight)] backdrop-blur-xl flex items-center justify-center shadow-lg shadow-[var(--color-highlight)]/40">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Glass Cards Stack */}
          <div className="lg:col-span-5 space-y-4">
            {/* Main Address Card - Large */}
            <div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl border border-[var(--color-highlight)]/10 shadow-lg shadow-black/5 p-6 hover:bg-white/90 hover:shadow-xl hover:shadow-[var(--color-highlight)]/10 transition-all duration-500 hover:scale-[1.02]">
              {/* Card shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-highlight)]/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative flex items-start gap-5">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-highlight)] to-red-800 flex items-center justify-center shadow-lg shadow-[var(--color-highlight)]/30">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-[var(--color-highlight)]/20 rounded-2xl blur-lg -z-10" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-[var(--foreground)] font-bold text-lg mb-2">Epworth Methodist Tamil Church</h3>
                  <p className="text-[var(--color-secondary-text)] text-sm leading-relaxed">
                    No. 25, Museum Road<br />
                    Bengaluru, Karnataka 560001
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[var(--color-highlight)] text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-highlight)]" />
                    <span>India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sunday Service Card - Medium */}
            <div className="group relative bg-white/60 backdrop-blur-xl rounded-3xl border border-[var(--color-highlight)]/8 shadow-md shadow-black/5 p-5 hover:bg-white/85 hover:shadow-lg hover:border-[var(--color-highlight)]/15 transition-all duration-500 hover:translate-x-2">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[var(--color-highlight)]/8 rounded-full blur-3xl -z-10" />
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-highlight)]/10 border border-[var(--color-highlight)]/15 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-[var(--color-highlight)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[var(--foreground)] font-semibold mb-2">Sunday Service</h3>
                  <div className="flex items-center gap-2 text-[var(--color-secondary-text)] text-sm">
                    <Clock className="w-4 h-4 text-[var(--color-highlight)]" />
                    <span className="font-medium text-[var(--foreground)]">8:30 AM</span>
                    <span className="text-[var(--color-secondary-text)]/40">—</span>
                    <span className="text-[var(--foreground)]">10:00 AM</span>
                  </div>
                  <div className="mt-2 text-xs text-[var(--color-secondary-text)]/60">
                    Every Sunday
                  </div>
                </div>
              </div>
            </div>

            {/* Dawn Service Card - Medium */}
            <div className="group relative bg-white/60 backdrop-blur-xl rounded-3xl border border-[var(--color-highlight)]/8 shadow-md shadow-black/5 p-5 hover:bg-white/85 hover:shadow-lg hover:border-[var(--color-highlight)]/15 transition-all duration-500 hover:translate-x-2">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-100/60 rounded-full blur-3xl -z-10" />
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[var(--foreground)] font-semibold mb-2">Dawn Service</h3>
                  <div className="flex items-center gap-2 text-[var(--color-secondary-text)] text-sm">
                    <Calendar className="w-4 h-4 text-red-600" />
                    <span className="font-medium text-[var(--foreground)]">1st of Every Month</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--color-secondary-text)] text-sm mt-1">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span className="font-medium text-[var(--foreground)]">5:30 AM Onwards</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini CTA Card */}
            <div className="group relative bg-gradient-to-br from-[var(--color-highlight)]/15 to-red-50 backdrop-blur-xl rounded-3xl border border-[var(--color-highlight)]/20 shadow-md shadow-black/5 p-5 hover:border-[var(--color-highlight)]/35 hover:shadow-lg hover:shadow-[var(--color-highlight)]/10 transition-all duration-500 cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-[var(--foreground)] font-semibold">Get Directions</h4>
                  <p className="text-[var(--color-secondary-text)] text-sm">Navigate to our church</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[var(--color-highlight)] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-[var(--color-highlight)]/30">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--color-highlight)]/20" />
          <div className="w-2 h-2 rounded-full bg-[var(--color-highlight)]/40" />
          <div className="w-1 h-1 rounded-full bg-[var(--color-secondary-text)]/30" />
          <div className="w-1 h-1 rounded-full bg-[var(--color-secondary-text)]/20" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--color-highlight)]/20" />
        </div>
      </div>
    </section>
  );
};

export default FindUs;
