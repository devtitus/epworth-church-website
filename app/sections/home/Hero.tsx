import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Clock, MapPin, Heart, Users, BookOpen, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/1.jpg"
          alt="Epworth Methodist Tamil Church"
          fill
          className="object-cover"
          priority
        />
        {/* Sophisticated overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-[var(--color-highlight)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[50%] bg-red-900/15 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[20%] w-24 h-24 border border-white/10 rounded-full" />
        <div className="absolute top-[60%] left-[10%] w-16 h-16 border border-white/5 rounded-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Sparkles className="w-4 h-4 text-[var(--color-highlight)]" />
                <span className="text-white/90 text-sm font-medium">
                  Est. 1874 • A Heritage of Faith
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white leading-[1.15] mb-5">
                Epworth Methodist{' '}
                <span className="block mt-2">
                  <span className="inline-block">
                    Tamil Church
                  </span>
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Where faith, community, and hope converge. Experience transformative worship 
                and genuine fellowship as we journey together in God's love.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="secondary" className="px-8 py-4 text-base font-semibold flex items-center justify-center gap-2">
                  Learn More About Us
                </Button>
              </div>
            </div>

            {/* Right Column - Stats Card */}
            <div className="hidden lg:block">
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8">
                {/* Welcome Text */}
                <div className="text-center mb-8">
                  <h3 className="text-white text-2xl font-bold mb-2">Welcome to Our</h3>
                  <p className="text-white/60">Church Family</p>
                </div>

                {/* Simple Stats Row */}
                <div className="flex justify-center gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-1">150+</div>
                    <div className="text-sm text-white/50">Years</div>
                  </div>
                  <div className="w-px h-12 bg-white/20" />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-1">500+</div>
                    <div className="text-sm text-white/50">Members</div>
                  </div>
                  <div className="w-px h-12 bg-white/20" />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-1">5+</div>
                    <div className="text-sm text-white/50">Ministries</div>
                  </div>
                </div>

                {/* Service Info */}
                <div className="flex items-center justify-center gap-8 p-4 rounded-2xl bg-white/5">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[var(--color-highlight)]" />
                    <span className="text-white font-medium">8:30 AM</span>
                  </div>
                  <div className="w-px h-6 bg-white/20" />
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-highlight)]" />
                    <span className="text-white font-medium">Navi Mumbai, Maharashtra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Stats (visible only on small screens) */}
          <div className="lg:hidden mt-10">
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
              <div className="text-center mb-6">
                <h3 className="text-white text-xl font-bold mb-1">Welcome to Our Church Family</h3>
              </div>
              
              {/* Simple Stats Row */}
              <div className="flex justify-center gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">150+</div>
                  <div className="text-xs text-white/50">Years</div>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-xs text-white/50">Members</div>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">5+</div>
                  <div className="text-xs text-white/50">Ministries</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[var(--color-highlight)]" />
                  <span className="text-white">9:00 AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--color-highlight)]" />
                  <span className="text-white">Chennai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
